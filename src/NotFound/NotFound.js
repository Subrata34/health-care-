import React from 'react';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const NotFound = () => {
    return (
        <div>
        <Header></Header>
        <Banner></Banner>
            <h1>This page is 404 found page </h1>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;