import { Card, CardContent, Typography } from '@material-ui/core'
import React, { useEffect, useRef }  from 'react'
import styles from './message.module.css'
function Message  ({message,authService})  {
    const USER_UID = authService.getuser();
    const scrollRef = useRef();
    const checkUser = USER_UID === message.userId ? styles.currentUser : styles.otherUser;
    const outputTextStyle = checkUser === styles.currentUser ;
    const didYouSendMessage = () => {
        scrollRef.current.scrollIntoView();
    }
    useEffect(didYouSendMessage,[message]);
    return (
        <div className={`${styles.message} ${outputTextStyle ? styles.messageCurrentUser : ''}`}>
            {outputTextStyle ? '' : <p>{message.chatName}</p>}
            <Card className={checkUser}>
                <CardContent>
                    <Typography
                        color="white"
                        component="h2"
                        variant="h5"
                    >
                        {message.chatMessage}
                    </Typography>
                </CardContent>
            </Card>
        <div ref={scrollRef}></div>
        </div>
    )
}

export default Message
