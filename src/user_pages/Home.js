import React from 'react';
import styles from '../assets/css/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import sideImg from '../assets/img/hero-fix.png';
import * as FaIcons from "react-icons/fa";

function Home() {
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.leftItem}>
                        <h1 className={styles.title}>Webinar</h1>
                        <h1 className={styles.white}>untuk Semua Orang</h1>
                        <p className={styles.caption}>Ikuti kegiatan webinar dan online event melalui 
                            platform Tampil dengan mudah dan cepat. 
                            Anda juga dapat membuat event yang dipromosikan 
                            melalui Tampil.
                        </p>
                        <div className={styles.searchBtn}>
                            cari webinar
                        </div>
                        <p className={styles.atau}>Atau</p>
                        <div className={styles.search}>
                            <input type="text" placeholder="Masukan ID room" className={styles.input}/>
                            <div className={styles.btnSearch}>
                                <FaIcons.FaUsers size={20} />
                                Gabung
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.rightItem}>
                        <img src={sideImg} alt="" className={styles.rightImg}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
