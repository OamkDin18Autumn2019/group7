import React , { Component} from 'react'
import styles from './Auth.module.css';

class RegisterView extends Component {

   render() {
       return (
           <div className={styles.FormCenter}>
               <form onSubmit={this.handleSubmit} className={styles.FormFields}>
                   <h1>Sign Up</h1>
                   <div className={styles.FormField}>
                       <label className={styles.FormLabel} htmlFor="name">Name</label>
                       <input type="text" id="name" className={styles.FormInput} placeholder="Enter your name" name="name" />
                   </div>
                   <div className={styles.FormField}>
                       <label className={styles.FormLabel} htmlFor="doB">DoB</label>
                       <input type="text" id="doB" className={styles.FormInput} placeholder="Enter your DoB" name="doB" />
                   </div>
                   <div className={styles.FormField}>
                       <label className={styles.FormLabel} htmlFor="email">Email</label>
                       <input type="email" id="email" className={styles.FormInput} placeholder="Enter your Email" name="email"/>
                   </div>
                   <div className={styles.FormField}>
                       <label className={styles.FormLabel} htmlFor="username">UserName</label>
                       <input type="text" id="username" className={styles.FormInput} placeholder="Enter your Username" name="username"/>
                   </div>
                   <div className={styles.FormField}>
                       <label className={styles.FormLabel} htmlFor="password">Password</label>
                       <input type="password" id="password" className={styles.FormInput} placeholder="Enter your Password" name="password" />
                   </div>
                   <div className={styles.FormField}>
                       <label className={styles.FormLabel} htmlFor="passwordConfirm">Confirm Password</label>
                       <input type="password" id="passwordConfirm" className={styles.FormInput} placeholder="Confirm your password" name="passwordConfirm" />
                   </div>

                   <div className={styles.FormField}>
                       <button className={styles.FormButton}>Sign Up</button>
                   </div>
               </form>
           </div>
       )
   }
}

export default RegisterView
