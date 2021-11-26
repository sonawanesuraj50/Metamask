import styled,{css} from "styled-components";


export const StyledCard = styled.article`
    width:90vw;
    max-width: 30rem;
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
            color: ${props => !props.theme.textColor};
            text-transform: capitalize;        
        }
    }
    transition:all 0.5s ease-in-out; &:hover{
        box-shadow: 0 3px 3px ${props => props.theme.textColor};
        cursor: pointer;         
        transform: translate(0, -4px);
    }
`;


/********************************************************************/

// const gradient = degs => css`
//     background: 
//         linear-gradient(
//             ${degs || 130}deg,
//             #00dbde 0%,
//             #fc00ff 100%,
//         );
// `;

// export const Card = styled.div`
//     position: relative;
//     overflow: hidden;
//     width: 300px;
//     padding: 3rem 0 2rem;
//     border-radius: 0.5rem;
//     color: white;
//     ${gradient()};
//     box-shadow: 0px 24px 38px rgba(0,0,0,0.025),
//             0 9px 46px 8px rgba(0,0,0,0.025),
//             0 11px 15px -7px rgba(0,0,0,0.025);
// `;

// export const Content = styled.div`
//     position: absolute;
//     z-index: -3;
//     display: flex;       
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `; 


/******************************************************** */

export const Form = styled.form`
    width:90vw;
    max-width: 30rem;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;
`;

export const Input = styled.input`
    padding: 4px 8px;
    max-width: 30rem;
    border: 1px solid #ccc;
    border-radius:4px;
    font-size: 1em;
    font-family: 'Open sans';
    margin-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
`;