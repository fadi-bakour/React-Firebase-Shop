import React, { useState, useEffect } from 'react'
import Header from '../../assets/services/header.png'
import classes from './ProfilePage.module.css'
import apis from '../../apis/Apis';
import TextInput from '../../components/TextInput';
import { useForm } from "react-hook-form";
import Button from '../../components/Button';
import { FaUser, FaEnvelopeOpenText, FaMap } from 'react-icons/fa';
import firebase from "firebase/app";
import "firebase/auth";
import {useHistory} from 'react-router-dom';
function ProfilePage() {
    const history = useHistory();
    const onSubmit = ({ email, fullName, address, addressTwo }) => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userId = user.uid;
                apis.UpdateUserData({ email, fullName, address, addressTwo,userId,history});
            } else {
                console.log('failed')
            }
        });
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [addressTwo, setAddressTwo] = useState('');

    useEffect(() => {
        document.title = 'Profile';
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                apis.userData(user).then((res) => {
                    setEmail(res.email)
                    setFullName(res.fullName)
                    setAddress(res.address)
                    setAddressTwo(res.addressTwo)
                });// This is be executed when `loading` state changes
            } else {
                // No user is signed in.
            }
        });

    }, [])


    return (
        <div>
            <div className="text-center mt-5 container">
                <h2>Update Profile Information</h2>
                <p>If you want to publish your services all of your information needs to be filled</p>
            </div>
            <div className="text-center">
                <img src={Header} className={classes.profileImage} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput type="text" name="fullName" defaultValue={fullName} placeholder="Full Name" icon={<FaUser />} register={register} required errors={errors} errorMessage="This field is required" />
                <TextInput type="text" name="email" defaultValue={email} placeholder="Enter Email" icon={<FaEnvelopeOpenText />} register={register} required pattern={emailRegex} errors={errors} errorMessage="This field is required and needs to be valid email" />
                <TextInput type="text" name="address" defaultValue={address} placeholder="Address 1" icon={<FaMap />} register={register} required errors={errors} errorMessage="This field is required" />
                <TextInput type="text" name="addressTwo" defaultValue={addressTwo} placeholder="Address 2" icon={<FaMap />} register={register} required errors={errors} errorMessage="This field is required" />

                <div className={classes.buttonDiv}>
                    <Button text="Save Changes" type='submit' color="green" />
                </div>
            </form>


        </div>
    )
}

export default ProfilePage
