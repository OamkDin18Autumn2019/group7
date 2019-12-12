import React, {Component} from 'react';
import styles from './App.module.css';
class MainPage extends React.Component{
    constructor(props){
        super(props)
      }

    
    render(){
        return(
          <div>
            <div className={styles.page}>
              <div className={styles.page__demo}>
                <div className={styles.page__container}>
                  <div className={styles.photobox_type1}>
                    <div className={styles.photobox__previewbox}>
                        <img src={require('../foodbloggers.jpg')} className={styles.photobox__preview} alt="Preview" />
                        <div className={styles.photobox__label}>
                          <h1 className={styles.h1}>Food Blog</h1>
                          <p className={styles.p}>Variety of recipes and cooking-related articles with a focus on thoughtful and stylish living.
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