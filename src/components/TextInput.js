import React from 'react';
import classes from './TextInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TextInput({ type, name, placeholder = null, icon, register, required, errors, pattern = "*", errorMessage }) {

    return (
        <div className={classes.inputContainer}>
            <div className={classes.inputDiv}>
                <input type={type} name={name} placeholder={placeholder} className={classes.input}  {...register(name, { required, pattern: { value: pattern } })} />
                <div className={classes.icon}>
                    <FontAwesomeIcon icon={icon} />
                </div>
                {errors[name] && <p className={classes.inputError}>{errorMessage}</p>}

            </div>
        </div>
    )
}

export default TextInput
