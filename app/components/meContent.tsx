'use client'

import { useState } from 'react'
import styles from './meContent.module.css'

export default function Me() {
    const [fullName, setFullName] = useState('Adewale Johnson')
    const [email] = useState('adewale@email.com')
    const [phone, setPhone] = useState('0802 345 6789')

    const initials = fullName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()

    const handleSave = () => {
        // hook up to your API
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Profile</h3>
                <p className={styles.subtitle}>Update your personal information</p>
            </div>

            <div className={styles.content}>
                <div className={styles.avatarSection}>
                    <div className={styles.avatar}>{initials}</div>
                    <p className={styles.avatarName}>{fullName}</p>
                    <p className={styles.avatarEmail}>{email}</p>
                </div>

                <div className={styles.divider} />

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

                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label htmlFor='email'>Email</label>
                            <input
                                id='email'
                                type='email'
                                value={email}
                                disabled
                            />
                            <span className={styles.hint}>Email cannot be changed</span>
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
                    </div>

                    <div className={styles.formFooter}>
                        <button className={styles.saveBtn} onClick={handleSave}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}