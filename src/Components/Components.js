import React from "react";
import { Button } from '../Styles/Button.styles';
import { StyledCard } from "../Styles/Cards.styles";
import { ButtonDiv } from "../Styles/NavBar.styles";
import { Typography } from "../Styles/Typography.styles";


function Component() {
  return (
      <div style={{padding:'25px',display:'flex',flexDirection:'column'}}>
      <Typography style={{margin:'auto'}}>Buttons</Typography>
        <ButtonDiv>
            <Button>Primary Button</Button>
            <Button secondary>secondary Button</Button>
            <Button error>error</Button>
            <Button animate>Animate</Button>
        </ButtonDiv>
        <Typography style={{margin:'auto'}}>Round Buttons</Typography>
        <ButtonDiv>
            <Button round>Primary Button</Button>
            <Button round secondary>secondary Button</Button>
            <Button round error>error</Button>
            <Button disabled>Disable</Button>
        </ButtonDiv>
        <Typography style={{margin:'auto'}}>Button Size</Typography>
        <ButtonDiv>
            <Button small>Small</Button>
            <Button>Medium</Button>
            <Button large>Large</Button>
        </ButtonDiv>
        <Typography style={{margin:'auto'}}>Outline Button</Typography>
        <ButtonDiv>
            <Button outline small>outline Primary</Button>
            <Button outline secondary>outline secondary</Button>
            <Button outline error large>outline error</Button>
        </ButtonDiv>
        <Typography style={{margin:'auto'}}>Text Button</Typography>
        <ButtonDiv>
            <Button small text>Text Primary</Button>
            <Button secondary text>Text secondary</Button>
            <Button error large text>Text error</Button>
        </ButtonDiv>
        <Typography style={{margin:'auto'}}>Cards</Typography>
        <div>
            <StyledCard>
                <img src="https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b" alt="Product"/>
                <footer>
                    <h4>Product Name</h4>
                    <h4>$20</h4>
                </footer>
            </StyledCard>
        </div>       
    </div>
  );
}

export default Component;
