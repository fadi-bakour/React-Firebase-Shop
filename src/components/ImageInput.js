import React from 'react';
import classes from './ImageInput.module.css';

function ImageInput({ type, name, placeholder, icon, register, required, errors, pattern, errorMessage, validate, defaultValue }) {

    return (
        <div className={classes.inputContainer}>
            <div className={classes.inputDiv}>

                <input type={type} defaultValue={defaultValue} name={name} placeholder={placeholder} className={classes.input}  {...register(name, { required, pattern: { value: pattern }, validate: validate })} />
                {errors[name] && <p className={classes.inputError}>{errorMessage}</p>}
            </div>

        </div>
    )
}

export default ImageInput
