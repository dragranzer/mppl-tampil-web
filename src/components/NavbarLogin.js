import React from 'react';
import styles from '../assets/css/NavbarLogin.module.css';
import {Link} from "react-router-dom";

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
                <div className={styles.search}>Cari Webinar</div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className={styles.akun} >
                        <span>Login</span>
                    </div>
                </Link>
            </div>
        </div>
        
    )
}

export default NavbarLogin
