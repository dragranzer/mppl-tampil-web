import React from 'react';
import styles from '../assets/css/NavbarLogin.module.css';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

function NavbarLogin() {
    let history = useHistory();
    const handleHome = async (e) => {
        history.push("/home");
    }
    const handleCollab = async (e) => {
        history.push("/collab");
    }
    const handleCari = async (e) => {
        history.push("/events");
    }
    return (
        <div className={styles.header}>
            <div className={styles.Logo}>Logo</div>
            <div className={styles.nav}>
                <div className={styles.item} onClick={handleHome}>Home</div>
                <div className={styles.item} onClick={handleCollab}>Kolaborasi</div>
                <div className={styles.item}>Forum</div>
               
            </div>
            <div className={styles.method}>
                <div className={styles.search} onClick={handleCari}>Cari Webinar</div>
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
