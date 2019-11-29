import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as BrowserRouter,  Router, Route, Link, Redirect  } from 'react-router-dom';

export default function Header(props){




        return(
            <div>

      <div className="mainmenu" >
        <div className="topnav">
          <div className="home">
            <Link to="/" className="active">Home</Link>
          </div>
            <a >About</a>
            <div className="container-1">


              <input type="search" values={props.search} onChange={props.updateSearch} id="search" placeholder="Search..." />

            </div>

            <div className="login-container">

                <Link to='/login'>Login</Link>
                <Link to='/logout'>Logout</Link>
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
                <li><Link to='/list'>Item</Link></li>
                <li><Link to='/post'>Post</Link></li>

               </ul>
              </div>
          </div>
        )

}
