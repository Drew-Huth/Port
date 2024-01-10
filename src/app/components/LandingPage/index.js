import React from "react";
import styles from '../../page.module.css'
import { LINKS } from "../Content/Links";


const LandingPage = () => {
    return(
        <section className={styles.home} id="home">
        <div className={styles.homeContent}>
            <h1 className={styles.hidden}>Hi, I am <a href="#home" className={styles.homeContentName}>Drew Huth</a></h1>
            <h3 className={styles.hidden}>Frontend Software Developer</h3>
            <p>Welcome to my portfolio website! Here, you&apos;ll find a curated collection of my best work, showcasing my expertise in web development and programming and my unwavering commitment to delivering outstanding results.</p>
            <div className={styles.buttons}>
                <div className={styles.buttonBox}>
                    <a href="#">Resume</a>
                    <a href="mailto: drewbhuth@gmail.com">Let&apos;s Chat</a>
                </div>       
                <div className={styles.homeLinks}>
                    <a href={LINKS.INSTA} target="_blank"><i className='bx bxl-instagram'></i></a>
                    <a href={LINKS.LINKEDIN} target="_blank" ><i className='bx bxl-linkedin' ></i></a>
                    <a href={LINKS.GITHUB} target="_blank"><i className='bx bxl-github' ></i></a>
                </div>
            </div>
        </div>
        <div className={styles.me}>
            {/* <a src="IMG_5795" alt=""></a>             */}
        </div>    
    </section>
    )
}

export default LandingPage;

