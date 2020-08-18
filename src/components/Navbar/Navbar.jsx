import React from 'react';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <img
                className={styles.Logo}
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='Netflix Logo'
            />
            <img
                className={styles.Profile}
                src='https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg'
                alt='Profile'
            />
        </nav>
    )
}

export default Navbar;