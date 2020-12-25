import React from 'react'
import Sidemenu from '../sidemenu/sidemenu'
import styles from './sidebar.module.css'
function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Sidemenu />
        </div>
    )
}

export default Sidebar
