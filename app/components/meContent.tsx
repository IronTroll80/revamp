'use client'

import { useState } from 'react'
import styles from './meContent.module.css'

export default function Me() {
    const [fullName, setFullName] = useState('Adewale Johnson')
    const [email, setEmail] = useState('adewale@email.com')
    const [phone, setPhone] = useState('0802 345 6789')

    const handleSave = () => {
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Profile</h3>
                <p className={styles.subtitle}>Update your personal information</p>
            </div>

            <div className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor='fullName'>Full Name</label>
                    <input
                        id='fullName'
                        type='text'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        disabled
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor='phone'>Phone Number</label>
                    <input
                        id='phone'
                        type='tel'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <button className={styles.saveBtn} onClick={handleSave}>Save Changes</button>
            </div>
        </div>
    )
}