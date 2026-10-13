'use client'

import Image from 'next/image'
import styles from './header.module.css'
import { LuSearch, LuShoppingCart, LuChevronDown } from 'react-icons/lu'
import { useState } from 'react'
import Link from 'next/link'

const navItems = [
    { name: "Today's Deals",       sub: ["Flash Sales", "Weekend Specials", "Clearance", "Limited Offers"] },
    { name: "Wines & Vintages",    sub: ["Red Wines", "White Wines", "Rosé", "Sparkling", "Dessert Wines", "Organic & Natural"] },
    { name: "Craft & Classic Beers", sub: ["Lagers", "Ales", "Stouts & Porters", "IPAs", "Wheat Beers", "Imported Beers"] },
    { name: "Premium Spirits",     sub: ["Whiskey & Scotch", "Vodka", "Rum", "Gin", "Tequila & Mezcal", "Liqueurs"] },
    { name: "Artisan Ciders",      sub: ["Dry Ciders", "Fruit Ciders", "Traditional", "Low-Alcohol"] },
    { name: "Champagnes",          sub: ["Brut", "Blanc de Blancs", "Rosé Champagne", "Vintage", "Non-Vintage"] },
    { name: "Cognac & Fine Brandys", sub: ["VS", "VSOP", "XO", "Armagnac", "Calvados"] },
    { name: "Bundles",             sub: ["Gift Sets", "Party Packs", "Curated Cases", "Build Your Own"] },
    { name: "Explore",             sub: ["New Arrivals", "Best Sellers", "Editor's Picks", "Member Exclusives", "Blog & Pairing Guides"] },
]

const mobileNav = [
    { name: 'Your Returns and Orders', link: 'orders' },
    { name: 'Login / Create Account',  link: 'profile' },
    { name: 'Cart',                    link: 'cart' },
    { name: 'Memberships',             link: 'memberships' }
]

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <Link href={'/'}>
                            <div className={styles.imageContainer}>
                                <Image src={'/logo.png'} alt='logo' fill />
                            </div>
                        </Link>
                        <div
                            className={navOpen ? styles.activebars : styles.bars}
                            onClick={() => setNavOpen(!navOpen)}
                        >
                            <div></div><div></div><div></div>
                        </div>
                    </div>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder='Search for discounts and deals' className={styles.searchInput} />
                        <span className={styles.searchIcon}><LuSearch /></span>
                    </div>
                    <div className={styles.buttonContainer}>
                        <div className={styles.link}>
                            <Link href={'/orders'}><p>Your Returns</p><h3>& Orders</h3></Link>
                        </div>
                        <div className={styles.link}>
                            <Link href={'/login'}><p>Nice to meet you!</p><h3>Login/Create an account</h3></Link>
                        </div>
                        <div className={styles.cart}>
                            <Link href={'/cart'}><span><LuShoppingCart /></span></Link>
                        </div>
                    </div>
                </div>
            </div>

            <nav className={styles.desktopNav}>
                <div className={styles.desktopNavGroup}>
                    <ul className={styles.desktopNavList}>
                        {navItems.map((item, index) => (
                            <li key={index} className={styles.navItemWrapper}>
                                <Link href={'/marketplace'} className={styles.navItem}>
                                    {item.name} <LuChevronDown className={styles.chevron} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.megaPanel}>
                        <div className={styles.megaInner}>
                            {navItems.map((item, index) => (
                                <div key={index} className={styles.megaCol}>
                                    <p className={styles.megaColTitle}>{item.name}</p>
                                    <ul className={styles.megaColList}>
                                        {item.sub.map((s, i) => (
                                            <li key={i}>
                                                <Link href={'/marketplace'} className={styles.megaLink}>{s}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {navOpen && (
                <div className={styles.mobileNav}>
                    <ul className={styles.navList}>
                        {mobileNav.map((item, index) => (
                            <Link href={item.link} key={index}>
                                <li className={styles.mobileNavItem}>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                    <div className={styles.mobileDivider} />
                    <ul className={styles.mobileNavCategories}>
                        {navItems.map((item, index) => (
                            <li key={index} className={styles.mobileCategory}>
                                <button
                                    className={styles.mobileCategoryBtn}
                                    onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                                >
                                    {item.name}
                                    <LuChevronDown className={openDropdown === index ? styles.chevronOpen : styles.chevron} />
                                </button>
                                {openDropdown === index && (
                                    <ul className={styles.mobileSubList}>
                                        {item.sub.map((s, i) => (
                                            <li key={i}>
                                                <Link href={'/marketplace'} className={styles.mobileSubLink}>{s}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}