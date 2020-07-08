import React from 'react';
import PropTypes from 'prop-types'

const Button = ({buttonText}) => {
    return (
    <button>{buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string
}

export default Button;