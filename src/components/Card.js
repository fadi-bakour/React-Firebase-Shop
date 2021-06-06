import React from 'react'
import classes from './Card.module.css'
import Image from '../assets/services/header.png'
import { FaHeart } from 'react-icons/fa'
function Card({ title, description, user }) {
    return (
        <div className="col-lg-4 col-md-6 mt-3 mb-3">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.initContainer}>
                        <div className={classes.init}>
                            {user[0].toUpperCase()}
                        </div>
                    </div>
                    <div>
                        <div className={classes.title}>
                            {title}
                        </div>
                        <div className={classes.owner}>
                            {user}
                        </div>
                    </div>
                    <div className={classes.heartContainer}>
                        <FaHeart className={classes.heart} />
                    </div>
                </div>
                <div className={classes.body}>
                    <img src={Image} className={classes.cardImage} alt="" />
                </div>
                <div className={classes.footer}>
                    <div>{description}</div>
                </div>
            </div>

        </div >
    )
}

export default Card
