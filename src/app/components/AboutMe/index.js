import React from "react";
import styles from '../../page.module.css'
import Card from '../Content/card'


const AboutMe = () => {
    return(   
        <div className={styles.about} id='about'>    
            <div className={styles.padding}>
            </div>
            <div className={styles.aboutContent}>
                <h2 className="h2Shadow">
                    About Me
                </h2>
                <Card></Card>
            </div>
        </div>
    );
};

export default AboutMe;