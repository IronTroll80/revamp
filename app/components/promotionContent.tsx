'use client'

import { useState, ChangeEvent, KeyboardEvent } from 'react'
import styles from './promotionContent.module.css'
import { LuTicket } from 'react-icons/lu'

interface Feedback {
    type: 'success' | 'error'
    msg: string
}

interface Promotion {
    id: number
    title: string
    desc: string
    code: string
    expiry: string
    expiringSoon: boolean
    used: boolean
    icon: any
    bg: string
}

const promotions: Promotion[] = [
    {
        id: 1,
        title: '10% off your next order',
        desc: 'Get 10% off any order above ₦5,000. Valid on all product categories.',
        code: 'SAVE10',
        expiry: 'May 15, 2025',
        expiringSoon: true,
        used: false,
        icon: <LuTicket />,
        bg: 'promoBgRed',
    },
    {
        id: 2,
        title: 'Free delivery',
        desc: 'Enjoy free delivery on your next 3 orders. No minimum spend required.',
        code: 'FREEDEL',
        expiry: 'Jun 1, 2025',
        expiringSoon: false,
        used: false,
        icon: <LuTicket />,
        bg: 'promoBgGreen',
    },
    {
        id: 3,
        title: '₦2,000 cashback',
        desc: 'Spend ₦15,000 or more and get ₦2,000 credited back to your wallet.',
        code: 'CASH2K',
        expiry: 'May 31, 2025',
        expiringSoon: false,
        used: false,
        icon: <LuTicket />,
        bg: 'promoBgBlue',
    },
    {
        id: 4,
        title: 'Welcome bonus — 15% off',
        desc: 'First-time shopper discount. Already applied to your account.',
        code: 'WELCOME15',
        expiry: 'Apr 30, 2025',
        expiringSoon: false,
        used: true,
        icon: <LuTicket />,
        bg: 'promoBgOrange',
    },
]

const validCodes: string[] = ['EXTRA5', 'LOYAL20', 'FLASH15']

export default function PromotionContent() {
    const [code, setCode] = useState('')
    const [feedback, setFeedback] = useState<Feedback | null>(null)

    const handleApply = () => {
        const trimmed = code.trim().toUpperCase()
        if (!trimmed) return

        if (validCodes.includes(trimmed)) {
            setFeedback({ type: 'success', msg: `Code "${trimmed}" applied successfully!` })
        } else {
            setFeedback({ type: 'error', msg: 'Invalid or expired code. Please try again.' })
        }
    }

    const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value)
        if (feedback) setFeedback(null)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleApply()
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Promotions</h3>
                <p className={styles.subtitle}>Your available deals and discount codes</p>
            </div>

            <div className={styles.redeemSection}>
                <p className={styles.sectionLabel}>Redeem a Code</p>
                <div className={styles.redeemRow}>
                    <input
                        className={styles.codeInput}
                        type='text'
                        placeholder='Enter promo code'
                        value={code}
                        onChange={handleCodeChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button className={styles.applyBtn} onClick={handleApply}>Apply</button>
                </div>
                {feedback && (
                    <p className={`${styles.feedbackMsg} ${feedback.type === 'success' ? styles.feedbackSuccess : styles.feedbackError}`}>
                        {feedback.msg}
                    </p>
                )}
            </div>

            <div className={styles.divider} />

            <p className={styles.sectionLabel} style={{ marginBottom: '0.75rem' }}>Your Promotions</p>

            <div className={styles.list}>
                {promotions.map((promo) => (
                    <div
                        key={promo.id}
                        className={`${styles.promoCard} ${promo.used ? styles.promoCardUsed : ''}`}
                    >
                        <div className={`${styles.promoIconBox} ${styles[promo.bg as keyof typeof styles]}`}>
                            {promo.icon}
                        </div>
                        <div className={styles.promoInfo}>
                            <p className={styles.promoTitle}>{promo.title}</p>
                            <p className={styles.promoDesc}>{promo.desc}</p>
                            <div className={styles.promoMeta}>
                                <span className={styles.promoCode}>{promo.code}</span>
                                <span className={`${styles.promoExpiry} ${promo.expiringSoon ? styles.promoExpiringSoon : ''}`}>
                                    Expires {promo.expiry}
                                    {promo.expiringSoon && ' · Expiring soon'}
                                </span>
                            </div>
                        </div>
                        {promo.used && <span className={styles.usedTag}>Used</span>}
                    </div>
                ))}
            </div>
        </div>
    )
}