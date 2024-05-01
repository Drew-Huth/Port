import React from "react";
import styles from "./styles.module.css"
import { TEXTBLOCK } from "../Content/textBlocks";


const ContactMe = () => {
    return(
        <section className= {styles.contact}id="contact">
        <div className={styles.padding}>
        </div>
        <div className={styles.contactContent}>
            <h2 className="h2Shadow">
                Contact
            </h2>
            {TEXTBLOCK.LLOREM}
        </div> 
    </section>
    )
}

export default ContactMe;