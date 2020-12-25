import { Avatar } from '@material-ui/core';
import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Comment from '../comment/comment';


import styles from './comments.module.css'
function Comments({posts,addPost})
 {
    console.log(posts);
    const location = useLocation();
    const commentRef = useRef();
    const formRef = useRef();
    const [comment, setComment] = useState([]);
    const onClick =  (e) => {
        e.preventDefault();
        if(commentRef.current.value === ''){
            alert('내용을 입력해주세요');
            return;
        }
        const makeComment = [...posts ,{userComment : {commentName : location.state.displayName,
                                            commentPhotoURL : location.state.photoURL,
                                            commentText : commentRef.current.value}}]
        // const makeComment =  posts.userComment.concat({
        //     commentName : location.state.displayName,
        //     commentPhotoURL : location.state.photoURL,
        //     commentText : commentRef.current.value
        // });

        addPost(makeComment)
        formRef.current.reset();
    };
    return (
        <form ref={formRef} className={styles.comments}>
            <div className={styles.commentText}>
                <Avatar src={location.state.photoURL} alt="commentAvatar"/>
                <div className={styles.inputwrap}>
                    <input type="text" ref={commentRef} placeholder="댓글을 입력하세요..." className={styles.inputtext}></input>
                </div>
                <button onClick={onClick}>post</button>
            </div>
            <ul className={styles.textbox}>
                {posts.userComment && Object.keys(posts.userComment).map(text => (
                    <Comment post={posts} reply={posts.userComment[text]} />
                ))}
            </ul>
        </form>
    )
}

export default Comments
