import styled,{css} from "styled-components";

export const Typography = styled.text`
  color: ${props => props.theme.textColor};
  font-size: 1.2rem;
  font-weight: 500;
  font-family: ${props => props.theme.fontFamily};
  text-transform: capitalize;
  ${(props:any) => props.small && css`
    font-size: 0.5rem;
  `}
  ${(props:any) => props.large && css`
    font-size: 1.5rem;
  `}
`;

