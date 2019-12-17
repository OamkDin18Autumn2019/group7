
import React, { Component } from 'react';
import axios from 'axios';
import styles from './AddView.module.css';
import { Redirect, Route } from "react-router-dom";

class AddView extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
		};

	}


 handleSubmit = e => {
   e.preventDefault();

   const data = new FormData();
   data.append('file', this.uploadInput.files[0]);
   data.append('filename', this.uploadInput.files[0].name);

   fetch('http://localhost:4000/image', {
     method: 'POST',
     body: data
   })
    {
    e.preventDefault();
    axios.post('http://localhost:4000/post/', {
      idusers: this.props.userInfo.id,
      image: e.target['image'].files[0].name,
      name : e.target['name'].value,
      ingredients : e.target['ingredients'].value,
      recipe : e.target['recipe'].value,
    })
    alert("Your post has been created")
    const path='/';
    this.props.history.push(path)
    }

  }
  render() {
    const mystyle = {
      overflow: "hidden", display:"inline-block"  , resize: "none", height: "160px"
    };
    if(this.props.userInfo == null){
      alert("Must be login first")
         return(<Redirect to='/' />)
    } else {
        {
            console.log(this.state.imageURL)
            return (
              <div className={styles.View}>
              <div className={styles.wrapper}>
                <form className={styles.paper} method="get" action="" onSubmit={this.handleSubmit}>
                  <div className={styles.margin} > <input placeholder="Name" className={styles.name} type="text" name="name"></input></div>
                  <textarea placeholder="Enter Ingredients" className={styles.text} name="ingredients" rows="4" style={mystyle}></textarea>
                  <textarea placeholder="Enter Recipe" className={styles.text} name="recipe" rows="4" style={mystyle}></textarea>
                  <div className={styles.margin} placeholder="Image"> <input className={styles.text} type="file" id="image" ref={ref => {this.uploadInput = ref;}} name="image"></input></div>
                  <div><button className={styles.button} type="submit" >Submit</button></div>
                </form>
              </div>
              </div>
            )
        }
    }
  }
}

export default AddView
