import React, { useState} from 'react';
import Axios from 'axios';
import {useHistory} from "react-router-dom";
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';
import styles from '../assets/css/Login.module.css';
import sideimg from '../assets/img/Login-img.png';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { login } from '../store/TokenSlice';

function Login() {
    let history = useHistory();
    const dispatch = useDispatch()
    // const [Data, setData] = useState();
    const [user, setUser] = useState({
        name: "",
        password: "",
    })
    // const URL = "http://47.254.198.205/api/test/"
    // useEffect(() =>  {
    //     const getData = async () => {
    //         const res = await Axios.get(URL)
    //         setData(res)
    //         console.log(res)
    //         console.log(Data)
    //     }
    //     getData();
    //     console.log(Data)
    // },[]);

    

    const onChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        })
        // console.log(state)
    }
    
    const handleSubmit = async (e) => {
        console.log(user);
        let isTrue = false;
        const URL = `http://47.254.198.205/api/users/login`
        await Axios.post(URL, 
            {   
                email:user.name, 
                password: user.password,
            })
        .then(res => {
        //   console.log(res);
          console.log(res.data.data.token);
          dispatch(login(res.data.data.token))
          if(res.data["data"].token){
              console.log("berhasil")
              isTrue = true;
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

        if(isTrue){
            console.log()
            // dispatch(login(res))
            history.push("/home");
        }else{
            return swal({
                title: "Error",
                text: "Password atau Email salah",
                icon: "error",
            });
            // e.preventDefault();
        }
    }
    const handleLoginsementara = (e) => {
        // console.log(user);
        history.push("/home");
    }

    const handleAdmin = (e) => {
        // console.log(user);
        history.push("/admin");
    }

    const handleForget = (e) => {
        // console.log(user);
        history.push("/forget");
    }

    const handleDaftar = (e) => {
        // console.log(user);
        history.push("/register");
    }
    return (
        <div>
            <NavbarLogin/>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <img src={sideimg} alt="" />
                    </div>
                    <div className={styles.item}>
                        <h1 className={styles.title}>LOGIN</h1>
                        <div className={styles.caption}>
                            Email:
                        </div>
                        <input type="email" placeholder="Email" name="name" value={user.name} onChange={onChange}/>
                        <div className={styles.caption}>
                            Password:
                        </div>
                        <input type="password" placeholder="Password" name="password" value={user.password} onChange={onChange}/>
                        <div className={styles.submit}>
                            <div className={styles.signup}>
                                <p onClick={handleDaftar}>Daftar</p>
                                <p onClick={handleForget}>Lupa Password?</p>
                            </div>
                            <div className={styles.akun} onClick={handleSubmit}>
                                <p>Login</p>
                            </div>
                        </div>
                        <div className={styles.admin} onClick={handleAdmin}>
                            Login sebagai Admin
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
            {/* <Link to="/home">
                <button>Pindah ke Home</button>
            </Link> */}
        </div>
    )
}

export default Login
