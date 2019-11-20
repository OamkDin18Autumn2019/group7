import React from 'react';
import './App.css';

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
                  <img class="logo" src={"2019-11-14.png"} alt=''/>
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
                                <img src="am-thuc.jpg" class="photobox__preview" alt="Preview" />
                                <span class="photobox__label">My favorites </span>
                              </div>
                            </div>
                            <div class="photobox photobox_type2">
                              <div class="photobox__previewbox">
                                <img src="bun-bo-hue.jpg" class="photobox__preview" alt="Preview" />
                                <span class="photobox__label">Beef Noodles</span>
                              </div>
                            </div>
                            <div class="photobox photobox_type3">
                              <div class="photobox__previewbox">
                                <img src="banh-mi.jpg" class="photobox__preview" alt="Preview" />
                                <span class="photobox__label">Banh Mi</span>
                              </div>
                            </div>
                            <div class="photobox photobox_type4">
                              <div class="photobox__previewbox">
                                <img src="bun-thit-nuong.jpg" class="photobox__preview" alt="Preview" />
                                <span class="photobox__label">Bun Thit Nuong</span>
                              </div>
                            </div>
                            <div class="photobox photobox_type5">
                              <div class="photobox__previewbox">
                                <img src="che.jpg" class="photobox__preview" alt="Preview" />
                                <span class="photobox__label">Sweet</span>
                              </div>
                            </div>
                            <div class="photobox photobox_type6">
                              <div class="photobox__previewbox">
                                <img src="ocsaigon.jpg" class="photobox__preview" alt="Preview" />
                                <span class="photobox__label">Sea food</span>
                              </div>
                            </div>
                            <div class="photobox photobox_type7">
                              <div class="photobox__previewbox">
                                <img src="pho2.webp" class="photobox__preview" alt="Preview" />
                                <span class="photobox__label">Pho</span>
                              </div>
                            </div>
                            
                          </div>  
                        </div>
                      </div>     
    </div>
  );
}

export default App;
