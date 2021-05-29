import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import classes from './NavBar.module.css';
import NavBarItem from './NavBarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar({SignOut}) {
    const [smallNav, setSmallNav] = useState(false);
    const ToggleMenu = () => {
        setSmallNav(prevCheck => !prevCheck)
    }
    return (
        <div className={classes.container}>
            <div className={classes.MainNav}>
                <Link to="/"><img src={logo} alt="logo" className={classes.logo} /></Link>
                <div className={classes.bars} onClick={ToggleMenu}>
                    <FontAwesomeIcon icon='bars' />
                </div>
            </div>
            <div className={smallNav === true ? classes.rightSide : classes.rightSideHide}>
                <NavBarItem link="/" text="Home" />
                <NavBarItem link="/" text="Services" />
                <NavBarItem link="/" text="Favorites" />
                <NavBarItem link="/" text="My Services" />
                <NavBarItem link="/" text="Profile" />
                <div className={classes.navBarButtonContainer}>
                    <div onClick={SignOut} className={classes.navBarButton}>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
