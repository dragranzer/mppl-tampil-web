import React from 'react';
import styles from '../assets/css/Footer.module.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {useHistory} from "react-router-dom";

function Footer() {
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
    const handleLogin = async (e) => {
        history.push("/");
    }
    return (
        <div className={styles.footer}>
            <div className={styles.redirect}>
                <p onClick={handleHome}>Home</p>
                <p onClick={handleCollab}>Kolaborasi</p>
                <p>Forum</p>
                <p onClick={handleLogin}>Login</p>
                <p onClick={handleCari}>Webinar</p>
            </div>
            <div className={styles.socmed}>
                <div className={styles.icon}>
                    <FaIcons.FaTwitter size={28}/>
                </div>
                <div className={styles.icon}>
                    <AiIcons.AiFillLinkedin size={28}/>
                </div>
                <div className={styles.icon}>
                    <AiIcons.AiFillInstagram size={28}/>
                </div>
                <div className={styles.icon}>
                    <AiIcons.AiFillYoutube size={28}/>
                </div>
            </div>
            <div className={styles.copyright}>    
                <p>️<FaIcons.FaRegCopyright /> 2021 Tampil. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
