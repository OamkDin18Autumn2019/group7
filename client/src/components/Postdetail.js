import React, { Component } from "react";
import axios from "axios";
import Comments from './Comments.js';
import AddComment from './AddComment.js';
import styles from './Postdetail.module.css';
//import styles from './PostView.module.css';

export default class Postdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post:[],
      comments: [],
      input:""
    };
  }


  componentDidMount = () => {
    axios
      .get(
        "http://localhost:4000/post/" +
        parseInt(this.props.match.params.id)
      )
      .then(res => {
        this.setState({ post: res.data[0] });
        console.log(this.state.post);
      })
      .catch(error => console.log(error));

    axios.get('http://localhost:4000' + '/comments/post/' + parseInt(this.props.match.params.id)).then(result => {
        this.setState({ comments: result.data });
      })
      .catch(error => {
        console.error(error);
      })
  }
  onHandleChange = (newtext)=>
        {
          this.setState({input:newtext});
          console.log(this.state.input);
        }
        onHandleSubmit = (event)=>
        {
          if (this.props.userInfo===null)
          {
            this.props.history.push('/login');
          }
          else{
          axios.post('http://localhost:4000' +'/comments', {
            idpost: this.state.post.idposts,
            iduser: this.props.userInfo.id,
            comment: this.state.input
            })
            .then(function (response) {
              console.log(response);
              })
            .catch(function (error) {
              console.log(error);
            });
            let a = this.state.comments;
            let b = {idpost: this.state.post.idposts,
            iduser: this.props.userInfo.id,
            username: this.props.userInfo.username,
            comment: this.state.input}
            a.push(b);
            this.setState({comments:a});
          }
        }
          getComment = ()=>
          {
            axios.get('http://localhost:4000' + '/comments/post/' + parseInt(this.props.match.params.id)).then(result => {
              this.setState({ comments: result.data });
            })
            .catch(error => {
              console.error(error);
              console.log(this)
            });
            console.log(this.state.comments);
          }

  render() {
    if (this.state.post) {
      return (
        <div className={styles.blog}>
          <div className={styles.row}>
              <div className={styles.card}>
                <h2>{this.state.post.name}</h2>
                <p> by {this.state.post.username}</p>
                <img className={styles.img} src={'http://localhost:4000/' + this.state.post.image}></img>
                <h4>INGREDIENTS</h4>
                <p>{this.state.post.ingredients}</p>
                <h4>RECIPE</h4>
                <p>{this.state.post.recipe}</p>
              </div>
          </div>
          <div className={styles.row} >
            <Comments comments={this.state.comments}></Comments>
          </div>
          <div className={styles.row}>
            <div className={styles.addcom}>
              <AddComment userInfo={this.props.userInfo} post={this.state.post} submit = {this.onHandleSubmit} getComment={this.getComment} onHandleChange={this.onHandleChange}></AddComment>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
