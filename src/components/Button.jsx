import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ href, target = '_self', label, icon, classes = '' }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-primary ${classes}`}>
        {label} {icon && <span>{icon}</span>}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label} {icon && <span>{icon}</span>}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.node, // Changed from `string` to `node` for better flexibility
  classes: PropTypes.string,
};


// secondary button
const ButtonOutline= ({ href, target = '_self', label, icon, classes = '' }) => {
    if (href) {
      return (
        <a href={href} target={target} className={`btn btn-ouline ${classes}`}>
          {label} {icon && <span>{icon}</span>}
        </a>
      );
    } else {
      return (
        <button className={`btn btn-ouline ${classes}`}>
          {label} {icon && <span>{icon}</span>}
        </button>
      );
    }
  };
  
  ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.node, // Changed from `string` to `node` for better flexibility
    classes: PropTypes.string,
  };


export { ButtonPrimary,
    ButtonOutline
};
