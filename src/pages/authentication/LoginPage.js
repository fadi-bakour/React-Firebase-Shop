import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apis from '../../apis/Apis';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import classes from './AuthPages.module.css';
import { useForm } from "react-hook-form";
import loginImage from '../../assets/login/login.png';
import Pattern from '../../assets/login/Pattern.jpg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaKey,FaEnvelopeOpenText } from 'react-icons/fa';

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            Login: ({email,password}) => apis.loginAuth({email,password})
        },
        dispatch,
    );

function LoginPage({ Login }) {
    const onSubmit = ({email,password}) => {
        Login({email,password})
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    useEffect(() => {
        document.title = 'Login';
    }, []);
    return (
        <div className="row m-0">
            <div className={`col-lg-6 overflow-hidden ${classes.formCol}`}>
                <img src={Pattern} alt="pattern" className={classes.bgPattern} />
                <div className={classes.formContainer}>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <img src={logo} alt="Logo" className={classes.logo} />
                        <h4 className={classes.title}>Log In</h4>
                        <TextInput type="text" name="email" placeholder="Enter Email" icon={<FaEnvelopeOpenText/>} register={register} required pattern={emailRegex} errors={errors} errorMessage="This field is required and needs to be valid email" />
                        <TextInput type="password" name="password" placeholder="*******" icon={<FaKey/>} register={register} required errors={errors} errorMessage="This field is required" />
                        <div className={classes.buttonDiv}>
                            <Button text="Login" type='submit' color="green" />
                        </div>
                        <p className="text-center">
                        <Link to="/SignUp"  className={classes.text}>
                            Don't Have An Account? Sign Up
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                <div className={classes.imageContainer}>
                    <img src={loginImage} alt="login" className="mw100" />
                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(LoginPage)
