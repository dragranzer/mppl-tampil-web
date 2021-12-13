import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from '../assets/css/Webinar.module.css';
import {useHistory} from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Webinar = ({id,title, type, price, participants, start_at, end_at, category_id, status, image}) => {
    // console.log(title)
    let history = useHistory();
    const [kategori, setKategori] = useState([]);
    const URL = "http://47.254.198.205/api/categories?filter[id]="+category_id;
    useEffect(() =>  {
        const getData = async () => {
            const res = await Axios.get(URL)
            setKategori(res)
        }
        getData();
    },[]);
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
                    End At : {end_at}
                </div> */}
            </div>
            <div className={styles.startPart}>
                <div>
                    <FaIcons.FaCalendarAlt size={14}/> {start_at}
                </div>
                <div>
                    <FaIcons.FaUserAlt size={14}/> {participants} Pendaftar
                </div>
            </div>
            
        </div>
    )
}

export default Webinar
