import React, { Component } from 'react';
import axios from 'axios';
import styles from './UserPost.module.css';
import { Redirect } from "react-router-dom";
export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        };
    }
    
    componentDidMount = () => {
        if(this.props.userInfo != null)
        {
        axios.get(
                "http://localhost:4000/post/user/" +
                this.props.userInfo.id
            )
            .then(res => {
                this.setState({ post: res.data });
                console.log(this.state.post);
            })
            .catch(error => console.log(error));
        }
    }
    alo = (id)=>{
       axios.delete( "http://localhost:4000/post/" + id
       ).then(function (response) {
        console.log(response);
        })
      .catch(function (error) {
        console.log(error);
      }); 
    }
    render() {
        if (this.props.userInfo === null)
        {
            return(<React.Fragment><Redirect to='/login' /></React.Fragment>)
        }
        else{
        return(
            <div>
                <table className={styles.border}>
                <tr className={styles.border}>
                    <td className={styles.border}>id</td>
                    <td className={styles.border}>Post Name</td>
                    <td className={styles.border}>Date</td>
                    <td className={styles.border}>Delete</td>
                </tr>
                {this.state.post.map(i=>
                <tr className={styles.border}>
                    <td className={styles.border}>{i.idposts}</td>
                    <td className={styles.border}>{i.name}</td>
                    <td className={styles.border}>{i.date}</td>
                    <td className={styles.border}><button onClick={this.alo.bind(this,i.idposts)}>Delete</button></td>
                </tr>)}
                </table>
            </div>
        )}
    }
}