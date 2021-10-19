import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import Banner from '../Banner/Banner';
import Carts from '../Carts/Carts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';


const About = () => {
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch('./doctor.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    })
    
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1 className="bg-primary">This is about page:</h1>
            
            <Row xs={1} md={3} className="g-4">
  
             {
                 data.map(use=><Carts
                 data={use}
                 ></Carts>)
             }
            </Row>
                <Service></Service>
            
            <Footer></Footer>
        </div>
    );
};

export default About;