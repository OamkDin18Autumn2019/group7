import React, { Component } from 'react'
import styles from './Auth.module.css'
import axios from 'axios'





class AddView extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
		};

		/*this.handleUploadImage = this.handleUploadImage.bind(this);*/
	}


 handleSubmit = e => {
   e.preventDefault();

   const data = new FormData();
   data.append('file', this.uploadInput.files[0]);
   data.append('filename', this.uploadInput.files[0].name);

   fetch('http://localhost:4000/upload', {
     method: 'POST',
     body: data
   })
   if(this.props.userInfo == null){
     alert("Must be login first")
   }else{
    e.preventDefault();
    axios.post('http://localhost:4000/post/', {
      idusers: this.props.userInfo.id,
      image: 'http://localhost:4000/public/' + e.target['image'].files[0].name,
      name : e.target['name'].value,
      ingredients : e.target['ingredients'].value,
      recipe : e.target['recipe'].value,
    })
   }


  }
  render() {
    		console.log(this.state.imageURL)
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
         <input type="file" id="image"
         ref={ref => {
								this.uploadInput = ref;
							}}
          name="image"  />
       </div>


       <div>
           <button type="submit">Submit</button>
       </div>
     </form>
</div>
    )
  }
}

export default AddView




/*  handleUpload = (ev) => {
    ev.preventDefault();

  const data = new FormData();
  data.append('file', this.uploadInput.files[0]);
  data.append('filename', this.uploadInput.files[0].name);

  fetch('http://localhost:4000/upload', {
    method: 'POST',
    body: data
    })
  } */
