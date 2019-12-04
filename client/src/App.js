import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  NavLink } from 'react-router-dom';
import './App.css';
import RegisterView from './components/RegisterView.js';
import LoginView from './components/LoginView.js';
import PostList from './components/PostList';
import Postdetail from './components/Postdetail';
import Header from './components/Header';
import MainPage from './components/MainPage';
import AddView from './components/AddView';
import UserPost from './components/UserPost';
class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={isAuthenticated: false,
                userInfo:null,
                search:"",
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
  updateSearch = (event) =>{
    this.setState({search: event.target.value.substr(0,20)});
    console.log(this.state.search)
  }

  onLogOut= (event) => {
    this.setState({isAuthenticated: false})
    this.setState({ userInfo: null});
    console.log("logout")
  }
  render()
  {   
    return(
    <Router>
    <Header search={this.state.updateSearch} updateSearch={this.updateSearch} onLogOut={this.onLogOut} userInfo={this.state.userInfo} />
         <Route path="/" exact render={routeProps => <MainPage {...routeProps}/>}/>
         <Route path="/register" exact render={ routeProps => <RegisterView {...routeProps}/> }/>
         <Route path="/login" exact render={ routeProps => <LoginView loginSuccess = { this.onLogin }
                                                                      loginFail = { this.onLoginFail }
                                                                      redirectPathOnSuccess="/" {...routeProps}/> }/>
         <Route path="/list" exact render={ routeProps => <PostList search={this.state.search} {...routeProps}/>}/>
         <Route path="/post/:id" exact render={ routeProps => <Postdetail  userInfo={this.state.userInfo} {...routeProps}/>}/>
         <Route path="/post" exact render={routeProps => <AddView userInfo={this.state.userInfo} {...routeProps}/>}/>
         <Route path="/user" exact render={ routeProps => <UserPost userInfo={this.state.userInfo} {...routeProps}/>}/>
    </Router>
  )
  }
}

export default App;
