import React from 'react'
import Post from '../post/post'
import styles from './posts.module.css'
function Posts({addComment,deletePost,post,addPost}) {
    return (
        <section className={styles.posts}>
            {Object.keys(post).map(key => (
                <Post key={key} addPost={addPost} deletePost={deletePost} post={post[key]}/>
            ))
            }
        </section>
    )
}

export default Posts
