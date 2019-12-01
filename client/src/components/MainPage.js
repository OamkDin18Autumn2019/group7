import React, {Component} from 'react';
import './App.css';
class MainPage extends React.Component{
    constructor(props){
        super(props)
      }

    
    render(){
        return(
            <div>
              <div class="page">
                              <div class="page__demo">
                                <div class="page__container">
                                  <div class="photobox photobox_type1">
                                    <div class="photobox__previewbox">
                                      <img src={require('../ocsaigon.jpg')} class="photobox__preview" alt="Preview" />
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
        )
    }
}

export default MainPage;