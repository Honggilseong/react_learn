import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Header from '../header/header'
import firebaseApp from '../service/auth_Service'
import Sidebar from '../sidebar/sidebar'
import Userpost from '../userpost/userpost'
import styles from './main.module.css'
function Main({postsData,authService,fileUpload}) {
    const [post, setPost] = useState({});
    const location = useLocation();
    const history = useHistory();
    const USER_INFO = location.state.id;
    const addPost = (posts) => {
        setPost(post => {
            const updated = {...post};
            updated[posts.id] = posts;
            console.log(updated);
            return updated;
        });
        postsData.savePost(posts);
    };
    const deletePost = (posts) => {
        if(posts.uid !== USER_INFO){
            alert("자신의 게시물이 아닙니다.");
            return;
        }
        setPost(post => {
            const updated = {...post};
            delete updated[posts.id];
            return updated;
        });
        postsData.deletePost(posts,USER_INFO);
    }
    useEffect(() => {
        authService.state(user => {
            if(!user){
                history.push('/');
            };
        });
    });
    useEffect( () => {
        async function dataUpdate(){
            const snapshot = await firebaseApp.firestore().collection('posts').get()
            const collection = {};
            snapshot.forEach(doc => {
                collection[doc.id] = doc.data().posts;
            });
            setPost(collection);
        };
        dataUpdate();
    }
    , []);

    return (
        <div className={styles.main}>
            <Header />
            <section className={styles.visual}>
                <Sidebar />
                <div className={styles.postfix}>
                    <Userpost deletePost={deletePost} post={post} addPost={addPost} fileUpload={fileUpload} />
                </div>
                <div className={styles.portfix}>
                </div>
                
            </section>
        </div>
    )
}

export default Main
