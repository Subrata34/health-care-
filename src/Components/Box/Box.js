import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Box.css';

const Box = (props) => {
    const {doctor,experience,img}=props.person ;
    return (
        <div>
            <Col>
      <Card>
        <Card.Img className="img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{doctor}</Card.Title>
          <Card.Text>
            Experence of docter:{experience}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Box;