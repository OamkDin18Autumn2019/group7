import React from 'react';
import styles from './AddComment.module.css';
export default function AddComment(props) {
    function update(event) {
        props.onHandleChange(event.target.value);
    }
    return (
        <div className={styles.addcom} >

            <textarea className={styles.input} onChange={update} type='text' placeholder="Comment" name='comment' id='comment' value={props.input}></textarea>
            <button className={styles.button} onClick={props.submit}>Comments</button>

        </div>

    );
}
