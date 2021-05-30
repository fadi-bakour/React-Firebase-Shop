import React from 'react';
import classes from './TextInput.module.css';

function TextInput({ type, name, placeholder, icon, register, required, errors, pattern, errorMessage, validate, defaultValue }) {

    return (
        <div className={classes.inputContainer}>
            <div className={classes.inputDiv}>
                <input type={type} defaultValue={defaultValue} name={name} placeholder={placeholder} className={classes.input}  {...register(name, { required, pattern: { value: pattern }, validate: validate })} />
                <div className={classes.icon}>
                    {icon}
                </div>
                {errors[name] && <p className={classes.inputError}>{errorMessage}</p>}

            </div>
        </div>
    )
}

export default TextInput
