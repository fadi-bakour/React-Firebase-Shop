import React, { useState, useEffect } from 'react'
import Header from '../../assets/services/header.png'
import classes from './ServicesPage.module.css'
import Card from '../../components/Card'
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import apis from '../../apis/Apis';


function MyServicesPage() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        document.title = 'My Services';
        const myServices = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                let services = [];
                apis.GetUserServices(user).then(async (res) => {
                    if (res) {
                        for (let i = 0; i < res.length; i++) {
                            // Create a reference with an initial file path and name
                            var photo = await firebase.storage().ref('services/' + user.uid + '/' + res[i][0]).getDownloadURL().then((photo) => {
                                return photo
                            });
                            res[i][1].photo = photo;
                            res[i][1].id = res[i][0];
                            services.push(res[i][1])
                        }
                        setServices(services);
                    } else {
                        setServices(null);
                    }

                });// This is be executed when `loading` state changes
            } else {
                // No user is signed in.
            }
        });
        return () => myServices();

    }, []);
    return (
        <div>
            <div className={classes.headerContainer}>
                <div className="container">
                    <img src={Header} alt="header" className={classes.header} />
                </div>
            </div>
            <div className="text-right mt-4 mr-2">
                <Link to="/MyServices/Create">
                    <Button text="Create New Service" color="green" type="button" />
                </Link>
            </div>
            <div className="text-center mt-5 mb-5 container">
                <h2>Why do we use it?</h2>
                <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className={`container ${classes.cardsContainer}`}>
                <div className="row mt-4 mb-4">
                    {services == null ?
                        <h3 className="col-12 text-center mt-5 mb-5"> You have no services </h3>
                        :
                        services.map((service, index) => {
                            return (
                                <Card key={service.id} title={service.title} description={service.description} user={service.owner} edit={true} id={service.id} photo={service.photo} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default MyServicesPage
