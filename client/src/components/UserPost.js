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
        if (this.props.userInfo != null) {
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
    deletePost = (id) => {
        axios.delete("http://localhost:4000/post/" + id
        ).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
        let deleted_array_of_post = this.state.post.filter(i => i.idposts != id);
        console.log(deleted_array_of_post);
        this.setState({post : deleted_array_of_post});    
}
    render() {
        if (this.props.userInfo === null) {
            return (<React.Fragment><Redirect to='/login' /></React.Fragment>)
        }
        else {
            if (this.state.post.length === 0) {
                return <h2>You have no post</h2>
            }
            else {
                return (
            
                    <div className={styles.container}>
                        <h3>Your post</h3>
                        <table>
                            <tr className={styles.border}>
                                <th className={styles.border}>id</th>
                                <th className={styles.border}>Post Name</th>
                                <th className={styles.border}>Date</th>
                                <th className={styles.border}>Delete</th>
                            </tr>
                            {this.state.post.map(i =>
                                <tr className={styles.border}>
                                    <th className={styles.border}>{i.idposts}</th>
                                    <th className={styles.border}>{i.name}</th>
                                    <th className={styles.border}>{i.date}</th>
                                    <th className={styles.border}><button onClick={this.deletePost.bind(this, i.idposts)}>Delete</button></th>
                                </tr>)}
                        </table>
                    </div>
                )
            }
        }
    }
}