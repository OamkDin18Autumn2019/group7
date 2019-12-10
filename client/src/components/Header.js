import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as BrowserRouter,  Router, Route, Link, Redirect  } from 'react-router-dom';

export default class Header extends React.Component {



      render(){
        if(this.props.userInfo == null){
          return(
      <header>
            <div>

      <div className="mainmenu" >
        <div className="topnav">
          <div className="home">
            <Link to="/" className="active">Home</Link>
          </div>
            <a >About</a>
            <div className="container-1">


              <input type="search" values={this.props.search} onChange={this.props.updateSearch} id="search" placeholder="Search..." />

            </div>

            <div className="login-container">


                <Link to='/login'>Login</Link>


                <Link to='/logout'>Logout</Link>

                </div>
            </div>
          </div>


                    <div className="topnav2">

                <ul>
                        <img className="logo" src={require('../header.png')} alt=''/>
                <li><a href="#">Recipe</a>
                </li>
                <li><Link to='/list'>Item</Link></li>
                <li><Link to='/post'>Post</Link></li>

               </ul>
              </div>
          </div>
          </header>
        )

        }else{
          return(
        <header>
            <div>

      <div className="mainmenu" >
        <div className="topnav">
          <div className="home">
            <Link to="/" className="active">Home</Link>
          </div>
            <a >About</a>
            <div className="container-1">


              <input type="search" values={this.props.search} onChange={this.props.updateSearch} id="search" placeholder="Search..." />

            </div>

            <div className="login-container">


               {this.props.userInfo.name}


                <button onClick={this.props.onLogOut}>Logout</button>
                </div>
            </div>
          </div>

                    <div class="topnav2">
                <ul>
                        <img className="logo" src={require('../header.png')} alt=''/>
                <li><a href="#">Recipe</a>
                </li>
                <li><Link to='/list'>Item</Link></li>
                <li><Link to='/post'>Post</Link></li>
               </ul>
              </div>
          </div>
          </header>
        )
        }

        }




}
