import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  NavLink } from 'react-router-dom';
import './App.css';
import RegisterView from './components/RegisterView.js';
import LoginView from './components/LoginView.js';
import PostList from './components/PostList.js';
import Postdetail from './components/Postdetail.js';
import Headers from './components/Header.js';
import AddView from './components/AddView.js';
import MainPage from './components/MainPage.js';
class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={isAuthenticated: false,
                userInfo:null,
                search: "",
              }
  }

  onLogin = (result) => {
    this.setState({ isAuthenticated: true })
    this.setState({ userInfo: result });
    console.log(this.state.userInfo);
  }

  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("Login failed");
    console.log(this.state.userInfo);
  }
  updateSearch = (event) => {
  this.setState({search: event.target.value.substr(0,20)});
  console.log(this.state.search)
  }



  render()
  {
    return(
    <Router>
      <Headers updateSearch={this.updateSearch} search={this.state.search}  />
         <Route path="/" exact render={routeProps => <MainPage {...routeProps}/>}/>
         <Route path="/register" exact render={ routeProps => <RegisterView {...routeProps}/> }/>
         <Route path="/login" exact render={ routeProps => <LoginView loginSuccess = { this.onLogin }
                                                                      loginFail = { this.onLoginFail } {...routeProps}/> }/>
         <Route path="/list" exact render={ routeProps => <PostList search={this.state.search} {...routeProps}/>}/>
         <Route path="/post/:id" exact render={ routeProps => <Postdetail  userInfo={this.state.userInfo} {...routeProps}/>}/>
         <Route path="/post" exact render={ routeProps => <AddView userInfo={this.state.userInfo} {...routeProps}/>}/>
    </Router>
  )
  }
}

export default App;
