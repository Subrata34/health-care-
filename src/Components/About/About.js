import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="bg-warning">
                <h1>Our services in this site </h1>
                <div className="d-flex ">
                <img className="img-size02" src="https://th.bing.com/th/id/OIP.3iIK6XUfBvKejZsi9Ql5JgHaFj?pid=ImgDet&rs=1" alt="" />  
                <img className="img-size01" src="https://th.bing.com/th/id/OIP.C7dc5R5tZ3fWOEuYosWcFAHaE8?pid=ImgDet&rs=1" alt="" />
                <img className="img-size" src="https://th.bing.com/th/id/OIP.IeWOEdmEL7RSzOFhcZSn5QHaE8?pid=ImgDet&rs=1" alt="" />
            
              </div>
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;