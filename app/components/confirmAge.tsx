'use client'

import { useState } from 'react'
import styles from './confirmAge.module.css'

export default function ConfirmAge (){

    const [showQuestion, setShowQuestion] = useState (true)

    return (
        <>
        {showQuestion &&
            <div className= {styles.container}>
                <div className= {styles.box}>
                    <h2>Age Confirmation</h2>
                    <p>Please confirm you are over the legal age of 18 to proceed to Quicklie distributions</p>
                    <button className= {styles.main} onClick={()=>{setShowQuestion(false)}}>Yes, I'm Above 18</button>
                    <button className= {styles.secondary}>No, I’m Below 18 [Exit]</button>
                </div>
            </div>
        }
        
        </>
    )
}