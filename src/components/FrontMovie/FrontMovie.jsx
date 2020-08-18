import React from 'react';

import styles from './FrontMovie.module.css';

const FrontMovie = () => {
    const truncatedString = (str, num) => {
        return str.length > num ? str.slice(0, num) + "..." : str;
    }
    return (
        <div className={styles.FrontMovie}>
            <h1>Money Hiest</h1>
            <div className={styles.buttons}>
                <button>Play</button>
                <button>My List</button>
            </div>
            <h3>{truncatedString('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo adipisci commodi expedita praesentium soluta dolorem odit eveniet laborum? In sed officia enim dicta facere deleniti, voluptatum quasi assumenda reprehenderit nihil?', 150)}</h3>
            
        </div>
    )
}

export default FrontMovie;