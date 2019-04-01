import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({
  className,
  label,
  onClick,
  type,
  ...rest,
}) => (
  <button
    className={`button button--${type} ${className}`}
    onClick={onClick}
    {...rest}
  >
    {label}
  </button>
);

Button.defaultProps = {
  className: '',
  onClick: null,
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'accent']).isRequired,
};

export default Button;
