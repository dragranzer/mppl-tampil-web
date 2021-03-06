import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/Profile.module.css';
import headImg from '../assets/img/Rectangle 24.png';
import profilePic from '../assets/img/blank-prof.jpg';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import {useHistory} from "react-router-dom";
import { logout } from '../store/TokenSlice';
import swal from 'sweetalert';

function Profile() {
    let history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token.token)
    
    const [profile, setProfile] = useState();
    const [password, setPassword] = useState();
    
    // console.log(token)
    const URL = `http://47.254.198.205/api/users?append=large_image`
//     useEffect(() =>  {
//         if(token){
//             const getData = async () => {
//                 Axios.get(URL, { headers: {"Authorization" : `Bearer ${token}`} })
//                 .then(res => {
//                 console.log(res);
//                 setProfile(res.data.data);
//                 if(res.data["data"].token){
//                     console.log("berhasil")
//                 }
//                 }).catch(error => {
//                     // this.setError()
//                     console.log(error)
//                     if (error.response) {
//                         console.log("--------------------------------------------------")
//                         // The request was made and the server responded with a status code
//                         // that falls out of the range of 2xx
//                         console.log(error.response.data);
//                         console.log(error.response.status);
//                         if(error.response.status === 401){
//                             history.push("/");
//                             swal({
//                                 title: "Error",
//                                 text: "Mohon Login Terlebih Dahulu",
//                                 icon: "error",
//                             });
//                         }
//                         console.log(error.response.headers);
//                     } else if (error.request) {
//                         console.log("*************************")
            
//                         // The request was made but no response was received
//                         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//                         // http.ClientRequest in node.js
//                         console.log(error.request);
//                     } else {
//                         console.log("++++++++++++++++++++++++")
//                         // Something happened in setting up the request that triggered an Error
//                         console.log('Error', error.message);
//                     }
//                     console.log(error.config);
//                 })
//             }
//             getData();
//             console.log(profile)
//         }
//     },[]);
    console.log(profile)
//     if(!token){
//         history.push("/");
//         swal({
//             title: "Error",
//             text: "Mohon Login Terlebih Dahulu",
//             icon: "error",
//         });
//     }

    const onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setProfile({
            ...profile,
            [name]:value
        })
    }

    const onChangePass = (e) =>{
        setPassword(e.target.value)
        // console.log(password)
    }

    const updateUser = () =>{
        const URLUpdate = `http://47.254.198.205/api/users/update`
        const getData = async () => {
            console.log("token sasasa",token)
            Axios.post(URLUpdate,
                {
                    name:profile.name, 
                    email:profile.email, 
                    phone_number:profile.phone_number , 
                    password:password
                },
                { 
                    headers: {"Authorization" : `Bearer ${token}`}, 
                })
            .then(res => {
            console.log(res);
            
            // setProfile(res.data.data);
            if(res.data["data"].token){
                console.log("berhasil")
            }
            }).catch(error => {
                // this.setError()
                console.log(error)
                if (error.response) {
                    console.log("--------------------------------------------------")
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    console.log("token", token)
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
        }
        getData();
        console.log(profile)
    }
    
    const logOut = () =>{
        dispatch(logout());
        history.push("/");
        swal({
            title: "Success",
            text: "LogOut Berhasil",
            icon: "success",
        });
    }
    
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.container}>
                    <img src={headImg} alt="" />
                    <div className={styles.data}>
                        <div className={styles.profImg}>
                            <img src={profile ? profile.large_image : profilePic} alt="" />
                        </div>
                        <div className={styles.btnPic}>
                            Pilih Foto
                        </div>
                        <div className={styles.content}>
                            <div className={styles.leftItem}>
                                Username
                            </div>
                            <input type="text" value={profile ? profile.name:""} name="name" onChange={onChange}/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.leftItem}>
                                Email
                            </div>
                            {
                                profile ?
                                <input type="text" value={profile ? profile.email:""} name="email" onChange={onChange}/>
                                :
                                "dummyEmail@gmail.com"
                            }
                        </div>
                        <div className={styles.content}>
                            <div className={styles.leftItem}>
                                Password
                            </div>
                            <input type="text" value={password} onChange={onChangePass}/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.leftItem}>
                                No Handphone
                            </div>
                            <input type="text" value={profile ? profile.phone_number:""} name="phone_number" onChange={onChange}/>
                        </div>
                        
                    </div>
                    <div className={styles.validation}>
                        <div className={styles.logout} onClick={logOut}>
                            Log Out
                        </div>
                        <div className={styles.leftBtn}>
                            <div className={styles.back} onClick={() => history.goBack()}>
                                Kembali
                            </div>
                            <div className={styles.submitBtn} onClick={updateUser}>
                                Ubah
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
