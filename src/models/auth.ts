export interface LoginResponse {
  access: string;
  refresh: string;
  user?: User | null;
}

export interface RefreshResponse {
  access: string;
}
export interface RefreshResult {
  access: string;
}

export interface VerifyResponse {
    user: null;
  
}

export interface User {
  id: number;
  username: string;
  email?: string;
  
}

