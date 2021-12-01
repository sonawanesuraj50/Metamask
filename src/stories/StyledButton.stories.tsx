import { Button } from '../Styles/Button.styles';
import { ThemeProvider } from "styled-components";
import LightTheme from '../Styles/LightTheme';
import { Typography } from '../Styles/Typography.styles';
import { ButtonDiv } from '../Styles/NavBar.styles';
import Clear from "@mui/icons-material/Clear";
import HomeIcon from '@mui/icons-material/Home';


export default{
    title: "Button",
    component: Button,
}

export const primary = () => (
    <ThemeProvider theme={LightTheme}>
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
                Icon Button<HomeIcon />
            </Button>
        </ButtonDiv>
    </ThemeProvider>
)
