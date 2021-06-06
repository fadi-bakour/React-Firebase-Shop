import React, { useState, useEffect } from 'react'
import Header from '../../assets/services/header.png'
import classes from './ServicesPage.module.css'
import Card from '../../components/Card'
import SearchInput from '../../components/SearchInput';
import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa';
import apis from '../../apis/Apis';
import firebase from "firebase/app";

function ServicesPage() {
    const [services, setServices] = useState([]);
    const { register, watch } = useForm();

    useEffect(() => {
        document.title = 'My Services';
        apis.GetAllServices().then(async (res) => {
            let servicesArray = [];
            if (res) {
                for (let i = 0;i < res.length ; i++){
                    let userId = res[i][0];
                    let data = Object.entries(res[i][1]);
                    for (let j = 0; j< data.length;j++){
                        let ServiceId = data[j][0];
                        let ServiceData = data[j][1];
                        var photo = await firebase.storage().ref('products/' + userId + '/' + ServiceId).getDownloadURL().then((photo) => {
                            return photo
                        });
                        ServiceData.photo = photo;
                        ServiceData.id = ServiceId;
                        servicesArray.push(ServiceData);
                    }
                }
                setServices(servicesArray);
            } else {
                setServices(null);
            }
        });
    }, []);

    const Search = watch("Search");
    if (typeof Search !== 'undefined' && Search.trim() !== '') {
        console.log(Search)
    }

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
            <div className="container">
                <div className={classes.form}>
                    <SearchInput type="text" name="Search" placeholder="Search" icon={<FaSearch />} register={register} />
                </div>
            </div>
            <div className={`container ${classes.cardsContainer}`}>
                <div className="row mt-4 mb-4">
                    {services == null ?
                        <h3 className="col-12 text-center mt-5 mb-5"> No services </h3>
                        :
                        services.map((service, index) => {
                            return (
                                <Card key={service.id} title={service.title} description={service.description} user={service.owner} edit={false} photo={service.photo} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
