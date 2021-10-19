import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import {Button,  Navbar} from 'react-bootstrap';


const Header = () => {
  const {users,logOut}=useAuth();
  console.log(users);
    return (
  
        <div  >
          <h1 className="bg-warning">Bangladesh Health care Service </h1>
          <div className="row bg-primary">
            <div className="col-md-2">

            </div>
            <div className="col-md-10 d-flex item-style ">
              <Link to='/home'className="items-style">
                {""}
                <li>Home</li>
              </Link>
              <Link to='/about' className="items-style">
                {""}
                <li>About</li>
              </Link>
              <Link to='/service' className="items-style">
                {""}
                <li>Service</li>
              </Link>
              
              
              <Link to='/register'className="items-style">
                {""}
                <li>Register</li>
              </Link>
              {users?.email?
              <Button onClick={logOut} variant="light">logOut</Button>:
              <Link to='/login'className="items-style">{""}<li>Login</li>
              </Link>

                }
              <Navbar.Text>
                Signed in as: <a href="#login">{users?.displayName}</a>
               </Navbar.Text>
             
              
            </div>
          </div>
            
        </div>
    );
};

export default Header;