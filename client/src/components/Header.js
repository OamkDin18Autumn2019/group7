import React, {Component} from 'react';
import styles from './App.module.css';
import { BrowserRouter as BrowserRouter,  Router, Route, Link, Redirect  } from 'react-router-dom';

export default class Header extends React.Component {
  render(){
    if(this.props.userInfo == null){
      return(
        <header className={styles.all} >
          <div >
            <div className={styles.mainmenu}>
              <div className={styles.topnav}>
                <div className={styles.home}>
                  <Link to="/" className="active">Home</Link>
                </div>
                  <a >About</a>
                  <div className={styles.container}>
                    <input type="search" values={this.props.search} onChange={this.props.updateSearch} className={styles.search} placeholder="Search..." />
                  </div>
                <div className={styles.login}>
                  <Link to='/login'>Login</Link>
                  <Link to='/logout'>Logout</Link>
                </div>
            </div>
          </div>
          <div className={styles.topnav2}>
            <ul>
              <img className={styles.logo} src={require('../logo2.png')} alt=''/>
              <li><a href="#">Recipes</a></li>
              <li><Link to='/list'>Item</Link></li>
              <li><Link to='/post'>Post</Link></li>
            </ul>
          </div>
          </div>
        </header>
      )
    }else{
      return(
        <header className={styles.all}>
          <div>
            <div className={styles.mainmenu} >
              <div className={styles.topnav}>
                <div className={styles.home}>
                  <Link to="/" className="active">Home</Link>
                </div>
                  <a >About</a>
                  <div className={styles.container}>
                    <input type="search" values={this.props.search} onChange={this.props.updateSearch} className={styles.search} placeholder="Search..." />
                  </div>
                <div className={styles.login}>
                <Link to='/user'>{this.props.userInfo.name}</Link>
                <Link to='/'><button onClick={this.props.onLogOut}>Logout</button></Link>
                </div>
              </div>
            </div>
            <div className={styles.topnav2}>
              <ul>
                <img className={styles.logo} src={require('../logo2.png')} alt=''/>
                <li><a href="#">Recipe</a></li>
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
