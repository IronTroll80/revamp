'use client'

import Image from 'next/image'
import styles from './header.module.css'
import { LuSearch, LuShoppingCart, LuChevronDown  } from 'react-icons/lu'
import { useState } from 'react'

export default function Header (){

    const navItems = ["Today's Deals", "Wines & Vintages","Craft & Classic Beers", "Premium Spirits",
                     "Artisan Ciders", "Champagnes", "Cognac & Fine Brandys", 
                     "Bundles", "Explore" ]

    const [navOpen, setNavOpen]= useState(false)
    return (
        <>

            <div className = {styles.header}>
                <div className= {styles.container}>
                    <div className= {styles.top}>
                        <div className = {styles.imageContainer}>
                            <Image src = {'/logo.png'} alt = 'logo' fill />
                        </div>
                        
                        <div className= {navOpen? styles.activebars : styles.bars} onClick={() => setNavOpen(!navOpen)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className= {styles.searchContainer}>
                            <input type="text" placeholder='Search for discounts and deals' className={styles.searchInput} />
                            <span className= {styles.searchIcon}><LuSearch /></span>
                        </div>
                    <div className= {styles.buttonContainer}>
                        <div className= {styles.link}>
                            <p>Your Returns</p>
                            <h3>& Orders</h3>
                        </div>
                        <div className= {styles.link}>
                            <p>Nice to meet you!</p>
                            <h3>Login/Create an account</h3>
                        </div>
                        <div className = {styles.cart}>
                            <span><LuShoppingCart /></span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={styles.desktopNav}>
                <ul className={styles.desktopNavList}>
                    {navItems.map((item, index) => (
                        <li key={index} className={styles.navItem}>{item} <LuChevronDown /> </li>
                    ))}
                </ul>
            </div>
                {navOpen && 
                    <div className={styles.mobileNav}>
                            <ul className={styles.navList}>
                                {navItems.map((item, index) => (
                                    <li key={index} className={styles.navItem}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    }
        </>
    )
}