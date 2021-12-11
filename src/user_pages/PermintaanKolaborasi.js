import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/PermintaanKolaborasi.module.css';
import { useDropzone } from "react-dropzone"

function PermintaanKolaborasi() {
    const [files, setFiles] = useState([])
    const [data, setData] = useState({
        judul: "",
        deskripsi: "",
        startDate: "",
        endDate:"",
        startTime:"",
        endTime:"",
        Harga:""
    })
    const onChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        })
        console.log(data)
    }
    const handleSubmit = (e) => {
        console.log(data)
    }

    const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
        setFiles(
        acceptedFiles.map((file) =>
            Object.assign(file, {
            preview: URL.createObjectURL(file),
            })
        )
        )
    },
    })

    const images = files.map((file) => (
        <div key={file.name}>
            {console.log(file.name)}
            <div>
                <img src={file.preview} style={{ width: "200px" }} alt="preview" />
            </div>
        </div>
    ))
    console.log(files.length)
    
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div>
                            Permintaan Kolaborasi
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.cap}>
                            Judul Webinar:
                        </div>
                        <input type="text" name="judul" value={data.judul} onChange={onChange}/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.cap}>
                            Deskripsi:
                        </div>
                        <textarea name="" id="" cols="" rows="" name="deskripsi" value={data.deskripsi} onChange={onChange}></textarea>
                    </div>
                    <div className={styles.content2}>
                        <div className={styles.item}>
                            <div className={styles.cap}>
                                Tanggal Mulai:
                            </div>
                            <input type="date" name="startDate" value={data.startDate} onChange={onChange}/>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.cap}>
                                Tanggal Selesai:
                            </div>
                            <input type="date" name="endDate" value={data.endDate} onChange={onChange}/>
                        </div>
                    </div>
                    <div className={styles.content2}>
                        <div className={styles.item}>
                            <div className={styles.cap}>
                                Waktu Mulai:
                            </div>
                            <input type="time" name="startTime" value={data.startTime} onChange={onChange}/>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.cap}>
                                Waktu Selesai:
                            </div>
                            <input type="time" name="endTime" value={data.endTime} onChange={onChange}/>
                        </div>
                    </div>
                    <div className={styles.content3}>
                        <div className={styles.cap}>
                            Harga:
                        </div>
                        <input type="number" placeholder="Rp. xxx" name="Harga" value={data.Harga} onChange={onChange}/>
                    </div>
                    <div {...getRootProps()} className={styles.uploadImg}>
                        <input {...getInputProps()} />
                        {
                            files.length ? 
                            <div>
                                <p>{files[0].path}</p>
                            </div>
                            :
                            <div>
                                <p>Drop image here</p>
                            </div>
                        }
                    </div>
                    <div className={styles.content4}>
                        <div className={styles.btn} onClick={handleSubmit}>
                            Kirim
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PermintaanKolaborasi
