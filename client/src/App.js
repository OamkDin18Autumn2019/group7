import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  NavLink } from 'react-router-dom';
import './App.css';
import RegisterView from './components/RegisterView.js';
import LoginView from './components/LoginView.js';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={isAuthenticated: false}
  }
  onLogin = () => {
    this.setState({ isAuthenticated: true })
    console.log('ok');
  }

  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("Login failed");
  }
  render()
  {
    return(
    <Router>
         <Route path="/register" exact render={ routeProps => <RegisterView {...routeProps}/> }/>
         <Route path="/login" exact render={ routeProps => <LoginView loginSuccess = { this.onLogin }
                                                                      loginFail = { this.onLoginFail } {...routeProps}/> }/>
    </Router>
  )
  }
}

export default App;
