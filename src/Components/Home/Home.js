import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Cards from '../card/Cards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Home = () => {
    const [name,setName]=useState([])
    useEffect(()=>{
        fetch('/Counciling.json')
        .then(res=>res.json())
        .then(data=>setName(data));
    })
    return (
        <div>
            
            <Header></Header>
            <Banner></Banner>
              <h1>Our Service </h1>
           <div className="bg-success">
               <h1 className='text-dark'>Our Health Services </h1>
            <Row xs={1} md={3} className="g-4">
              {  
             name.map(data=><Cards 
             service={data}
             ></Cards>)
            }

                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;