import React from "react";
import styles from '../../page.module.css'
// import bob from ''

const NavBar = () => {
    return(
        // <div>
        //     <a href="#home" className={styles.logo}>DBH</a>
        //     <div>
        //         <a className={styles.active} href="#home">Home</a>
        //         <a href="#about">About</a>
        //         <a href="#experience">Experience</a>
        //         <a href="#contact">Contact</a>
        //     </div>
        // </div>

 <header className={styles.head}>
    <a href="#home" className={styles.logo}>DBH</a>
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