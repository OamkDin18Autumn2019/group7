import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as BrowserRouter,  Router, Route, Link, Redirect  } from 'react-router-dom';

export default function Header(props){
   

    
    
        return(
            <div>
               
      <div className="mainmenu" >
        <div className="topnav">
          <div className="home">
            <a className="active" href="#home">Home</a>
          </div>
            <a >About</a>
            <div className="container-1">
      
      
              <input type="search" id="search" placeholder="Search..." />
      
            </div>
      
            <div className="login-container">
                
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>    
                </div>
            </div>
          </div>
          
                    <div class="topnav2">
                <ul>
                        <img className="logo" src={require('../header.png')} alt=''/>
                <li><a href="#">Rescipes</a>
                 <ul>
                  <li><Link to='/recipe'>Diet</Link></li>
                  <li><Link to='/weight'>Weight</Link></li>
                  <li><Link to='/everday'>Everday</Link></li>
                 </ul>
                </li>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/contact'>Contact</Link>
                    <ul>
                     <li><Link to='/call'>Call</Link></li>
                     <li><Link to='/emails'>Emails</Link></li>
                    </ul>
                   </li>
                
               </ul>
              </div>
          </div>
        )
    
}


