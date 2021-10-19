import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = (props) => {
   const {img,name,price,id }=props.service;
    return (
        <div>
    <Col>
      <Card>
        <Card.Img className='img-size' variant="top" src={img} />
        <Card.Body>
          <Card.Title >{name}</Card.Title>
          <Card.Text>
            This service is good .Many man is good in this hospital.
            <h4>Service Amount:{price}</h4>
          </Card.Text>
         <Link to={`/details/${id}`}> 
         <button className="bg-primary"> Booking Now</button>
         </Link>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Cards;