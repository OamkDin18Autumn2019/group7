import React, { Component } from 'react';
import axios from 'axios';
import { NavLink} from 'react-router-dom';
export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post:[]
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:4000" + "/post")
    .then(res => {
      console.log(res.data);
      this.setState({post:res.data});
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="blog">
        <ul>
        {this.state.post.map(post => <div key ={post.idposts}>{post.name}<br/><NavLink to={`post/${post.idposts}`}>More</NavLink></div>  )}
        </ul>
      </div>
    )
  }
}