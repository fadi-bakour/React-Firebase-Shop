import React from 'react'
import classes from './Button.module.css'

function Button({ text, type = null, color, onClick = null }) {
    return (
        <input type={type} className={color === 'green' ? classes.button : classes.buttonRed} value={text} onClick={onClick}/>
    )
}

export default Button
