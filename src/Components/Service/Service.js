import React,{useState,useEffect} from 'react';
import {  Row } from 'react-bootstrap';

import Box from '../Box/Box';

import './Service.css';


const Service = () => {
    const[name,setName]=useState([])
    useEffect(()=>{
      fetch('./doctor.json')
      .then(res=>res.json())
      .then(data=>setName(data))

    },[])
    return (
      
       
        <div className="name-radius">
         
          
            <h1>Consouling Doctor </h1>
       <Row xs={1} md={2} className="g-3">
    { 
    name.map(data=><Box 
    person={data}
    ></Box>)
    }
  </Row>
  
        </div>
  
      
    );
};

export default Service;