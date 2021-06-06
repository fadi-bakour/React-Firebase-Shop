import React, { useEffect } from 'react'
import Header from '../../assets/services/header.png'
import classes from './CreateServicePage.module.css'
import apis from '../../apis/Apis';
import TextInput from '../../components/TextInput';
import { useForm } from "react-hook-form";
import Button from '../../components/Button';
import { FaBlog } from 'react-icons/fa';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';


function CreateServicePage() {
    const history = useHistory();
    const onSubmit = ({ title, description }) => {
        var createService = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userId = user.uid;
                apis.CreateService({ title, description, history, userId });
            } else {
                console.log('failed')
            }

        });
        createService();
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() => {
        document.title = 'Create Service';
    }, []);

    return (
        <div>
            <div className={classes.headerContainer}>
                <img src={Header} alt="header" className={classes.header} />
            </div>
            <div className="text-center mt-5 container">
                <h2>Create New Service</h2>
                <p>Add the required information for a new service here and publish it once you click create</p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextInput type="text" name="title" placeholder="Set Title of Service" icon={<FaBlog />} register={register} required errors={errors} errorMessage="This field is required" />
                    <TextInput type="text" name="description" placeholder="Set Description" icon={<FaBlog />} register={register} required errors={errors} errorMessage="This field is required" />

                    <div className={classes.buttonDiv}>
                        <Button text="Create Service" type='submit' color="green" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateServicePage
