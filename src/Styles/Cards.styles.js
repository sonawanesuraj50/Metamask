import styled from "styled-components";


export const StyledCard = styled.article`
    width:90vw;
    max-width: 300px;
    background: white;
    border-radius: 0.25rem;
    img{
        width: 100%;
        border-top-left-radius: 0%.25rem;
        border-top-right-radius: 0%.25rem;
    }

    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        h4{
            color: black;
            text-transform: capitalize;        
        }
    }
    transition:all 0.5s ease-in-out; &:hover{
        box-shadow: 0 3px 3px #FFCCCB;
        cursor: pointer;

    }
    @media (min-width:786px) {
        max-width: 600px;
    }

`;