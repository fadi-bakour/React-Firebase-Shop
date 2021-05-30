import React from 'react';
import classes from './SearchInput.module.css';

function SearchInput({ type, name, placeholder, icon, register }) {

    return (
        <div className={classes.inputContainer}>
            <div className={classes.inputDiv}>
                <input type={type} name={name} placeholder={placeholder} className={classes.input}  {...register(name)} />
                <div className={classes.icon}>
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default SearchInput
