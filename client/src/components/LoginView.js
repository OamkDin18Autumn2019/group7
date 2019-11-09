import React, { Component } from 'react';
import styles from './Auth.module.css';
class LoginView extends Component {

    render() {
        return (
        <div className={styles.FormCenter}>
            <form  className={styles.FormFields} onSubmit={this.handleSubmit}>
            <h1>Sign In</h1>
            <div className={styles.FormField}>
                <label className={styles.FormLabel} htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className={styles.FormInput} placeholder="Enter your Email" name="email" />
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
        );
    }
}

export default LoginView;