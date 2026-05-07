'use client'

import Image from 'next/image'
import styles from './header.module.css'
import { LuSearch, LuShoppingCart, LuChevronDown  } from 'react-icons/lu'
import { useState } from 'react'
import Link from 'next/link'

export default function Header (){

    const navItems = ["Today's Deals", "Wines & Vintages","Craft & Classic Beers", "Premium Spirits",
                     "Artisan Ciders", "Champagnes", "Cognac & Fine Brandys", 
                     "Bundles", "Explore" ]

    const mobileNav = ['Your Returns and Orders', 'Login / Create Account', 'Cart']

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
                            <Link href={'/orders'}> 
                                <p>Your Returns</p>
                                <h3>& Orders</h3>
                            </Link>
                        </div>
                        <div className= {styles.link}>
                            <Link href={'/login'}> 
                            <p>Nice to meet you!</p>
                            <h3>Login/Create an account</h3>
                            </Link>
                        </div>
                        <div className = {styles.cart}>
                            <Link href={'/cart'}> 
                            <span><LuShoppingCart /></span>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={styles.desktopNav}>
                <ul className={styles.desktopNavList}>
                    {navItems.map((item, index) => (
                        <Link href={'/marketplace'}>
                            <li key={index} className={styles.navItem}>{item} <LuChevronDown /> </li>
                        </Link>
                    ))}
                </ul>
            </div>
                {navOpen && 
                    <div className={styles.mobileNav}>
                            <ul className={styles.navList}>
                                {mobileNav.map((item, index) => (
                                    <Link href={'/marketplace'}>
                                        <li key={index} className={styles.navItem}>{item}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    }
        </>
    )
}