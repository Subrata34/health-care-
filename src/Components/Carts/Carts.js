import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Carts.css';

const Carts = (props) => {
    const{img,name,price}=props.data;
    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            
            <h4>Surjary Amount:{price}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Carts;