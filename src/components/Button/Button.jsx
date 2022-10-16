import React from 'react';

// Style
import './Button.css';

const Button = ({text, type, onClick}) => {
    return (
            <button onClick={onClick} className={`btn btn-${type}`}>{text}</button>
    )
}

export default Button;