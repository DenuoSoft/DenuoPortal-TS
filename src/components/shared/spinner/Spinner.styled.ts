import styled from 'styled-components';
import { Theme } from '../../../models/theme';

export const SpinnerBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 500px;
`;
export const Loader = styled.div<{theme: Theme}>`
 border: 2px solid #f3f3f3;
    border-top: 2px solid ${({ theme }) => theme.colors.primaryColor};
    border-radius: 50%;
    width: 150px;
    height: 150px;
    animation: spin 1s linear infinite;
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`
