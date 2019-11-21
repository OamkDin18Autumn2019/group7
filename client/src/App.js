import React from 'react';
import './App.css';
import logo from './2019-11-14.png';
import logo1 from './ocsaigon.jpg' 

function App() {
  return (
    <div>
      <div className="mainmenu" >
  <div className="topnav">
    <div className="home">
      <a className="active" href="#home">Home</a>
    </div>
      <a >About</a>
      <div className="container-1">


        <input type="search" id="search" placeholder="Search..." />

      </div>

      <div className="login-container">
          
          <button type="submit">Log in</button>
          <button type="submit">Register</button>     
          </div>
      </div>
    </div>
    
              <div class="topnav2">
          <ul>
                  <img className="logo" src={logo} alt=''/>
          <li><a href="#">Rescipes</a>
           <ul>
            <li><a href="">Diet Menu</a></li>
            <li><a href="">Weight Menu</a></li>
            <li><a href="">Everday Meals</a></li>
           </ul>
          </li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a>
              <ul>
               <li><a href="">Call</a></li>
               <li><a href="">Emails</a></li>
              </ul>
             </li>
          
         </ul>
        </div>
        <div class="page">
                        <div class="page__demo">
                          <div class="page__container">
                            <div class="photobox photobox_type1">
                              <div class="photobox__previewbox">
                                <img src={logo1} class="photobox__preview" alt="Preview" />
                                <div class="photobox__label">
                               <h1>DevVNeseFoody</h1>
                               <p>Variety of recipes and cooking-related articles with a focus on thoughtful and stylish living.
                                  Many recipes have flavorful twists, and the site offers unique kitchenware for sale.</p>
                               
                              </div>
                              </div>
                            </div>
                           
                            
                          </div>  
                        </div>
                      </div>      
    </div>
  );
}

export default App;
