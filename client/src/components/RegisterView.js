import React , { Component} from 'react'


class RegisterView extends Component {

   render() {
       return (
           <div className="FormCenter">
               <form onSubmit={this.handleSubmit} className="FormFields">
                   <h1>Sign Up</h1>
                   <div className="FormField">
                       <label className="FormLabel" htmlFor="name">Name</label>
                       <input type="text" id="name" className="FormInput" placeholder="Enter your name" name="name" />
                   </div>
                   <div className="FormField">
                       <label className="FormLabel" htmlFor="doB">DoB</label>
                       <input type="text" id="doB" className="FormInput" placeholder="Enter your DoB" name="doB" />
                   </div>
                   <div className="FormField">
                       <label className="FormLabel" htmlFor="email">Email</label>
                       <input type="email" id="email" className="FormInput" placeholder="Enter your Email" name="email"/>
                   </div>
                   <div className="FormField">
                       <label className="FormLabel" htmlFor="username">UserName</label>
                       <input type="text" id="username" className="FormInput" placeholder="Enter your Username" name="username"/>
                   </div>
                   <div className="FormField">
                       <label className="FormLabel" htmlFor="password">Password</label>
                       <input type="password" id="password" className="FormInput" placeholder="Enter your Password" name="password" />
                   </div>
                   <div className="FormField">
                       <label className="FormLabel" htmlFor="passwordConfirm">Confirm Password</label>
                       <input type="password" id="passwordConfirm" className="FormInput" placeholder="Confirm your password" name="passwordConfirm" />
                   </div>

                   <div className="FormField">
                       <button className="FormButton mr-20">Sign Up</button>
                   </div>
               </form>
           </div>
       )
   }
}

export default RegisterView
