import styled,{css} from "styled-components";

export const GridContainer = styled.div<any>`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: ${props=>props.space};
  
`;

export const GridItem = styled.div`
    color: white;
    background-color: brown;
    display: flex;
    align-items: center;
    justify-content: center;
`;