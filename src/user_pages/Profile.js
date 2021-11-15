import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/Profile.module.css';
import headImg from '../assets/img/Rectangle 24.png';
import profile from '../assets/img/blank-prof.jpg';

function Profile() {
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.container}>
                    <img src={headImg} alt="" />
                    <div className={styles.data}>
                        <div className={styles.profImg}>
                            <img src={profile} alt="" />
                        </div>
                        <div className={styles.btnPic}>
                            Pilih Foto
                        </div>
                        <div className={styles.content}>
                            <div className={styles.leftItem}>
                                Username
                            </div>
                            <input type="text" />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.leftItem}>
                                Email
                            </div>
                            <div className={styles.rightItem}>
                                dummyEmail@gmail.com
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.leftItem}>
                                Password
                            </div>
                            <input type="text" />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.leftItem}>
                                No Handphone
                            </div>
                            <input type="text" />
                        </div>
                        
                    </div>
                    <div className={styles.validation}>
                        <div className={styles.back}>
                            Kembali
                        </div>
                        <div className={styles.submitBtn}>
                            Ubah
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
