import styled from "styled-components";

export const LayoutBlock = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: minmax(0, auto) minmax(30rem, 140rem) minmax(0, auto);
    grid-template-rows: 6rem 1fr;
    grid-template-areas: 
    "header header header" 
    ". main .";
    gap: 1.6rem;
`
export const Main = styled.main`
  grid-area: main;
 padding-bottom: 1.6rem;
`