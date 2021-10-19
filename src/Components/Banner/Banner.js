import React from 'react';
import { Carousel } from 'react-bootstrap';
import image01 from '../../images/image01.jpg';
import image02 from '../../images/image02.jpg';
import image03 from '../../images/image03.jpg';
import './Banner.css';

const Banner = () => {
    return (
    
  <div className="banner-height">
    <Carousel  >
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={image01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Doctor consulting care</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image02}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image03}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
};



export default Banner;