'use client'

import { LuMapPin, LuPlus } from 'react-icons/lu';
import styles from './addLocation.module.css';
import { useState } from 'react';

interface Props {
    state: string;
}

export default function AddLocation({state}: Props) {

    const [active, setActive] = useState(state)

    return(
         <div className= {styles.checkoutItem}>
                    <div className = {styles.checkoutItemDetails}>
                        <span><LuMapPin/> Deliver to</span>
                        <p>75, Lamidi lane, Ikeja, Lagos.</p>
                    </div>
                    <div className= {styles.checkoutItemButton} onClick={()=>{setActive('selectLocation')}}>
                        Change Location
                    </div>
                    {active === 'selectLocation' && 
                        <div className= {styles.itemModal}>
                            <div className= {styles.itemModalContent}>
                                <h3>Select Location </h3>
                                <div className= {styles.locations}>
                                    <div className= {styles.locationOption}>
                                        <div>
                                            <span><LuMapPin/> Home</span>
                                            <p>75, Lamidi lane, Ikeja, Lagos.</p>
                                        </div>
                                        <input type="radio" name="location" id="home" value="home"/>
                                    </div>
                                    <div className= {styles.locationOption}>
                                        <div>
                                            <span><LuMapPin/> Work</span>
                                            <p>75, Lamidi lane, Ikeja, Lagos.</p>
                                        </div>
                                        <input type="radio" name="location" id="work" value="work"/>
                                    </div>
                                </div>
                                <button className= {styles.addLocationButton} onClick={()=>{setActive('addLocation')}}> <LuPlus/> Add New Location</button>
                                <div className= {styles.modalActions}>
                                    <button className= {styles.cancelButton} onClick={()=>{setActive('default')}}>Cancel</button>
                                    <button className= {styles.confirmButton} onClick={()=>{setActive('default')}}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    }
                    {active === 'addLocation' &&
                    <div className = {styles.addLocationModal}>
                        <div className= {styles.addLocationModalContent}>
                            <h3>Add New Location</h3>
                            <div  className= {styles.addLocationForm}>
                                <div className= {styles.map}>
                                    
                                </div>
                                <div className= {styles.address}>
                                    <input type = "text" placeholder='Enter Your Address' className= {styles.addressInput}/>
                                    <input type = "text" placeholder='Label For Address' className= {styles.addressLabel}/>
                                </div>
                                
                            </div>
                            <div className= {styles.modalActions}>
                                <button className= {styles.cancelButton} onClick={()=>{setActive('selectLocation')}}>Cancel</button>
                                <button className= {styles.confirmButton} onClick={()=>{setActive('default')}}>Save Location</button>
                            </div>
                        </div>
                    </div>
                }
                </div>
    )
}