import React from 'react'
import classes from './Footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom';
function Footer() {
    return (
        <div className={classes.container}>
            <FaFacebookF className={classes.socialMedia} />
            <FaTwitter className={classes.socialMedia} />
            <FaInstagram className={classes.socialMedia} />
            <FaLinkedin className={classes.socialMedia} />
            <div>
                <Link to="/" className={classes.links}>Home</Link>
                <Link to="/Services" className={classes.links}>Services</Link>
                <Link to="/MyServices" className={classes.links}>My Services</Link>
                <Link to="/Favorites" className={classes.links}>Favorites</Link>
                <Link to="/Profile" className={classes.links}>Profile</Link>
            </div>
        </div>
    )
}

export default Footer
