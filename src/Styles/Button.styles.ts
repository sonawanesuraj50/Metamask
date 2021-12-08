import styled,{css} from "styled-components";

export const Button = styled.button<any>`
  display: flex;
  justify-content: center;
  padding: 0.5em 1.2em;
  text-transform: capitalize;
  font-family: ${props => props.theme.fontFamily};
  font-size: 0.9rem;
  font-weight: 500;
  color: #fff;
  background-color: ${props => props.theme.primary};
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  width: ${props => props.width};
  :disabled {
     opacity: 0.4;
     cursor: not-allowed;
     pointer-events: auto;
     :hover{
       box-shadow: none;
     }
  }
  &:hover{
    box-shadow: inset 0px 0px 5px 20px rgb(0 0 0 / 8%);
  }
  &:active{
    background-color: gray;
  }
  svg{
    margin-top:auto ;
    width: 1rem;
    height: 1rem;
    color: ${(props:any):any => !props.theme.textColor};
    margin-left: 0.2rem;
    ${props => props.small && css`
      width: 0.7rem;
      height: 0.7rem;
    `}
    ${props => props.large && css`
      width: 1.4rem;
      height: 1.4rem;
    `}
  }
  ${props => props.animate && css`
    &:hover {
      box-shadow: inset 19px 20px 7px 20px rgb(0 0 0 / 8%);
      transform: translate(0, -4px);
    }
  `}
  ${props => props.secondary && css`
    background: ${props => props.theme.secondary};
    color: white;
  `}
  ${props => props.error && css`
    background: ${props => props.theme.error};
    color: white;
  `}
  ${props => props.outline && css`
    background-color: ${props => props.theme.backgroundColor};
    border: 2px solid ${props.secondary ? props.theme.secondary : props.error ? props.theme.error 
      : props.theme.primary};
    color: ${props.secondary ? props.theme.secondary : props.error ? props.theme.error : 
      props.theme.primary};
    &:hover{  
      transition: 0.5s all linear;
      background-color: ${props.secondary ? props.theme.secondary : props.error ? 
        props.theme.error : props.theme.primary};
      color: white;
    }
  `}
  ${props => props.small && css`
    font-size: 0.6rem;
  `}
  ${props => props.large && css`
    font-size: 1.3rem;
  `}
  ${props => props.round && css`
    border-radius: 1rem;
  `}
  ${props => props.text && css`
    background-color: inherit;
    box-shadow: none;
    color: ${(props:any) => props.secondary ? props.theme.secondary : props.error ? props.theme.error:   props.theme.primary};
  `}
`;

