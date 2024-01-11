import React from "react";
import styles from '../../page.module.css'
import { TEXTBLOCK } from "../Content/textBlocks";


const ExperiencePage = () => {
    return(
        <section className= {styles.experience}id="experience">
            <div className={styles.padding}>
            </div>
            <div className={styles.experienceContent}>
                <h2>
                    Experience
                </h2>
                {TEXTBLOCK.LLOREM}
            </div> 
        </section>
    )
}

export default ExperiencePage;