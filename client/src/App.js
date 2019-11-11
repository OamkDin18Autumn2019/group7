import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  NavLink } from 'react-router-dom';
import './App.css';
import RegisterView from './components/RegisterView.js';
class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={}
  }
  render()
  {
    return(
    <Router>
         <Route path="/register" exact render={ routeProps => <RegisterView {...routeProps}/> }/>
    </Router>
      
  )
  }
}

export default App;
