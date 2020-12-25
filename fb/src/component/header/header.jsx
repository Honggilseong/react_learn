import { Search } from '@material-ui/icons'
import React from 'react'
import styles from './header.module.css'
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
function Header() {
    const location = useLocation();
    const history = useHistory();
    const {id,displayName,photoURL} = location.state;
    const goToMain = () => {
        history.push({
            pathname : "/main",
            state : {id,displayName,photoURL},
        });
    };
    const goToMessenger = () => {
        history.push({
            pathname : "/messenger",
            state : {id,displayName,photoURL},
        });
    };
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <img 
                    src="/facebook-small.png" 
                    alt="smallLogo"
                    className={styles.img}
                    onClick={goToMain}
                />
                <div className={styles.btnstyle}>
                    <Search className={styles.search} />
                    <input 
                        type="text"
                        className={styles.inputstyle}
                        placeholder="Facebook 검색"
                    />
                </div>
            </div>
            <ul className={styles.center}>
                <li onClick={goToMain} className={styles.header__option}>
                    <HomeIcon/>
                </li>
                <li className={styles.header__option}>
                    <OndemandVideoIcon/>
                </li>
                <li className={styles.header__option}>
                    <GroupIcon/>
                </li>
                <li className={styles.header__option}>
                    <ViewQuiltOutlinedIcon/>
                </li>
            </ul>
            <ul className={styles.right}>
                <li className={styles.avatar}>
                    <Avatar src={location.state.photoURL}/>
                    <p>{location.state.displayName}</p> {/* <p>{location.state.displayName}</p> */}
                </li>
                <li>
                    <IconButton><AddIcon/></IconButton>
                </li>
                <li onClick={goToMessenger}>
                    <IconButton><MessageIcon/></IconButton>
                </li>
                <li>
                    <IconButton><NotificationsIcon/></IconButton>
                </li>
                <li>
                    <IconButton><ExpandMoreIcon/></IconButton>
                </li>
            </ul>
        </header>
    )
}

export default Header
