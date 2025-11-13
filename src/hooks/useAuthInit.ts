// hooks/useAutoAuth.ts
import { useEffect } from 'react';
import { useLoginMutation } from '../Api/apiSlice';
import { getToken, getRefreshToken } from '../utils/tokenUtils';
import { setCredentials, logout } from '../components/auth/authSlice';
import { useAppDispatch } from '../hooks/hooks';

export const useAutoAuth = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  useEffect(() => {
    const autoAuth = async () => {
      const token = getToken();
      const refreshToken = getRefreshToken();

      if (token && refreshToken) {
        // Если токен и refresh token есть - просто устанавливаем credentials
        dispatch(
          setCredentials({
            token,
            refreshToken,
            user: null, // или можно попробовать получить пользователя другим способом
          })
        );
      } else if (!token) {
        // Если нет токена - пытаемся авторизоваться
        try {
          const result = await login().unwrap();
          if (result?.access) {
            dispatch(
              setCredentials({
                token: result.access,
                refreshToken: result.refresh,
                user: result.user || null,
              })
            );
          }
        } catch (error) {
          console.error('Auto login failed:', error);
          dispatch(logout());
        }
      }
    };

    autoAuth();
  }, [dispatch, login]);

  return { 
    // Можно вернуть статус или другую информацию если нужно
    isInitialized: true 
  };
};