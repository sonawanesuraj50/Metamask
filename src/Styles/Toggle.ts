import styled from "styled-components";
import React from "react";

const ToggleWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    background: black;
`;

const Notch = styled.div<any>`
    height: 21px;
    width:21px;
    border: 1px;
    background: white;
    border-radius: 50%;
    transition: transform 0.1s linear;
    transform: translate(${p => p.isActive ? '26px' : '1px'});
`;

// export function Toggle(isActive:any) {
//     return(
//         <ToggleWrapper>
//             <Notch isActive={isActive}/>
//         </ToggleWrapper>
//     )
// }
