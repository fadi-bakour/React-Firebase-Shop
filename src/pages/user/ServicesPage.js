import React, { useState, useEffect } from 'react'
import Header from '../../assets/services/header.png'
import classes from './ServicesPage.module.css'
import Card from '../../components/Card'
import SearchInput from '../../components/SearchInput';
import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa';
import apis from '../../apis/Apis';

function ServicesPage() {
    const [products, setProducts] = useState([]);
    const { register, watch } = useForm();

    useEffect(() => {
        document.title = 'My Services';
        apis.GetAllProducts().then((res) => {
            setProducts(res);
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
                    {!products ?
                        <h3 className="col-12 text-center mt-5 mb-5"> No products </h3>
                        :
                        products.map((product, index) => {
                            return (
                                <Card key={product.title} title={product.title} description={product.description} user={product.owner} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
