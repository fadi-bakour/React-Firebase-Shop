import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apis from '../../apis/Apis';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import classes from './AuthPages.module.css';
import { useForm } from "react-hook-form";
import signUpImage from '../../assets/SignUp/SignUp.jpg';
import Pattern from '../../assets/SignUp/Pattern.jpg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaKey, FaEnvelopeOpenText } from 'react-icons/fa';

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            SignUp: ({ email, password }) => apis.signUpAuth({ email, password })
        },
        dispatch,
    );

function SignUpPage({ SignUp }) {
    const onSubmit = ({ email, password }) => {
        SignUp({ email, password })
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const CurrentPassword = watch("password");
    const Match = value => value === CurrentPassword;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    useEffect(() => {
        document.title = 'Sign Up';
    }, []);

    return (
        <div className="row m-0">
            <div className="col-lg-6 d-none d-lg-block">
                <div className={classes.imageContainer}>
                    <img src={signUpImage} alt="SignUp" className="mw100" />
                </div>
            </div>
            <div className={`col-lg-6 overflow-hidden ${classes.formCol}`}>
                <img src={Pattern} alt="pattern" className={classes.bgPattern} />
                <div className={classes.formContainer}>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <img src={logo} alt="Logo" className={classes.logo} />
                        <h4 className={classes.title}>SignUp</h4>
                        <TextInput type="text" name="email" placeholder="Enter Email" icon={<FaEnvelopeOpenText />} register={register} required pattern={emailRegex} errors={errors} errorMessage="This field is required and needs to be valid email" />
                        <TextInput type="password" name="password" placeholder="*******" icon={<FaKey />} register={register} required errors={errors} errorMessage="This field is required" />
                        <TextInput type="password" name="Conform password" placeholder="*******" icon={<FaKey />} register={register} required errors={errors} errorMessage="This field is required and Password Must Match" validate={Match} />

                        <div className={classes.buttonDiv}>
                            <Button text="Sign Up" type='submit' color="green" />
                        </div>
                        <p className="text-center">
                            <Link to="/Login" className={classes.text}>
                                Already Have An Account? Login!
                        </Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default connect(null, mapDispatchToProps)(SignUpPage)
