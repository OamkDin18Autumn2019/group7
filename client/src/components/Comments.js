import React from 'react';
import axios from 'axios';
import styles from './Comments.module.css';
export default function Comments(props) {

    return (
        /*<div className={styles.addcom}>
            <h3>Comments</h3>
            {props.comments.map(i => <div className={styles.comment} key={i.idcomments}>{i.username} : {i.comment}</div>)}
        </div>*/
        <div className={styles.addcom}>
            <h3>Comments</h3>
        </div>

    );


}
