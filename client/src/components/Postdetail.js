import React, { Component } from "react";
import axios from "axios";
import Comments from './Comments.js';
import AddComment from './AddComment.js';
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
        <div className="blog">
          <div className="row">
            <div>{this.state.post.name} by {this.state.post.username}</div>
            <div>{this.state.post.ingredients}</div>
            <div>{this.state.post.recipe}</div>
          </div>
          <div>
        <Comments comments={this.state.comments}></Comments>
        </div>
        <div>
        <AddComment userInfo={this.props.userInfo} post={this.state.post} submit = {this.onHandleSubmit} getComment={this.getComment} onHandleChange={this.onHandleChange}></AddComment>
        </div>
        </div>
      );
    } else {
      return null;
    }
  }
}