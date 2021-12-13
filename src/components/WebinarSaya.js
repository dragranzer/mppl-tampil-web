import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from '../assets/css/Webinar.module.css';
import {useHistory} from "react-router-dom";

const WebinarSaya = ({id,title, type, price, participants, start_at, end_at, category_id, status}) => {
    let history = useHistory();
    const [kategori, setKategori] = useState([]);
    const [image, setImage] = useState();
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
    return (
        <div className={styles.itemWebinar}>
        {/* {console.log(title)} */}
        <div className={styles.content} >
    
            <img src={image} alt="" />
            <div>
                Title : {title}
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
            <div>
                Participants : {participants}
            </div>
            <div>
                Start At : {start_at}
            </div>
            <div>
                End At : {end_at}
            </div>
        </div>
    </div>
    )
}

export default WebinarSaya
