import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/ListWebinar.module.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { KategoriData } from "../components/KategoriData";
import { TipeData } from "../components/TipeData";
import { StatusEventData } from "../components/StatusEventData";
import { PartnerEventData } from "../components/PartnerEventData";
import { UrutBerdasarkanData } from "../components/UrutBerdasarkanData";
import Webinar from '../components/Webinar';
import {useHistory} from "react-router-dom";

function ListWebinar() {
    let history = useHistory();
    const [filter, setFilter] = useState({
        kategori:"",
        tipe:"",
        status:"",
        partner:"",
        urut:""
    });
    const [kategoribar, setKategoribar] = useState(false);
    const [tipebar, setTipebar] = useState(false);
    const [statusbar, setStatusbar] = useState(false);
    const [partnerbar, setPartnerbar] = useState(false);
    const [urutbar, setUrutbar] = useState(false);
    const [data, setData] = useState([]);

    const URL = "http://47.254.198.205/api/webinars?sort=-id&append=status,extra_small_image"
    useEffect(() =>  {
        if(filter.kategori === "" && filter.urut === "" && filter.partner === "" && filter.status === "" && filter.tipe === ""){
            const getData = async () => {
                const res = await Axios.get(URL)
                setData(res)
                console.log(res)
            }
            getData();
        }
        
    },[filter.kategori, filter.urut, filter.partner, filter.status, filter.tipe]);

    
    const URLTipe = "http://47.254.198.205/api/webinars?filter[type]="+filter.tipe+"&append=extra_small_image"
    useEffect(() =>  {
        const getData = async () => {
            const res = await Axios.get(URLTipe)
            setData(res)
            console.log(res)
        }
        getData();
    },[filter.tipe]);
    

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

    const changeStatus = (status) =>{
        setFilter({
            ...filter,
            status:status
        })
    }

    const changePartner = (partner) =>{
        setFilter({
            ...filter,
            partner:partner
        })
    }

    const changeUrut = (urut) =>{
        setFilter({
            ...filter,
            urut:urut
        })
    }

    const kosongkan = () =>{
        setFilter({
            kategori:"",
            tipe:"",
            status:"",
            partner:"",
            urut:""
        })
    }

    const showTipebar = () => {
        setTipebar(!tipebar)
    };
    const showKategoribar = () => {
        setKategoribar(!kategoribar)
    };
    const showStatusbar = () => {
        setStatusbar(!statusbar)
    };
    const showPartnerbar = () => {
        setPartnerbar(!partnerbar)
    };
    const showUrutbar = () => {
        setUrutbar(!urutbar)
    };
    const eventSayaRedirect = () => {
        history.push("/eventsaya")
    };
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                
                <div className={styles.header}>
                    <div className={styles.eventSayaBtnkanan} onClick={kosongkan}>
                        Kosongkan Filter
                    </div>
                    <div className={styles.title}>
                        <FaIcons.FaCalendarAlt size={60}/>
                        <p>Events</p>
                    </div>
                    <div className={styles.eventSayaBtn} onClick={eventSayaRedirect}>
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
                        <div>
                            <p>Status Event</p>
                            <div className={styles.dropdown} onClick={showStatusbar}>
                                {
                                    filter.status === "" ?
                                    <p>--Cari status Event--</p>
                                    :
                                    <p>{filter.status}</p>

                                }
                                
                                <AiIcons.AiOutlineDown size={20}/>
                            </div>
                            <div className={statusbar ? styles.openBar : ""}>
                            {
                                statusbar ?
                                StatusEventData.map((item, index) => {
                                return(
                                    <div key={index} className={styles.navText} onClick={() => changeStatus(item.title)}>
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
                            <p>Partner Event</p>
                            <div className={styles.dropdown} onClick={showPartnerbar}>
                                {
                                    filter.partner === "" ?
                                    <p>--Cari partner Event--</p>
                                    :
                                    <p>{filter.partner}</p>

                                }
                                
                                <AiIcons.AiOutlineDown size={20}/>
                            </div>
                            <div className={partnerbar ? styles.openBar : ""}>
                            {
                                partnerbar ?
                                PartnerEventData.map((item, index) => {
                                return(
                                    <div key={index} className={styles.navText} onClick={() => changePartner(item.title)}>
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
                    <div className={styles.urutBerdasarkan}>
                        <p>Urut Event</p>
                        <div className={styles.dropdown} onClick={showUrutbar}>
                            {
                                filter.urut === "" ?
                                <p>--Cari urut Event--</p>
                                :
                                <p>{filter.urut}</p>

                            }
                            
                            <AiIcons.AiOutlineDown size={20}/>
                        </div>
                        <div className={urutbar ? styles.openBar : ""}>
                        {
                            urutbar ?
                            UrutBerdasarkanData.map((item, index) => {
                            return(
                                <div key={index} className={styles.navText} onClick={() => changeUrut(item.title)}>
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
                <div className={styles.webinarBox}>
                    {
                        data.data ?
                        data.data.data.map((item, index) => (
                            <Webinar 
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

export default ListWebinar
