import React, { useEffect } from 'react'
import Header from '../../assets/services/header.png'
import classes from './ServicesPage.module.css'

function CreateServicePage() {
    useEffect(() => {
        document.title = 'Create Service';
    }, []);
    
    return (
        <div>
            <div className={classes.headerContainer}>
                <div className="container">
                    <img src={Header} alt="header" className={classes.header}/>
                </div>
            </div>
            this is create
        </div>
    )
}

export default CreateServicePage
