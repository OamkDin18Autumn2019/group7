import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterView from './components/RegisterView.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
