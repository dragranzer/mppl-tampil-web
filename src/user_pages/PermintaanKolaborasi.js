import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/PermintaanKolaborasi.module.css';
import { useDropzone } from "react-dropzone"

function PermintaanKolaborasi() {
    const [files, setFiles] = useState([])

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
    console.log(files)
    
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.container}>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drop image here</p>
                    </div>
                    <div>{images}</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PermintaanKolaborasi
