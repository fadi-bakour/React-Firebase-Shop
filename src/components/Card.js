import React from 'react'
import classes from './Card.module.css'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Card({ title, description, user, edit, id, photo }) {
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
                    {edit ? (
                        <Link to={{ pathname: '/MyServices/Edit/', state: { serviceId: id } }} className={classes.heartContainer} >
                            <FaEdit className={classes.heart} />
                        </Link>
                    ) : (null)
                    }
                </div>
                <div className={classes.body}>
                    <img src={photo} className={classes.cardImage} alt="" />
                </div>
                <div className={classes.footer}>
                    <div>{description}</div>
                </div>
            </div>

        </div >
    )
}

export default Card
