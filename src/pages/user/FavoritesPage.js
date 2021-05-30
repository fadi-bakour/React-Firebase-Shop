import React, { useEffect } from 'react'
import Header from '../../assets/services/header.png'
import classes from './ServicesPage.module.css'
import Card from '../../components/Card'

function FavoritesPage() {
    useEffect(() => {
        document.title = 'Favorites';
    }, []);

    return (
        <div>
            <div className={classes.headerContainer}>
                <div className="container">
                    <img src={Header} alt="header" className={classes.header} />
                </div>
            </div>
            <div className="text-center mt-5 mb-5 container">
                <h2>Why do we use it?</h2>
                <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className={`container ${classes.cardsContainer}`}>
                <div className="row mt-4 mb-4">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default FavoritesPage
