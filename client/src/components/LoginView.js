import React, { Component } from 'react';

class LoginView extends Component {

    render() {
        return (
        <div className="FormCenter">
            <form  className="FormFields" onSubmit={this.handleSubmit}>
            <h1>Sign In</h1>
            <div className="FormField">
                <label className="FormLabel" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormInput" placeholder="Enter your Email" name="email" />
              </div>

              <div className="FormField">
                <label className="FormLabel" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormInput" placeholder="Enter your password" name="password"  />
              </div>

              <div className="FormField">
                  <button className="FormButton mr-20" type="submit">Sign In</button> 
              </div>
            </form>
          </div>
        );
    }
}

export default LoginView;