import React from 'react'
import axios from 'axios';
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
      <div>
      <h1>Register</h1>
      <form onSubmit={this.register}>
      <div>
        Name <input type="text" name="name" />
      </div>
      <div>
        Date of birth <input type="date" name="doB" />
      </div>
      <div>
        email <input type="text" name="email" />
      </div>
        <div>
          Username <input type="text" name="username" />
        </div>
        <div>
          Password <input type="password" name="password" />
        </div>
        <div>
          Confirm Password <input type="password" name="passwordConfirm" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      </div>
    )
  }
  }
  export default RegisterView;
