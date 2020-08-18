import React, { useState, useEffect } from 'react';
import axios from '../../axios';

import styles from './Row.module.css';

const baseURL = 'http://image.tmdb.org/t/p/original/';

function Row(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);        
            setMovies(request.data.results);
        }
        fetchData();
    }, []);

    console.table(movies)

    return (
        <div className={styles.Row}>
            <h2 className={styles.title}>
                {props.title}
            </h2>
            <div className={styles.movies}>
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        src={`${baseURL}${movie.poster_path}`}
                        alt={movie.original_title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;