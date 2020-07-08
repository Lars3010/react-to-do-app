import React from 'react';
import PropTypes from 'prop-types'

const Button = ({style, id, className, ariaLabel, buttonContent}) => {
    return (
        <button
            style={style}
            id={id}
            className={className}
            aria-label={ariaLabel}
        >
            {buttonContent}
        </button>
    )
}

Button.defaultProps = {
    buttonContent: 'Click Me'
}

Button.propTypes = {
    style: PropTypes.object,
    id: PropTypes.string,
    className: PropTypes.string,
    ariaLabel: PropTypes.string.isRequired,
    buttonContent: PropTypes.string,
}

export default Button;