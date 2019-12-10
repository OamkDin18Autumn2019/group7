import React, {Component} from 'react';
import styles from './App.module.css';
import { BrowserRouter as BrowserRouter,  Router, Route, Link, Redirect  } from 'react-router-dom';

export default function Header(props){
  return(
    <div>
      <div className={styles.mainmenu} >
        <div className={styles.topnav}>
          <div className={styles.home}>
            <Link to="/" className="active">Home</Link>
          </div>
          <a >About</a>
          <div className={styles.container}>
            <input type="search" values={props.search} onChange={props.updateSearch} className={styles.search} placeholder="Search..." />
          </div>
          <div className={styles.login}>
            <Link to='/login'>Login</Link>
            <Link to='/logout'>Logout</Link>
          </div>
        </div>
      </div>

      <div className={styles.topnav2}>
        <ul>
          <img className={styles.logo} src={require('../header.png')} alt=''/>
          <li><a href="#">Recipes</a>
          </li>
          <li><Link to='/list'>Item</Link></li>
          <li><Link to='/post'>Post</Link></li>
        </ul>
      </div>
    </div>
 )

}
