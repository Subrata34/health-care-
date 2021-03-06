import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth=getAuth();

const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('')
    const handleEmailChange=e=>{
        setEmail(e.target.value);
    }
    const handlePassword=e=>{
        setPassword(e.target.value)
    }
    const handleRegistration=e=>{
        console.log(email,password);
        if(password.length <6){
            setError('password must be 6 character')
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
      e.preventDefault();
    }

    return (
        <div>
        <Header></Header>
        <Banner></Banner>
        <div className="bg-warning">
            <h1>Please Registretion</h1>
            <form onSubmit={handleRegistration}>
                <h3>Email:<input onBlur={handleEmailChange}type="email" /> </h3>
               
               <br />
               <h3>Password:<input onBlur={handlePassword} type="password" /></h3>
               
               <br/>
               <div>{error}</div>
               <input className="bg-success" type="submit" value="Register" />
            </form>
            <Link to="/login">Already Register?</Link>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Register;