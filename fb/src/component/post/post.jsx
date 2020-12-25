import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react'
import styles from './post.module.css'
import Comments from '../comments/comments'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

function Post({addComment,deletePost,addPost,post}) {
    const [likes, setLikes] = useState({likes : 0});
    const [checklike, setChecklike] = useState(false);
    const [deletebtn,setDeleteBTN] = useState(false);
    const [commentable, setCommentAble] = useState(false);
    const onLikeChange = (e) => {
        e.preventDefault();
        if(checklike === false){
            const likeUpdate = {...likes,likes:parseInt(post.likes+1)}
            setLikes(likeUpdate);
            const likeable = true;
            setChecklike(likeable);
            addPost({
                ...post, likes :likeUpdate.likes, checklike : likeable
            });
        }else{
            const likeUpdate = likes.likes <= 0 ? {likes : parseInt(0)} : {...likes,likes:parseInt(post.likes-1)}
            setLikes(likeUpdate.likes);
            const likedisable = false;
            setChecklike(likedisable);
            addPost({
                ...post, likes : likeUpdate.likes, checklike : likedisable
            });
        };
    };

    const deleteClick = deletebtn ? styles.on : styles.off;
    const deleteBTN = () => {
        if(deletebtn ===  false){
            setDeleteBTN(true);
        } else {
            setDeleteBTN(false);
        }
    };
    const deleteUserPost = () => {
        deletePost({...post});
    };

    const comment = commentable ? styles.commenton : styles.commentoff;
    const commnetClick = () => {
        if(commentable === false){
            setCommentAble(true);

        }else{
            setCommentAble(false);

        }
    };
    return (
        <ul className={styles.post}>
            <li className={styles.headvisual}>
                <div className={styles.head}>
                    <Avatar src={post.userPhotoURL} />
                    <p>{post.userName}</p>
                </div>
                <div className={styles.container}>
                    <div>
                        <IconButton onClick={deleteBTN}><MoreHorizOutlinedIcon/></IconButton>
                    </div>
                    <ul className={`${styles.delete} ${deleteClick}`}>
                        <li onClick={deleteUserPost}>삭제</li>
                    </ul>
                </div>
            </li>
            <li className={styles.body}>
                <div className={styles.text}>
                    <span>{post.userText}</span>
                </div>
                {post.imageURL &&<img className={styles.bodyimg} src={post.imageURL} alt="userimg"/>}
            </li>
            <ul className={styles.likebtn}>
                <li className={styles.like}>
                    <ThumbUpAltOutlinedIcon />
                    <span>{post.likes}</span>
                </li>                
            </ul>
            <ul className={styles.clicklike}>
            {!post.checklike ?              
                <li onClick={onLikeChange} className={styles.btn}>
                    <ThumbUpAltOutlinedIcon />
                    <span>좋아요</span>
                </li> 
                :
                <li onClick={onLikeChange} className={`${styles.btnclick} ${styles.btn}`}>
                    <ThumbUpAltOutlinedIcon />
                    <span>좋아요</span>
                </li>
            }
                <li className={styles.btn} onClick={commnetClick}>
                    <ChatBubbleOutlineOutlinedIcon />
                    <span>댓글 달기</span>
                </li>
            </ul>
            <div className={comment}>
                <Comments addComment={addComment} addPost={addPost} posts={post} />
            </div>
        </ul>
    )
}

export default Post
