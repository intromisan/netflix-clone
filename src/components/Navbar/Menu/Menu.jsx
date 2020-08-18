import React from 'react';

import styles from './Menu.module.css';

const Menu = () => {
    return (
        <React.Fragment>
            <ul className={styles.Menu}>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Recently Added</li>
                <li>My List</li>
            </ul>
        </React.Fragment>
    )
}

export default Menu;