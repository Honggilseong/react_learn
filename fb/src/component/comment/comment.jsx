import { Avatar } from '@material-ui/core';
import React from 'react'
import styles from './comment.module.css'

function Comment({post,reply}) {
    const {
        commentName,
        commentPhoto,
    } = post.userComment;
    return (
        <li className={styles.comment}>
            <Avatar src={commentPhoto} alt="commentImg"/>
            <div className={styles.text}>
                <p className={styles.name}>{commentName}</p>
                <p className={styles.comment}>{reply.userText}</p>
            </div>
        </li>
    )
}

export default Comment
