import React from 'react'
import styles from '../assets/css/NavbarLogin.module.css'

function NavbarLogin() {
    return (
        <div className={styles.header}>
            <div className={styles.Logo}>Logo</div>
            <div className={styles.nav}>
                <div className={styles.item}>Home</div>
                <div className={styles.item}>Kolaborasi</div>
                <div className={styles.item}>Forum</div>
               
            </div>
            <div className={styles.method}>
                <div className={styles.item}>Cari Webinar</div>
                <div className={styles.akun}>Akun</div>
            </div>
        </div>
        
    )
}

export default NavbarLogin
