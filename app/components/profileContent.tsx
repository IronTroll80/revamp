'use client'

import Link from 'next/link';
import styles from './profileContent.module.css'
import {
    LuUser, LuShoppingBag, LuMapPin,
    LuTag, LuLogOut, LuChevronRight,
    LuMessageCircleQuestion,
} from 'react-icons/lu'
import { useState } from 'react';

const navItems = [
    {
        icon: LuUser,
        label: 'Profile',
        key: 'profile',
        address: '/me',
    },
    {
        icon: LuShoppingBag,
        label: 'Order History',
        key: 'orders',
        address: '/orders',
    },
    {
        icon: LuMapPin,
        label: 'Saved Addresses',
        key: 'addresses',
        address: '/address',
    },
    {
        icon: LuTag,
        label: 'Promotions',
        key: 'promotions',
        address: '/promotions',
        badge: '3',
    },
    {
        icon: LuMessageCircleQuestion,
        label: 'Help and Support',
        key: 'help',
        address: '/contact-us',
        badge: '3',
    },
    {
        icon: LuTag,
        label: 'Membership',
        key: 'premium',
        address: '/membership',
        badge: '3',
    },
]

export default function ProfileContent() {

    const [showQuestion, setShowQuestion] = useState (false)

    return (
        <div className={styles.sidebar}>
            <div className={styles.profileBlock}>
                <div className={styles.avatar}>AJ</div>
                <div className={styles.profileInfo}>
                    <span className={styles.profileName}>Adewale Johnson</span>
                    <span className={styles.profileEmail}>adewale@email.com</span>
                </div>
            </div>

            <div className={styles.divider} />

            <div className= {styles.nav}>
                    {navItems.map((item) => (
                    <Link
                        key={item.key}
                        href={item.address}
                        className={styles.navItem}
                    >
                        <item.icon size={17} className={styles.navIcon} />

                        <span className={styles.navLabel}>
                            {item.label}
                        </span>

                        {item.badge && (
                            <span className={styles.badge}>
                                {item.badge}
                            </span>
                        )}

                        <LuChevronRight
                            size={14}
                            className={styles.navIcon}
                        />
                    </Link>
                ))}
            </div>

            <div className={styles.divider} />

            <button className={`${styles.navItem} ${styles.logoutItem}`}>
                <LuLogOut size={17} className={styles.navIcon} />
                <span className={styles.navLabel} onClick={()=>{setShowQuestion(true)}}>Log Out</span>
            </button>
            {showQuestion && <div className= {styles.logOutModal}>
                <div className= {styles.box}>
                    <h2>Log out?</h2>
                    <p>Are you Sure you want to Log out of your Quicklie Distributions Account?</p>
                    <button className= {styles.main} onClick={()=>{setShowQuestion(false)}}>Yes, I’m Sure</button>
                    <button className= {styles.secondary} onClick={()=>{setShowQuestion(false)}}>No, Cancel</button>
                </div>
            </div>
            }
        </div>
        
    )
}