import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/ListWebinar.module.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { KategoriData } from "../components/KategoriData";
import { TipeData } from "../components/TipeData";
import Webinar from '../components/Webinar';

function ListWebinar() {
    const [filter, setFilter] = useState({
        kategori:"",
        tipe:""
    });
    const [kategoribar, setKategoribar] = useState(false);
    const [tipebar, setTipebar] = useState(false);
    const [data, setData] = useState([]);

    const URL = "http://47.254.198.205/api/webinars"
    useEffect(() =>  {
        const getData = async () => {
            const res = await Axios.get(URL)
            setData(res)
            console.log(res)
            console.log(data)
        }
        getData();
        console.log(data)
    },[]);

    const changeKategori = (category) =>{
        setFilter({
            ...filter,
            kategori:category
        })
    }

    const changeType = (type) =>{
        setFilter({
            ...filter,
            tipe:type
        })
    }

    const showTipebar = () => {
        setTipebar(!tipebar)
    };
    const showKategoribar = () => {
        setKategoribar(!kategoribar)
    };
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                
                <div className={styles.header}>
                    <div className={styles.eventSayaBtnkanan}>
                        Event Saya
                    </div>
                    <div className={styles.title}>
                        <FaIcons.FaCalendarAlt size={60}/>
                        <p>Events</p>
                    </div>
                    <div className={styles.eventSayaBtn}>
                        Event Saya
                    </div>
                </div>

                <div className={styles.cariEvent}>
                    <div className={styles.itemFilter}>
                        <div>
                            <p>Kategori</p>
                            <div className={styles.dropdown} onClick={showKategoribar}>
                                {
                                    filter.kategori === "" ?
                                    <p>--Cari Kategori Event--</p>
                                    :
                                    <p>{filter.kategori}</p>
                                }
                                <AiIcons.AiOutlineDown size={20}/>
                            </div>
                            <div className={kategoribar ? styles.openBar : ""}>
                            {
                                kategoribar ?
                                KategoriData.map((item, index) => {
                                return(
                                    <div key={index} className={styles.navText} onClick={() => changeKategori(item.title)}>
                                        <div >
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                )})
                                :
                                <></>
                            }
                            </div>
                        </div>
                        <div>
                        <p>Tipe Event</p>
                            <div className={styles.dropdown} onClick={showTipebar}>
                                {
                                    filter.tipe === "" ?
                                    <p>--Cari Tipe Event--</p>
                                    :
                                    <p>{filter.tipe}</p>

                                }
                                
                                <AiIcons.AiOutlineDown size={20}/>
                            </div>
                            <div className={tipebar ? styles.openBar : ""}>
                            {
                                tipebar ?
                                TipeData.map((item, index) => {
                                return(
                                    <div key={index} className={styles.navText} onClick={() => changeType(item.title)}>
                                        <div >
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                )})
                                :
                                <></>
                            }
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.webinarBox}>
                    {
                        data.data ?
                        data.data.data.map((item, index) => (
                            <Webinar 
                                title = {item.title}
                                type={item.type}
                                price={item.price}
                                participants={item.participants}
                                start_at={item.start_at}
                                end_at={item.end_at}
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

export default ListWebinar
