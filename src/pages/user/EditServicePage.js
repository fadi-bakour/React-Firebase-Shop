import React, { useState, useEffect } from 'react'
import Header from '../../assets/services/header.png'
import classes from './CreateServicePage.module.css'
import apis from '../../apis/Apis';
import TextInput from '../../components/TextInput';
import ImageInput from '../../components/ImageInput'
import { useForm } from "react-hook-form";
import Button from '../../components/Button';
import { FaBlog } from 'react-icons/fa';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';

function EditServicePage() {
    const history = useHistory();
    const location = useLocation();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const onSubmit = ({ title, description, photo }) => {
        const serviceId = location.state.serviceId;
        var EditService = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userId = user.uid;
                apis.EditService({ title, description, photo, history, userId, serviceId });
            } else {
                console.log('failed')
            }

        });
        EditService();
    };
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();


    useEffect(() => {
        document.title = 'Edit Service';
        var getData = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                apis.ServiceData(user, location.state.serviceId).then((res) => {
                    setTitle(res.title)
                    setDescription(res.description)
                    setPhoto(res.photo)
                    setValue('title', res.title)
                    setValue('description', res.description)
                });// This is be executed when `loading` state changes
            } else {
                // No user is signed in.
            }
        });
        return () => getData()
    }, [setValue]);

    return (
        <div>
            <div className={classes.headerContainer}>
                <div className="container">
                    <img src={Header} alt="header" className={classes.header} />
                </div>
            </div>
            <div className="text-center mt-5 container">
                <h2>Edit Service</h2>
                <p>Make sure all of your new information is correct before saving</p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.body}>
                        <img src={photo} className={classes.cardImage} alt="" />
                    </div>
                    <ImageInput type="file" name="photo" register={register} errors={errors} />
                    <TextInput type="text" defaultValue={title} name="title" placeholder="Edit Title of Service" icon={<FaBlog />} register={register} required errors={errors} errorMessage="This field is required" />
                    <TextInput type="text" defaultValue={description} name="description" placeholder="Edit Description" icon={<FaBlog />} register={register} required errors={errors} errorMessage="This field is required" />
                    <div className={classes.buttonDiv}>
                        <Button text="Edit Service" type='submit' color="green" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditServicePage
