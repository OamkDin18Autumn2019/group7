import React, { Component } from 'react'
import styles from './Auth.module.css'
import axios from 'axios'



const endpoint = 'http://localhost:5000/upload/'

class PostView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFile: null,
      loaded: 0,
      data:[],
    }
  }



 handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
    })

  }
  handleUpload = () => {
    const data = new FormData()
    data.append('image', this.state.selectedFile, this.state.selectedFile.name)

    axios
      .post(endpoint, data)
      .then(res => {
        console.log(res.statusText)
      })
  }
 handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:4000/post/', {
      idusers: this.props.userInfo.id,
      image: e.target['image'].files[0].name,
      name : e.target['name'].value,
      ingredients : e.target['ingredients'].value,
      recipe : e.target['recipe'].value,
      date : e.target['date'].value,
    })

  }
  render() {
    return (

 <div className="App">
 <div className="AppAside"></div>
 <div className="AppForm">
 <h1>Post</h1>
 <div className={styles.FormCenter}>
     <form  className={styles.FormFields} onSubmit={this.handleSubmit}>
     <div className={styles.FormField}>
         <label className={styles.FormLabel} htmlFor="name">Name</label>
         <input type="text" id="name" className={styles.FormInput} name="name" />
       </div>

       <div className={styles.FormField}>
         <label className={styles.FormLabel} htmlFor="ingredients">Ingredients</label>
         <textarea rows="10" type="text" id="ingredients" className={styles.FormInput}  name="ingredients"  />
       </div>

       <div className={styles.FormField}>
         <label className={styles.FormLabel} htmlFor="recipe">Recipe</label>
         <textarea rows="10" type="text" id="recipe" className={styles.FormInput} name="recipe"  />
       </div>

       <div className={styles.FormField}>
         <label className={styles.FormLabel} htmlFor="date">Date</label>
         <input type="date" id="date" className={styles.FormInput}  name="date"  />
       </div>

       <div className={styles.FormField}>
         <label className={styles.FormLabel} htmlFor="image">Image</label>
         <input type="file" id="image" onChange={this.handleselectedFile} className={styles.FormInput} name="image"  />
       </div>



       <div className={styles.FormField}>
           <button className={styles.FormButton} type="submit" onClick={this.handleUpload}>Submit</button>
       </div>
     </form>
     </div>
     </div>
   </div>
    )
  }
}

export default PostView
