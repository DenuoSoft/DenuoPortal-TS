import {ReactNode} from 'react';
export interface SpinnerProps {
    isLoading:boolean;
	isError: boolean;
    children: ReactNode;
    minDelay: number;
    maxDelay: number;
    
}