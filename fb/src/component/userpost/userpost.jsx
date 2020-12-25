import React from 'react'
import Inputbox from '../inputbox/inputbox'
import Posts from '../posts/posts'
import styles from './userpost.module.css'
function Userpost({addComment,deletePost,addPost,post,fileUpload}) {
    return (
        <section className={styles.userpost}>
            <div className={styles.inputfix}>
                <Inputbox addPost={addPost} fileUpload={fileUpload} />
            </div>
            <section className={styles.postvisual}>
                <Posts deletePost={deletePost} addPost={addPost} post={post} />
            </section>
        </section>
    )
}

export default Userpost
