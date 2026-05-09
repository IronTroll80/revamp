'use client'

import { useEffect, useState } from 'react'
import styles from './hero.module.css'

const slides = [
    {
        mobile: '/hero-mobile-1.png',
        desktop: '/hero-desktop-1.png',
    },
    {
        mobile: '/hero-mobile-2.png',
        desktop: '/hero-desktop-2.png',
    },
    {
        mobile: '/hero-mobile-3.png',
        desktop: '/hero-desktop-3.png',
    },
]

export default function Hero() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.container}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${
                        current === index ? styles.active : ''
                    }`}
                >
                    <img
                        src={slide.mobile}
                        alt='hero'
                        className={styles.mobileImage}
                    />

                    <img
                        src={slide.desktop}
                        alt='hero'
                        className={styles.desktopImage}
                    />
                </div>
            ))}

            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${
                            current === index ? styles.activeDot : ''
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}