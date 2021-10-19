import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div  className='row bg-dark text-white'>
             <div className="col-md-4">
                 <h4>Details:</h4>
                 <ul className="items-line">
                     <li>Mohakhali</li>
                     <li>1212,Mohakhali,Dhaka</li>
                     <li> Bangladesh</li>
                 </ul>

             </div>
             <div className="col-md-3 ">
                   <ul className="items-line">
                       <li>Health care Service</li>
                       <li> people counsliling </li>
                       <li> Doctor monitoring </li>
                       <li> Helping Care </li>
                   </ul>
             </div>
             <div className="col-md-5">
                        <h1>Contract Us</h1>
                        <h5>Email Address:carecentre@gmail.com</h5>
                        <h5>Phone Number:+8801555522558</h5>
                        <h5>Whatsapp Number:+88015856665465</h5>
             </div>
        </div>
    );
};

export default Footer;