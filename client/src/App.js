import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  NavLink } from 'react-router-dom';
import './App.css';
import RegisterView from './components/RegisterView';
import LoginView from './components/LoginView';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="AppAside"></div>
          <div className="AppForm">
            <div className="PageSwitcher">
              <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
            
            <Route exact path="/" component={RegisterView}></Route>
            <Route path="/login" component={LoginView}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
