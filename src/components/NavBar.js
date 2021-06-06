import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import classes from './NavBar.module.css';
import NavBarItem from './NavBarItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apis from '../apis/Apis';
import { FaBars } from 'react-icons/fa';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      SignOut: () => apis.logOutAuth()
    },
    dispatch,
  );

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
                    <FaBars />
                </div>
            </div>
            <div className={smallNav === true ? classes.rightSide : classes.rightSideHide}>
                <NavBarItem link="/" text="Home" />
                <NavBarItem link="/Services" text="Services" />
                {/* <NavBarItem link="/Favorites" text="Favorites" /> */}
                <NavBarItem link="/MyServices" text="My Services" />
                <NavBarItem link="/Profile" text="Profile" />
                <div className={classes.navBarButtonContainer}>
                    <div onClick={SignOut} className={classes.navBarButton}>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(NavBar);
