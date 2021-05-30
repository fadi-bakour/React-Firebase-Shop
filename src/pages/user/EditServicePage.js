import React, { useEffect } from 'react'
import Header from '../../assets/services/header.png'
import classes from './ServicesPage.module.css'
import { useForm } from "react-hook-form";

function EditServicePage() {
    useEffect(() => {
        document.title = 'Edit Service';
    }, []);

    return (
        <div>
            <div className={classes.headerContainer}>
                <div className="container">
                    <img src={Header} alt="header" className={classes.header} />
                </div>
            </div>
            this is edit
        </div>
    )
}

export default EditServicePage
