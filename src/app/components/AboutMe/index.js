import React from "react";
import styles from '../../page.module.css'
import { TEXTBLOCK } from "../Content/textBlocks";

const AboutMe = () => {
    return(   
        <div className={styles.about} id='about'>    
            <div className={styles.padding}>
            </div>
            <div className={styles.aboutContent}>
                <h2 className="h2Shadow">
                    About Me
                </h2>
                <div className={styles.cards}>
                    {TEXTBLOCK.cardtest}
                    {TEXTBLOCK.cardtest}
                    {TEXTBLOCK.cardtest}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;