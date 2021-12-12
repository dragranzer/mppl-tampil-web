import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as FaIcons from "react-icons/fa";
import styles from '../assets/css/EventSaya.module.css';

function EventSaya() {
    const URL = "http://47.254.198.205/api/users?include=webinar"

    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <FaIcons.FaCalendarAlt size={60}/>
                        <p>Event Saya</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EventSaya
