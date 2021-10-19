import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import Banner from '../Banner/Banner';
import Carts from '../Carts/Carts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';


const About = () => {
   const[use,setUse]=useState([]);
   useEffect(()=>{
       fetch(`./counciling.json`)
       .then(res=>res.json())
       .then(data=>setUse(data));
   })
    return (
       <div>
           <Header></Header>
           <Banner></Banner>
           <Row xs={1} md={2} className="g-4">
           {
               use.map(data=><Carts
               data={data}
               ></Carts>)
           }
           </Row>
           <Footer></Footer>
       </div>
       
    );
};

export default About;