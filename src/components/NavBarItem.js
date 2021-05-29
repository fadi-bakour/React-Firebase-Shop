import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBarItem.module.css';

function NavBarItem({ link, text }) {
    return (
        <div className={classes.navBarItemContainer}>
            <Link to={link} className={classes.navBarItem}>{text}</Link>
        </div>
    )
}

export default NavBarItem
