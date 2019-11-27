import React from 'react';
import Auth from './Auth';
import styles from './Auth.module.css';
import { BrowserRouter as Router, Route,  NavLink } from 'react-router-dom';
export default function LoginView(props) {

  function login(event)
  {
    event.preventDefault();
    Auth.authenticate(event.target['username'].value, event.target['password'].value)
      .then(result =>
        {
          props.loginSuccess(result);
          props.history.push(props.redirectPathOnSuccess);
        })
      .catch(() => {
        props.loginFail();
      })

  }

  return (
    <div className="App">
    <div className="AppAside"></div>
    <div className="AppForm">
    <div className="PageSwitcher">
        <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
        <NavLink exact to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
    </div>
    <h1>Sign In</h1>
    <div className={styles.FormCenter}>
        <form  className={styles.FormFields} onSubmit={login}>
        <div className={styles.FormField}>
            <label className={styles.FormLabel} htmlFor="username">Username</label>
            <input type="text" id="username" className={styles.FormInput} placeholder="Enter your Username" name="username" />
          </div>

          <div className={styles.FormField}>
            <label className={styles.FormLabel} htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.FormInput} placeholder="Enter your password" name="password"  />
          </div>

          <div className={styles.FormField}>
              <button className={styles.FormButton} type="submit">Sign In</button>
          </div>
        </form>
        </div>
        </div>
      </div>
    )
}
