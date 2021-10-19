import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useAuth from '../hook/useAuth';

const Login = () => {
    const{signInusingGoogle}=useAuth();
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1>Please login page</h1>
            <button onClick={signInusingGoogle} className="bg-warning">Google sign In</button>
            <br />
            <Link to="/register">New User?</Link>
        <Footer></Footer>
        </div>
    );
};

export default Login;