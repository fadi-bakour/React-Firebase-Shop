import React from 'react'
import classes from './Button.module.css'

function Button({ text, type = null, color }) {
    return (
        <input type={type} className={color === 'green' ? classes.button : classes.buttonWhite} value={text} />
    )
}

export default Button
