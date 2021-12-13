import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from '../assets/css/Webinar.module.css';
import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const WebinarSaya = ({id,title, type, price, participants, start_at, end_at, category_id, status}) => {
    let history = useHistory();
    const [kategori, setKategori] = useState([]);
    const [image, setImage] = useState();
    const token = useSelector((state) => state.token.token)
    const URL = "http://47.254.198.205/api/categories?filter[id]="+category_id;
    useEffect(() =>  {
        const getData = async () => {
            const res = await Axios.get(URL)
            setKategori(res)
        }
        getData();
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
    const URLDaftar = "http://47.254.198.205/api/user_webinars/"+id
    const bataldaftar = () => {
        // console.log(token)
        Axios.delete(URLDaftar,
            {   
                headers: {"Authorization" : `Bearer ${token}`},
            })
        .then(res => {
          console.log(res);
          console.log(res.data);
          history.push("/eventsaya")
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
    const handleProceed = (e) => {
        history.push(`/events/${id}`);
    };
    return (
        <div className={styles.itemWebinar} onClick={handleProceed}>
        {/* {console.log(title)} */}
        <div className={styles.content} >
    
            <img src={image} alt="" />
            <div className={styles.title}>
                {title}
            </div>
            <div>
                Type : {type}
            </div>
            <div>
                Price : {price}
            </div>
            <div>
                Kategori : {
                    kategori.data ?
                    // console.log(kategori.data.data[0].name)
                    kategori.data.data[0].name
                    :
                    ""
                    // console.log("gane,u")
                    // kategori.data.data[0].name
                }
            </div>
            {/* <div>
                Participants : {participants}
            </div>
            <div>
                Start At : {start_at}
            </div>
            <div>
                End At : {end_at}
            </div> */}
            
        </div>
        <div className={styles.batalkanDaftar} onClick={bataldaftar}>
            <p>Batalkan Daftar</p>
        </div>
    </div>
    )
}

export default WebinarSaya
