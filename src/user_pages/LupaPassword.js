import React, { useState} from 'react';
import {useHistory} from "react-router-dom";
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';
import sideimg from '../assets/img/Login-img.png';
import styles from '../assets/css/LupaPassword.module.css';

function LupaPassword() {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        password: "",
        passConfirm : ""
    })
    const [isUser, setIsUser] = useState(false);
    const onChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        })
        // console.log(state)
    }
    const handleSubmit = (e) => {
        console.log(user);
        // history.push("/");
        setIsUser(true)
    }
    const handleLogin = (e) => {
        console.log(user);
        history.push("/");
    }
    return (
        <div>
            <NavbarLogin />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <img src={sideimg} alt="" />
                    </div>
                    {
                        isUser ? 
                        <div className={styles.item}>
                            <h1 className={styles.title}>Reset Password</h1>
                            <div className={styles.caption}>
                                Password Baru:
                            </div>
                            <input type="text" placeholder="Email" name="password" value={user.password} onChange={onChange}/>
                            <div className={styles.caption}>
                                Konfirmasi Password:
                            </div>
                            <input type="text" placeholder="Password" name="passConfirm" value={user.passConfirm} onChange={onChange}/>
                            <div className={styles.reset}>
                                <div className={styles.signup}>
                                    <p>Daftar</p>
                                </div>
                                <div className={styles.akun} onClick={handleLogin}>
                                    <p>Reset</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className={styles.item}>
                            <h1 className={styles.title}>Lupa Password?</h1>
                            <div className={styles.caption}>
                                Email:
                            </div>
                            <input type="email" placeholder="Email" name="name" value={user.name} onChange={onChange}/>
                            <div className={styles.tiny}>
                                <p>Link reset password akan dikirim ke email Anda.</p>
                            </div>
                            <div className={styles.submit}>
                                <div className={styles.akun} onClick={handleSubmit}>
                                    <p>Kirim</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LupaPassword
