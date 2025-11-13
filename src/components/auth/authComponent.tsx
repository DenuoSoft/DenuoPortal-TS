import { useState, useEffect} from 'react';
import Keycloak from 'keycloak-js';
import { httpClient } from '../../../HttpClient';
import { KeycloakContext } from './keycloak-context';
import { AuthComponentProps, AuthContextValue, InitOptions, UserInfo } from '../../models/keycloak';

const initOptions: InitOptions = {
  url: 'https://sso.denuo.ru:8443', 
  realm: 'denuo',
  clientId: 'portaldev', 
};

let kc: any;

const AuthComponent = ({ children }: AuthComponentProps) => {
  const [infoMessage, setInfoMessage] = useState<string>('');
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', id: '' });
  const [keycloakInstance, setKeycloakInstance] = useState<Keycloak | null>(null);

  const handleStorageAccess = async (): Promise<boolean> => {
    if (document.hasStorageAccess && document.requestStorageAccess) {
      try {
        const hasAccess = await document.hasStorageAccess();
        if (!hasAccess) {
          await document.requestStorageAccess();
        }
        return true;
      } catch (error) {
        console.warn('Storage access denied:', error);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const initializeKeycloak = async (): Promise<void> => {
      if (!kc) {
        kc = new Keycloak(initOptions);
        setKeycloakInstance(kc);

        try {
          const storageAccessGranted = await handleStorageAccess();
          if (!storageAccessGranted) {
            console.warn('Storage access not granted - authentication may fail');
          }

          const auth = await kc.init({
            onLoad: 'login-required',
            checkLoginIframe: true,
            pkceMethod: 'S256',
            enableLogging: true, 
          });

          if (!auth) {
            window.location.reload();
            return;
          }

          //console.info('Authenticated');
          setAuthenticated(true);

          try {
            httpClient.defaults.headers.common['Authorization'] = `Bearer ${kc.token}`;
            // console.debug('Authorization header set successfully.');
          } catch (error) {
            console.error('Failed to set authorization header:', error);
            setInfoMessage('Failed to set authorization header');
          }

          kc.onTokenExpired = () => {
            // console.log('Token expired, attempting refresh...');
            kc.updateToken(30)
              .then((refreshed: any)  => {
                if (refreshed) {
                  // console.log('Token refreshed');
                  httpClient.defaults.headers.common['Authorization'] = `Bearer ${kc.token}`;
                }
              })
              .catch((err: any) => {
                console.error('Failed to refresh token:', err);
                kc.logout();
              });
          };

          const userData = await kc.loadUserInfo();
          setUserInfo({
            name: userData.name as string,
            email: userData.email as string,
            shortname: userData.preferred_username as string,
          });

        } catch (error) {
          console.error('Authentication Failed:', error);
          kc = undefined;
          setAuthenticated(false);
          setKeycloakInstance(null);
        }
      }
    };

    if (window.isSecureContext) {
      initializeKeycloak();
    } else {
      console.error('Authentication requires secure context (HTTPS)');
    }
  }, []);

  const authContextValue: AuthContextValue = {
    authenticated,
    userInfo,
    keycloak: keycloakInstance,
  };

  return (
    <KeycloakContext.Provider value={authContextValue}>
      {children}
    </KeycloakContext.Provider>
  );
};

export default AuthComponent;