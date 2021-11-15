import React, {useState} from 'react';
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';
import styles from '../assets/css/Register.module.css';
import sideimg from '../assets/img/Login-img.png';
import {useHistory} from "react-router-dom";
import Axios from 'axios';
import swal from 'sweetalert';

function Register() {
    let history = useHistory();
    const [userData, setUserData] = useState({
        name:"",
        handphone:"",
        email:"",
        password:"",
        passConfirm:""
    });

    const onChange = (e) => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value,
        })
        // console.log(state)
    }

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    const handleSubmit = async (e) => {
        console.log(userData);
        if(userData.password !== userData.passConfirm){
            return swal({
                title: "Error",
                text: "Harap cocokkan password dan konfirmasi password",
                icon: "error",
            });
        }
        if(userData.name === "" || userData.password === "" || userData.handphone === "" || userData.email === ""){
            return swal({
                title: "Error",
                text: "Mohon Lengkapi Data",
                icon: "error",
            });
        }
        if(!regexEmail.test(userData.email)){
            return swal({
                title: "Error",
                text: "Format email kurang sesuai",
                icon: "error",
            });
        }
        if(!regexPass.test(userData.password)){
            return swal({
                title: "Error",
                text: "pasword harus terdiri dari minimal 1 huruf kapital, 1 angka, 1 hurif kecil dan minimal 8 huruf",
                icon: "error",
            });
        }
        const user = {
            email: userData.email,
            password: userData.password,
            name: userData.name,
            phone_number: userData.handphone
          };

        // console.log(user.password);
        const URL = `http://47.254.198.205/api/users`
        await Axios.post(URL, 
            {   
                email:user.email, 
                password: user.password,
                name: user.name,
                phone_number: user.phone_number 
            })
        .then(res => {
          console.log(res);
          console.log(res.data);
        }).catch(error => {
            // this.setError()
            console.log(error)
            if (error.response) {
                console.log("--------------------------------------------------")
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                if(error.response.status === 422){
                    return swal({
                        title: "Error",
                        text: "Email telah terdaftar",
                        icon: "error",
                    });
                }
                console.log(error.response.headers);
            } else if (error.request) {
                console.log("*************************")

                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                console.log("++++++++++++++++++++++++")
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
        swal({
            title: "Success",
            text: "Data berhasil didaftarkan",
            icon: "success",
        });
        history.push("/");
    }
    return (
        <div>
            <NavbarLogin />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.itemImage}>
                        <img src={sideimg} alt="" className={styles.img}/>
                    </div>
                    <div className={styles.itemInput}>
                        <h1 className={styles.title}>Pendaftaran</h1>
                        <div className={styles.data}>
                            <div className={styles.leftData}>
                                <div className={styles.caption}>
                                    Nama lengkap: <span className={styles.req}>*) Wajib diisi</span>
                                </div>
                                <input type="text" placeholder="Nama Lengkap" name="name" value={userData.name} onChange={onChange} className={styles.input}/>
                                <div className={styles.tiny}>
                                    <p>isi kolom nama lengkap anda dengan benar</p>
                                </div>
                                <div className={styles.caption}>
                                    Nomor Handphone: <span className={styles.req}>*) Wajib diisi</span>
                                </div>
                                <input type="number" placeholder="Nomor Handphone" name="handphone" value={userData.handphone} onChange={onChange} className={styles.input}/>
                                <div className={styles.tiny}>
                                    <p>isi kolom no handphone anda dengan benar misal : 628531407298 atau 08531407298</p>
                                </div>
                            </div>
                            <div className={styles.rightData}>
                                <div className={styles.caption}>
                                    Password: <span className={styles.req}>*) Wajib diisi</span>
                                </div>
                                <input type="text" placeholder="Password" name="password" value={userData.password} onChange={onChange} className={styles.input}/>
                                <div className={styles.tiny}>
                                    <p>Password minimal mengandung 8-14 huruf dan angka</p>
                                </div>
                                <div className={styles.caption}>
                                    Konfirmasi Password:
                                </div>
                                <input type="text" placeholder="Konfirmasi Password" name="passConfirm" value={userData.passConfirm} onChange={onChange} className={styles.input}/>
                                <div className={styles.tiny}>
                                    <p>Ketik Ulang password anda</p>
                                </div>
                                <div className={styles.caption}>
                                    Email: <span className={styles.req}>*) Wajib diisi</span>
                                </div>
                                <input type="text" placeholder="Email" name="email" value={userData.email} onChange={onChange} className={styles.input}/>
                                <div className={styles.tiny}>
                                    <p>isi kolom email aktif anda dengan benar</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.akun} onClick={handleSubmit}>
                            <p>Daftar</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register
