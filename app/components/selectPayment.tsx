'use client'

import {LuWallet } from 'react-icons/lu'
import styles from './selectPayment.module.css'
import { useState } from 'react'

export default function SelectPayment (){

        const [active, setActive] = useState('default')
    

    return(
        <>
        
        <div className= {styles.checkoutItem}>
                    <div className = {styles.checkoutItemDetails}>
                        <span><LuWallet/> Payment</span>
                        <p>Paystack</p>
                    </div>
                    <div className= {styles.checkoutItemButton} onClick={()=>{setActive('selectLocation')}}>
                        Change Method
                    </div>
                    {active === 'selectLocation' && 
                        <div className= {styles.itemModal}>
                            <div className= {styles.itemModalContent}>
                                <h3>Select Payment Method </h3>
                                <div className= {styles.payments}>
                                    <div className= {styles.paymentOption}>
                                        <div>
                                            <span><LuWallet/> Moniepoint</span>
                                        </div>
                                        <input type="radio" name="location" id="home" value="home"/>
                                    </div>
                                    <div className= {styles.paymentOption}>
                                        <div>
                                            <span><LuWallet/> Paystack</span>
                                        </div>
                                        <input type="radio" name="location" id="work" value="work"/>
                                    </div>
                                </div>
                                
                                <div className= {styles.modalActions}>
                                    <button className= {styles.cancelButton} onClick={()=>{setActive('default')}}>Cancel</button>
                                    <button className= {styles.confirmButton} onClick={()=>{setActive('default')}}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    }
            </div>
        
        </>
    )
}