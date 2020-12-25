import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './sidemenu.module.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { IconButton } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';

function Sidemenu() {
    const location = useLocation();
    const history = useHistory();
    const {id,displayName,photoURL} = location.state;
    const goToMessenger = () => {
        history.push({
            pathname: "/messenger",
            state: {id , displayName , photoURL }
        })
    }
    return (
        <ul className={styles.sidemenu}>
           <li className={styles.side}>
                <img 
                    className={styles.profile}
                    src={location.state.photoURL} 
                    alt="profileIMG"/>
                <p>{location.state.displayName}</p>
           </li>

           <li className={styles.side}>
               <IconButton>
                   <LocalHospitalIcon/>
               </IconButton>
                <p>코로나 정보</p>
           </li>
            <li onClick={goToMessenger} className={styles.side}>
                <IconButton>
                        <MessageIcon />
                </IconButton>
                <p>메세지</p>
            </li>

        </ul>
    )
}

export default Sidemenu
