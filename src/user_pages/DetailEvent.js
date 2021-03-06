import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import Axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/DetailEvents.module.css';
import * as FaIcons from "react-icons/fa";

function DetailEvent() {
    const { id } = useParams();
    const [webinar, setWebinar] = useState();
    const [terdaftar, setTerdaftar] = useState(false);
    const [image, setImage] = useState();
    const token = useSelector((state) => state.token.token)
    // console.log(id)
    const URL = "http://47.254.198.205/api/webinars/"+id;
    useEffect(() =>  {
        const getData = async () => {
            const res = await Axios.get(URL)
            setWebinar(res)
            console.log(res)
        }
        getData();
        // console.log(webinar)
    },[]);
    const URL2 = "http://47.254.198.205/api/webinars/"+id+"?append=large_image";
    useEffect(() =>  {
        const getData = async () => {
            const res = await Axios.get(URL2)
            setImage(res.data.data.large_image)
            console.log(res.data.data.large_image)
        }
        getData();
    },[]);
    const URLCek = "http://47.254.198.205/api/user_webinars/"+id
    useEffect(() =>  {
        const cekData = async () => {
            Axios.get(URLCek,
            {   
                headers: {"Authorization" : `Bearer ${token}`},
            })
        .then(res => {
          console.log(res);
          console.log(res.data.data);
          setTerdaftar(true);
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
        cekData();
    },[]);
    const URLDaftar = "http://47.254.198.205/api/user_webinars"
    const daftar = () => {
        console.log(token)
        Axios.post(URLDaftar, {webinar_id:id, payment_method:"transfer"},
            {   
                headers: {"Authorization" : `Bearer ${token}`},
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
        setTerdaftar(true)
    };
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.rightBox}>
                        {
                            image ? 
                            <div className={styles.webinarImg}>
                                <img src={image} alt="" />
                            </div>
                            :
                            <></>
                        }
                        {
                            webinar ? 
                                <div>
                                    {console.log(webinar.data.data)}
                                    <div className={styles.title}>
                                        {webinar.data.data.title}
                                    </div>
                                    <div>
                                        <div dangerouslySetInnerHTML={{ __html: webinar.data.data.description }} />
                                        {/* {webinar.data.data.description} */}
                                    </div>
                                </div>
                            :
                            <></>
                        }
                    </div>
                    <div className={styles.leftBox}>
                        <div className={styles.daftar}>
                            <p>Pendaftaran</p>
                            {
                                terdaftar ?
                                <div className={styles.afterDaftar}>
                                    Anda telah terdaftar pada event
                                </div>
                                :
                                <div className={styles.btnSubmit} onClick={daftar}>
                                    <FaIcons.FaCalendarAlt size={18}/> 
                                    <p>Daftar Event</p>
                                </div>
                            } 
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>
                                Detail Event
                            </div>
                            <div className={styles.detailInfo}>
                                <div className={styles.itemInfo}>
                                    <FaIcons.FaShieldAlt size={14}/>
                                    <span> Tipe Event</span>
                                    {
                                        webinar ?
                                        <div>{webinar.data.data.type}</div>
                                        :
                                        <></>
                                    }
                                </div>
                                
                                <div className={styles.itemInfo}>
                                    <FaIcons.FaUserFriends size={18}/>
                                    <span> Partner Event</span>
                                    {
                                        webinar ?
                                        <div>{webinar.data.data.partner}</div>
                                        :
                                        <></>
                                    }
                                </div>
                                <div className={styles.itemInfo}>
                                    <FaIcons.FaCalendarAlt size={14}/>
                                    <span> Mulai Event</span>
                                    {
                                        webinar ?
                                        <div>{webinar.data.data.start_at}</div>
                                        :
                                        <></>
                                    }
                                </div>
                                <div className={styles.itemInfo}>
                                    <FaIcons.FaCalendarAlt size={14}/>
                                    <span> Selesai Event</span>
                                    {
                                        webinar ?
                                        <div>{webinar.data.data.end_at}</div>
                                        :
                                        <></>
                                    }
                                </div>
                                <div className={styles.itemInfo}>
                                    <FaIcons.FaMoneyBillWave size={16}/>
                                    <span> Harga Event</span>
                                    {
                                        webinar ?
                                        <div>Rp.{webinar.data.data.price}</div>
                                        :
                                        <></>
                                    }
                                </div>
                                <div className={styles.itemInfo}>
                                    <FaIcons.FaUserAlt size={14}/> 
                                    <span> Kuota Event</span>
                                    {
                                        webinar ?
                                        <div>{webinar.data.data.max_participants} Orang</div>
                                        :
                                        <></>
                                    }
                                </div>
                                <div className={styles.itemInfo}>
                                    <FaIcons.FaUserAlt size={14}/> 
                                    <span> Pendaftar Event</span>
                                    {
                                        webinar ?
                                        <div>{webinar.data.data.participants} Orang</div>
                                        :
                                        <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default DetailEvent
