import React from 'react';
import styles from '../assets/css/Webinar.module.css';

const Webinar = ({title, type, price, participants, start_at, end_at}) => {
    // console.log(title)
    return (
        <div className={styles.itemWebinar}>
            {/* {console.log(title)} */}
            <div className={styles.content}>
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

export default Webinar
