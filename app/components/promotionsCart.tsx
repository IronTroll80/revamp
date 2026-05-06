'use client'

import styles from './promotionsCart.module.css'
import {LuTicket } from 'react-icons/lu'
import { useState } from 'react'

export default function PromotionCart (){

    const [active, setActive] = useState(false)
    return(
        <>
        
        <div className= {styles.checkoutItem}>
                    <div className = {styles.checkoutItemDetails}  onClick={()=>{setActive(true)}}>
                        <span><LuTicket/> Promotions</span>
                        <div className= {styles.promoItems}>
                            <p>MEMBER DISCOUNT</p>
                            <p>5%</p>
                        </div>
                    </div>
                    {active && 
                        <div className= {styles.itemModal}>
                            <div className= {styles.itemModalContent}>
                                <h3>Select Promotions</h3>
                                <div className= {styles.promos}>
                                    <div className= {styles.promoOption}>
                                        <div>
                                            <span><LuTicket/> MEMBER DISOUNT (auto select)</span>
                                        </div>
                                        <input type="checkbox" name="location" id="home" value="home" checked/>
                                    </div>
                                    <div className= {styles.promoOption}>
                                        <div>
                                            <span><LuTicket/> 5% Off</span>
                                        </div>
                                        <input type="checkbox" name="location" id="work" value="work"/>
                                    </div>
                                </div>
                                
                                <div className= {styles.modalActions}>
                                    <button className= {styles.cancelButton} onClick={()=>{setActive(false)}}>Cancel</button>
                                    <button className= {styles.confirmButton} onClick={()=>{setActive(false)}}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    }
            </div>
        
        </>
    )
}