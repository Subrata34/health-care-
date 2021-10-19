import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Register = () => {
    const handleEmailChange=e=>{
        console.log(e.target.value);
    }
    const handlePassword=e=>{
        
    }
    const handleRegistration=e=>{
      e.preventDefault();
    }
    return (
        <div>
        <Header></Header>
        <Banner></Banner>
        <div className="bg-warning">
            <h1>Please Registretion</h1>
            <form onSubmit={handleRegistration}>
                <h3>Email:<input onChange={handleEmailChange}type="email" /> </h3>
               
               <br />
               <h3>Password:<input onBlur={handlePassword} type="password" /></h3>
               
               <br/>
               <input className="bg-success" type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Register?</Link>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Register;