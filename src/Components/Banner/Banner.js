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
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image02}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image03}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
};



export default Banner;