import React from 'react';
import styles from '../assets/css/Footer.module.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.redirect}>
                <p>Home</p>
                <p>Kolaborasi</p>
                <p>Forum</p>
                <p>Login</p>
                <p>Webinar</p>
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
