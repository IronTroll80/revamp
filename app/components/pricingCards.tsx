'use client'

import { useState } from 'react'
import { LuCheck } from 'react-icons/lu'
import styles from './pricingCards.module.css'

const plans = [
    {
        id: 'free',
        badge: 'Free',
        price: '₦0',
        billing: 'Per user, billed monthly',
        features: [
            'Access to all products',
            'Access to all products',
            'Access to all products',
            'Access to all products',
            'Access to all products',
        ],
        btnLabel: 'Active',
        isActive: true,
    },
    {
        id: 'tier1',
        badge: 'Tier 1',
        price: '₦7,999',
        billing: 'Per user, billed monthly',
        features: [
            'Access to all products',
            'Access to all products',
            'Access to all products',
            'Access to all products',
            'Access to all products',
        ],
        btnLabel: 'Get Started with Tier 1',
        isActive: false,
    },
    {
        id: 'tier2',
        badge: 'Tier 2',
        price: '₦9,999',
        billing: 'Per user, billed monthly',
        features: [
            'Access to all products',
            'Access to all products',
            'Access to all products',
            'Access to all products',
            'Access to all products',
        ],
        btnLabel: 'Get Started with Tier 2',
        isActive: false,
    },
]

type Plan = {
    id: string;
    badge: string;
    price: string;
    billing: string;
    features: string[];
    btnLabel: string;
    isActive: boolean;
};

function PaymentModal({ plan, onClose }: { plan: Plan; onClose: () => void }) {
    const [cardNumber, setCardNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')
    const [name, setName] = useState('')

    const formatCard = (val: string): string =>
        val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()

    const formatExpiry = (val: string): string =>
        val.replace(/\D/g, '').slice(0, 4).replace(/^(\d{2})(\d)/, '$1/$2')

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <div>
                        <p className={styles.modalTitle}>Complete Payment</p>
                        <p className={styles.modalSubtitle}>{plan.badge} — {plan.billing}</p>
                    </div>
                    <button className={styles.closeBtn} onClick={onClose}>✕</button>
                </div>

                <div className={styles.divider} />

                <div className={styles.modalForm}>
                    <div className={styles.inputGroup}>
                        
                        <label>Cardholder Name</label>
                        <input
                            type='text'
                            placeholder='John Doe'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Card Number</label>
                        <input
                            type='text'
                            placeholder='0000 0000 0000 0000'
                            value={cardNumber}
                            onChange={(e) => setCardNumber(formatCard(e.target.value))}
                        />
                    </div>
                    <div className={styles.inputRow}>
                        <div className={styles.inputGroup}>
                            <label>Expiry</label>
                            <input
                                type='text'
                                placeholder='MM/YY'
                                value={expiry}
                                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>CVV</label>
                            <input
                                type='text'
                                placeholder='123'
                                maxLength={3}
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.summaryBox}>
                    <span className={styles.summaryLabel}>Total due today</span>
                    <span className={styles.summaryAmount}>{plan.price}</span>
                </div>

                <button className={styles.payBtn}>Pay {plan.price}</button>
            </div>
        </div>
    )
}

export default function PricingCards() {
    const [activePlan, setActivePlan] = useState<Plan | null>(null)

    return (
        <div className={styles.wrapper}>
            <h3 className= {styles.title}>Membership </h3>
            <p className= {styles.subtitle}>Sign up for memberships and get exclusive deals and discounts</p>
            <div className={styles.grid}>
                {plans.map((plan) => (
                    <div key={plan.id} className={styles.card}>
                        <span className={styles.badge}>{plan.badge}</span>

                        <div className={styles.priceBlock}>
                            <p className={styles.price}>{plan.price}</p>
                            <p className={styles.billing}>{plan.billing}</p>
                        </div>

                        <div className={styles.features}>
                            {plan.features.map((f, i) => (
                                <div key={i} className={styles.featureItem}>
                                    <LuCheck size={16} />
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            className={`${styles.btn} ${plan.isActive ? styles.btnActive : styles.btnPrimary}`}
                            onClick={() => !plan.isActive && setActivePlan(plan)}
                            disabled={plan.isActive}
                        >
                            {plan.btnLabel}
                        </button>
                    </div>
                ))}
            </div>

            {activePlan && (
                <PaymentModal plan={activePlan} onClose={() => setActivePlan(null)} />
            )}
        </div>
    )
}