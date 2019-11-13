import React from 'react';
import Auth from './Auth';
import styles from './Auth.module.css';
export default function LoginView(props) {

  function login(event)
  {
    event.preventDefault();
    Auth.authenticate(event.target['username'].value, event.target['password'].value)
      .then(result =>
        {
          props.loginSuccess();
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