import React, {Component} from 'react'; 

import ShoppingList from './components/ShoppingList';
import Header from './components/Header' ;
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
class App extends React.Component{ 
    
    constructor(props)
    {
      super(props);
  
      this.state = {
        items: [
          { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
          { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
          { id: 3, value: 'Bread', qty: 3, unit: 'x' },
          { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
        ]
      };
  
    }
     
    render(){ 
        return( 
            <> 
            <Router>
            <Header />
            <Route path="/" exact render={ routeProps => <ShoppingList items={this.state.items} {...routeProps}/>}  />   
            </Router>
         
            
            </> 
        ) 
    } 
} 
 
 
export default App; 