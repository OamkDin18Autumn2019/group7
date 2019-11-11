import React from 'react'
import axios from 'axios';
import styles from './Auth.module.css';
class RegisterView extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      userData:null
    };
}
componentDidMount = () =>
  {
    axios.get('http://localhost:4000' + '/users').then(result => {
      this.setState({ userData: result.data.users });
    })
    .catch(error => {
      console.error(error);
    })
  }
register = (event) =>
{

  let formValid = true;
  if (event.target['password'].value !== event.target['passwordConfirm'].value)
  {
   formValid = false;
   event.preventDefault();
   alert("Your confirm password is not matched");
  }
  if (event.target['password'].value.length < 6)
  {
  formValid = false;
  event.preventDefault();
  alert("Your passwords need to have at least 6 characters");
  }
  if(this.state.userData.some(i=>i.username === event.target['username'].value ))
  {
    formValid = false;
    event.preventDefault();
    alert("The username has been used");
  }
  if(formValid === true)
    {
      event.preventDefault();
      console.log('post');
      axios.post('http://localhost:4000' +'/users', {
        username: event.target['username'].value,
        password: event.target['password'].value,
        name: event.target['name'].value,
        email: event.target['email'].value,
        doB: event.target['doB'].value
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        alert("Your account is created");
      }
  }

  render()
  {
    return(
      <div className="App">
      <div className="AppAside"></div>
      <div className="AppForm">
      <h1>Register</h1>
      <div className={styles.FormCenter}>
               <form onSubmit={this.register} className={styles.FormFields}>
                   <div className={styles.FormField}>
                       <label className={styles.FormLabel} htmlFor="name">Name</label>
                       <input type="text" id="name" className={styles.FormInput} placeholder="Enter your name" name="name" />
                   </div>
                   <div className={styles.FormField}>
                       <label className={styles.FormLabel} htmlFor="doB">DoB</label>
                       <input type="date" id="doB" className={styles.FormInput} placeholder="Enter your DoB" name="doB" />
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
           </div>
      </div>
    )
  }
}
  export default RegisterView;
