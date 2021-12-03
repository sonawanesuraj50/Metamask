import React,{useState} from "react";
import { Button } from '../Styles/Button.styles';
import { CardComponent, Form, Input, StyledCard, StyledCardComponent } from "../Styles/Cards.styles";
import { ButtonDiv } from "../Styles/NavBar.styles";
import { Typography } from "../Styles/Typography.styles";
import Clear from "@mui/icons-material/Clear";
import HomeIcon from '@mui/icons-material/Home';



function Component() {
    const [cardTitle,setCardTitle] = useState(true);
    const ClearIcon = ()=>{
     setCardTitle(false)
    }
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
        <Typography style={{margin:'auto'}}>Icon Button</Typography>
        <ButtonDiv>
            <Button small>
                <Clear/>Icon Button
            </Button>
            <Button secondary>
                <Clear/>Icon Button
            </Button>
            <Button large error>
                Icon Button<HomeIcon/>
            </Button>
        </ButtonDiv>
        <Typography style={{margin:'auto',marginBottom:'20px'}}>Cards</Typography>
        <ButtonDiv>
            <StyledCard style={{marginBottom:'20px'}}>
                <img src="https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b" alt="Product"/>
                <footer>
                    <h4>Product Name</h4>
                    <h4>$20</h4>
                </footer>
            </StyledCard>
        <Form>            
            <Input name="userName" placeholder="username"/>
            <Input password="password" type="password" placeholder="password"/>
            <Button width={'100%'}>Login</Button>
        </Form>
        </ButtonDiv>
        <ButtonDiv>
            <CardComponent>
                {cardTitle &&
                    <header>
                        Card Header
                        <Clear onClick={ClearIcon}/>
                    </header>
                }
                <img src="https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b" alt="Product"/>
                <footer>
                    <h4>Card Title</h4>
                    <text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </text>
                    <ButtonDiv>
                        <Button  width="50%">Submit</Button>
                        <Button width="50%" error>Cancel</Button>
                    </ButtonDiv>
                </footer>
            </CardComponent>
            <StyledCardComponent>
            <header>
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>  
                <div>
                    <text>Stuar Manson</text>
                    <small>Publicado hace 2 horas</small>        
                </div>      
            </header>
            <img src="https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b" alt="Product"/>
            <footer>
                <title>Flores</title> 
                <small>by Stuar Manson</small>
                <text>Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality, Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality</text>
            </footer>
        </StyledCardComponent>
        </ButtonDiv>
    </div>
  );
}

export default Component;
