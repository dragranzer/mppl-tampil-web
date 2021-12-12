import React from 'react';
import styles from '../assets/css/NavbarLogin.module.css';
import {useHistory} from "react-router-dom";

function Navbar() {
    let history = useHistory();

    const handleProf = async (e) => {
        history.push("/profile");
    }
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
                <div className={styles.item} onClick={handleCari}>Cari Webinar</div>
                <div className={styles.akun} onClick={handleProf}>Akun</div>
            </div>
        </div>
        
    )
}

export default Navbar
