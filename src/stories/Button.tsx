import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

import { Button as StyledButton } from '../Styles/Button.styles'
/**
 * Primary UI component for user interaction
 */
export const Button = ({...props }) => {
  return (
    <StyledButton large
      {...props}>
        Button
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'large',
  onClick: undefined,
};
