import styled from 'styled-components';
import { Theme } from '../../models/theme';

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

export const InputBlock = styled.input < {theme: Theme, $hasClearButton: boolean}>`
	display: flex;
	width: 30rem;
  height: 5rem;
	border: none;
	outline: none;
  box-shadow: var(--box-shadow);
	/* padding: 1rem; */
  padding: ${({ $hasClearButton }) => ($hasClearButton ? '1rem' : '1rem')};
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    font-size: var(--text-size-14px);
    color: ${({ theme }) => theme.colors.headerText};
    &::placeholder {
        color: ${({ theme }) => theme.colors.headerText};
    }
`;
export const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
  color: #999;
  
  &:hover {
    color: #333;
  }
  
  &:focus {
    outline: none;
    color: #333;
  }
`;
