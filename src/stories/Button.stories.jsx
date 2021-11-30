import React from 'react';

import { Button } from './Button';
import { ThemeProvider } from "styled-components";
import LightTheme from '../Styles/LightTheme';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: 'large',
  },
};

const Template = (args) => 
  <ThemeProvider theme={LightTheme}>
    <Button {...args}/>
  </ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'large',
  label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

// <StyledButton>ss</StyledButton>
