import React, { Component } from 'react'
import styles from './Auth.module.css'
import axios from 'axios'



const endpoint = 'http://localhost:5000/upload/'

class AddView extends React.Component {
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
   if(this.props.userInfo == null){
     alert("Must be login first")
   }else{
    e.preventDefault();
    axios.post('http://localhost:4000/post/', {
      idusers: this.props.userInfo.id,
      image: e.target['image'].files[0].name,
      name : e.target['name'].value,
      ingredients : e.target['ingredients'].value,
      recipe : e.target['recipe'].value,
    })
   }


  }
  render() {
    return (


 <div >
     <form   onSubmit={this.handleSubmit}>
     <div >
         <label>Name</label>
         <input type="text" id="name" name="name" />
       </div>

       <div >
         <label>Ingredients</label>
         <textarea rows="10" type="text" id="ingredients" name="ingredients"  />
       </div>

       <div>
         <label>Recipe</label>
         <textarea rows="10" type="text" id="recipe"  name="recipe"  />
       </div>

       <div>
         <label>Image</label>
         <input type="file" id="image" onChange={this.handleselectedFile} name="image"  />
       </div>



       <div>
           <button type="submit" onClick={this.handleUpload}>Submit</button>
       </div>
     </form>
</div>
    )
  }
}

export default AddView
