import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import styles from './Postlist.module.css';
export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:4000" + "/post")
      .then(res => {
        console.log(res.data);
        this.setState({ post: res.data });
      })
      .catch(error => console.log(error));
  }

  render() {

    return (
      <div className={styles.card}>
          {this.state.post.filter(i => i.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
          ).map(post => <div className={styles.row}><NavLink to={`post/${post.idposts}`}><div key={post.idposts}><img className={styles.img} src={'http://localhost:4000/' + post.image}></img></div>{post.name}</NavLink></div>)}
      </div>
    )
  }
}
