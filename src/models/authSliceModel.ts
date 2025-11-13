interface User {
	id: number;
	username: string;
	email?: string;
}

export interface Credentials {
	token: string;
	refreshToken: string;
	user?: User | null;
}
export interface AuthState {
	token: string | null;
	user: User | null;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
export interface CredentialsPayload {
	token: string;
	refreshToken?: string | null;
	user: User | null;
}
