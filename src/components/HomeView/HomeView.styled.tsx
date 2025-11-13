import styled from "styled-components";
import { Theme } from "../../models/theme";

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 16px;
  height: 100%;
`
export const HomeSlider = styled.div`
 margin-bottom: 16px; 
`
export const HomeNews = styled.div`
 display: flex;
 flex-direction: column;
 gap: 3.2rem;
`
export const NewsTitle = styled.h1<{theme: Theme}>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.headerText};
  font-size: 2.4rem;
  font-weight: 300;
  padding: 1rem 0;
 width: 10%;
  
`