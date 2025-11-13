import { ReactNode } from 'react';

export interface InitOptions {
  url: string;
  realm: string;
  clientId: string;
}

export interface UserInfo {
  name: string;
  email: string;
  shortname?: string;
  id?: string;
}

export interface AuthContextValue {
  authenticated: boolean;
  userInfo: UserInfo;
  keycloak: any;
}

export interface AuthComponentProps {
  children: ReactNode;
}