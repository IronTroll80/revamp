'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import styles from './forgotPasswordContent.module.css'
import { FaCircleCheck } from 'react-icons/fa6'

type Step = 'email' | 'otp' | 'reset' | 'done'

function getStrength(pw: string): 'weak' | 'fair' | 'strong' | null {
    if (!pw) return null
    if (pw.length < 6) return 'weak'
    if (pw.length < 10 || !/[0-9]/.test(pw) || !/[^a-zA-Z0-9]/.test(pw)) return 'fair'
    return 'strong'
}

export default function ForgotPasswordContent() {
    const [step, setStep] = useState<Step>('email')
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [countdown, setCountdown] = useState(0)
    const otpRefs = useRef<(HTMLInputElement | null)[]>([])

    useEffect(() => {
        if (countdown <= 0) return
        const t = setTimeout(() => setCountdown((c) => c - 1), 1000)
        return () => clearTimeout(t)
    }, [countdown])

    const startCountdown = () => setCountdown(60)

    const handleEmailSubmit = () => {
        if (!email.trim()) return
        startCountdown()
        setStep('otp')
    }

    const handleOtpChange = (val: string, i: number) => {
        if (!/^\d*$/.test(val)) return
        const next = [...otp]
        next[i] = val.slice(-1)
        setOtp(next)
        if (val && i < 5) otpRefs.current[i + 1]?.focus()
    }

    const handleOtpKeyDown = (e: React.KeyboardEvent, i: number) => {
        if (e.key === 'Backspace' && !otp[i] && i > 0) {
            otpRefs.current[i - 1]?.focus()
        }
    }

    const handleOtpSubmit = () => {
        if (otp.join('').length < 6) return
        setStep('reset')
    }

    const handleResetSubmit = () => {
        if (!password || password !== confirm) return
        setStep('done')
    }

    const strength = getStrength(password)

    if (step === 'email') return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Forgot your <span>password?</span></h1>
            <p className={styles.subtitle}>Enter the email address linked to your account and we'll send you a code.</p>

            <div className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleEmailSubmit()}
                    />
                </div>
                <button className={styles.submitBtn} onClick={handleEmailSubmit}>Send Reset Code</button>
                <Link href='/login' className={`${styles.backLink} ${styles.marginTop}`} style={{ textAlign: 'center', display: 'block' }}>
                    Back to Login
                </Link>
            </div>
        </div>
    )

    if (step === 'otp') return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Check your <span>email</span></h1>
            <p className={styles.subtitle}>We sent a 6-digit code to <span>{email}</span>. Enter it below.</p>

            <div className={styles.form}>
                <div className={styles.otpRow}>
                    {otp.map((val, i) => (
                        <input
                            key={i}
                            ref={(el) => { otpRefs.current[i] = el }}
                            className={styles.otpInput}
                            type='text'
                            inputMode='numeric'
                            maxLength={1}
                            value={val}
                            onChange={(e) => handleOtpChange(e.target.value, i)}
                            onKeyDown={(e) => handleOtpKeyDown(e, i)}
                        />
                    ))}
                </div>

                <div className={styles.resendRow}>
                    <span>Didn't get it?</span>
                    <button
                        className={styles.resendBtn}
                        onClick={startCountdown}
                        disabled={countdown > 0}
                    >
                        {countdown > 0 ? `Resend in ${countdown}s` : 'Resend code'}
                    </button>
                </div>

                <button className={styles.submitBtn} onClick={handleOtpSubmit}>Verify Code</button>
                <button className={styles.backLink} onClick={() => setStep('email')}>Back</button>
            </div>
        </div>
    )

    if (step === 'reset') return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Set a new <span>password</span></h1>
            <p className={styles.subtitle}>Make it something you haven't used before.</p>

            <div className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor='password'>New Password</label>
                    <input
                        id='password'
                        type='password'
                        placeholder='New password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {strength && (
                        <div className={`${styles.strengthBar} ${
                            strength === 'weak' ? styles.strengthWeak :
                            strength === 'fair' ? styles.strengthFair :
                            styles.strengthStrong
                        }`} />
                    )}
                    <span className={styles.passwordHint}>
                        {strength === 'weak' && 'Too short'}
                        {strength === 'fair' && 'Add numbers and symbols to strengthen'}
                        {strength === 'strong' && 'Strong password ✓'}
                    </span>
                </div>

                <div className={`${styles.field} ${styles.marginTop}`}>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input
                        id='confirm'
                        type='password'
                        placeholder='Confirm password'
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    {confirm && password !== confirm && (
                        <span className={styles.passwordHint} style={{ color: '#e53935' }}>Passwords don't match</span>
                    )}
                </div>

                <button className={styles.submitBtn} onClick={handleResetSubmit}>Reset Password</button>
                <button className={styles.backLink} onClick={() => setStep('otp')}>Back</button>
            </div>
        </div>
    )

    return (
        <div className={styles.container}>
            <div className={styles.successIcon}><FaCircleCheck/></div>
            <h1 className={styles.pageTitle}>Password <span>reset!</span></h1>
            <p className={styles.subtitle}>You're all set. Log back in with your new password.</p>
            <div className={styles.form}>
                <Link href='/login' className={styles.submitBtn} style={{ textAlign: 'center', display: 'block', textDecoration: 'none', marginTop: '1.5rem' }}>
                    Back to Login
                </Link>
            </div>
        </div>
    )
}