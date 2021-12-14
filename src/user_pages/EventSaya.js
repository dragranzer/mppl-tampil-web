import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as FaIcons from "react-icons/fa";
import styles from '../assets/css/EventSaya.module.css';
import { useSelector, useDispatch } from 'react-redux';
import WebinarSaya from '../components/WebinarSaya';
import {useHistory} from "react-router-dom";
import swal from 'sweetalert';

function EventSaya() {
    let history = useHistory();
    const token = useSelector((state) => state.token.token)
    console.log(token)
    const [webinar, setWebinar] = useState();
    const URL = "http://47.254.198.205/api/users?include=webinars"
    useEffect(() =>  {
        if(token){
            const getData = async () => {
                Axios.get(URL, { headers: {"Authorization" : `Bearer ${token}`} })
                .then(res => {
                console.log(res);
                setWebinar(res.data.data.webinars);
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
                        if(error.response.status === 401){
                            history.push("/");
                            swal({
                                title: "Error",
                                text: "Mohon Login Terlebih Dahulu",
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
            }
            getData();
            console.log(webinar)
        }
    },[]);
    console.log(webinar)
    if(!token){
        history.push("/");
        swal({
            title: "Error",
            text: "Mohon Login Terlebih Dahulu",
            icon: "error",
        });
    }
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
                <div className={styles.webinarBox}>
                    {
                        webinar ?
                        webinar.map((item, index) => (
                            <WebinarSaya 
                                id={item.id}
                                title = {item.title}
                                type={item.type}
                                price={item.price}
                                participants={item.participants}
                                start_at={item.start_at}
                                end_at={item.end_at}
                                category_id={item.category_id}
                                status={item.status}
                                image={item.extra_small_image}
                            />
                        ))
                        :
                        <></>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EventSaya
