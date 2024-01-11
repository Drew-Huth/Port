import React from "react";
import styles from '../../page.module.css'
import { LINKS } from "../Content/links";
import { ICONS } from "../Content/icons";
// import bob from ''

const NavBar = () => {
    return(
        <header className={styles.head}>
            <div>
                <a href="#home" className={styles.logo}>{ICONS.LETTERD}</a>
            </div>
            <nav className={styles.nav}>
                <a className={styles.active} href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </nav>
        </header> 
    )
}

export default NavBar;