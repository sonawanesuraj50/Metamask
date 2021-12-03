import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Styles/Button.styles";
import { ThemeProvider } from "styled-components";
import LightTheme from '../Styles/LightTheme';
import { primary } from "./StyledButton.stories";
import { StyledCardComponent } from "../Styles/Cards.styles";


export default {
  title: "Styled Button",
  component: Button,
//   argTypes: {
//     'primary':any,
//   },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args:any) => (
    <ThemeProvider theme={LightTheme}>
        <StyledCardComponent args>
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
    </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {  
  name: "Button",
  variant: "normal",
  primaryColor: "#000000",
  styles: { padding: "10px 34px 10px 34px" },
  textColor: "#fff",
};