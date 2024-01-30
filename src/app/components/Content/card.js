
import React from "react";
import styles from '../../page.module.css'
import { TEXTBLOCK } from "./textBlocks";
import {ICONS} from '../Content/icons'
import { teal } from "@mui/material/colors";


// const Card = () => {
//     return(   
//         <div className={styles.cards}>    
//            <div className={styles.card}>
//             {TEXTBLOCK.ONELINE}
//            </div>
//            <div className={styles.card}>        
//            </div>
//            <div className={styles.card}>    
//            </div>
//         </div>
//     );
// };

var CARD_CONTENT = [{id:1, title:'Education', img:ICONS.EDUCATION},{id: 2, title:'Life',img:ICONS.LIFE},{id:3, title:'Hobbies',img:ICONS.HOBBIES}]

function Card(){
    var cards = CARD_CONTENT.map(function(tempCard){
        return <div key={tempCard.id} className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.cardFront}>
                    <h1> {tempCard.title} </h1>
                    {tempCard.img}
                </div>
            </div>
            
        </div>
    });
    return(
        <div className={styles.cards}>
            {cards}
        </div>
    );
}

export default Card;