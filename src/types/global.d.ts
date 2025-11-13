declare module 'keycloak-js' {
  class Keycloak {
    constructor(config?: { url: string; realm: string; clientId: string });
    
    init(options: any): Promise<boolean>;
    login(options?: any): Promise<void>;
    logout(options?: any): Promise<void>;
    updateToken(minValidity?: number): Promise<boolean>;
    loadUserInfo(): Promise<any>;
    loadUserProfile(): Promise<any>;
    
    onTokenExpired?: () => void;
    token?: string;
    authenticated?: boolean;
    tokenParsed?: any;
    refreshToken?: string;
    idToken?: string;
  }

  export default Keycloak;
}