import React from 'react'
import classes from './Card.module.css'
import Image from '../assets/services/header.png'
import { FaHeart } from 'react-icons/fa'
function Card() {
    return (
        <div className="col-lg-4 col-md-6 mt-3 mb-3">
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.initContainer}>
                        <div className={classes.init}>
                            R
                    </div>
                    </div>
                    <div>
                        <div className={classes.title}>
                            Website Design
                    </div>
                        <div className={classes.owner}>
                            Fadi Bakour
                    </div>
                    </div>
                    <div className={classes.heartContainer}>
                        <FaHeart className={classes.heart} />
                    </div>
                </div>
                <div className={classes.body}>
                    <img src={Image} className={classes.cardImage} alt=""/>
                </div>
                <div className={classes.footer}>
                    <div>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                </div>
            </div>

        </div >
    )
}

export default Card
