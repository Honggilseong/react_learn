import React, { useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../header/header';
import Message from '../message/message';
import firebaseApp from '../service/auth_Service';
import Sidebar from '../sidebar/sidebar';
import styles from './messenger.module.css'
function Messenger({messengerData,authService}) {
    const location = useLocation();
    const history = useHistory();
    const messegeBoxRef = useRef(null);
    const inputRef = useRef();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const onChange = (e) => {
        setInput(e.target.value);
    }
    const sendMessage = (e) => {
        e.preventDefault();
        if(inputRef.current.value === ''){alert("메세지를 입력해 주세요"); return;}
        const newMessage = [...messages,{userId : location.state.id ,chatName : location.state.displayName, chatMessage : input}]
        setMessages(newMessage);
        messengerData.getmessages(newMessage);
        setInput('');
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
            const snapshot = await firebaseApp.firestore().collection('messages').get();
            snapshot.forEach(doc => {
                setMessages(doc.data().messages);
            });
        };
        dataUpdate();
    }
    , []);
    return (
        <div className={styles.messenger}>
            <Header />
            <div className={styles.visual}>
                <Sidebar />
                <div className={styles.headContainer}>
                    <div className={styles.headflex}>
                        <div className={styles.messengerHead}>
                            <img 
                                src="/messenger.png" 
                                alt="messengerLogo"
                                className={styles.messengerLogo}
                            />
                            <p className={styles.headertext}>Messenger</p>
                        </div>
                        <div ref={messegeBoxRef} className={styles.messegeBox}>
                            {messages && messages.map(message => (
                                <Message authService={authService} message={message} />
                            ))}
                        </div>
                        <form className={styles.messageform}>
                            <div className={styles.inputWrap}>
                                <input ref={inputRef} placeholder="메세지를 입력하세요..." className={styles.inputtext} type="text" value={input} onChange={onChange}></input>
                            </div>
                            <button className={styles.inputbtn} onClick={sendMessage}>전송</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger
