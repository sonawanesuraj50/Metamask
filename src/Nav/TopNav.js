import styled from "styled-components";

export const TopNav = styled.nav`  
  background: #63D471;
  height: 25px;
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const Nav = styled.div`
    @media (max-width: 768px) {
        margin-left: auto;
    }    
    font-size: 20px !important;
`;
export const AppHeader = styled.div`
    background-color: #282c34;
    height: calc(100vh - 25px);
    @media (max-width: 768px) {
        height: calc(100vh - 100px);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

