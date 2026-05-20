
import Link from 'next/link'
import styles from './toast.module.css'
import { useEffect, useState } from 'react'

interface ToastProps {
    text: string
    color?: string
    isOpen: boolean
    duration?: number
    onClose?: () => void
    button?: boolean
    buttonContent?: string
    buttonLink?:string
}

export default function Toast({
    text,
    color = '#333',
    isOpen,
    duration = 3000,
    button,
    buttonContent,
    buttonLink,
    onClose
}: ToastProps) {

    const [show, setShow] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setShow(true)

            const timer = setTimeout(() => {
                setShow(false)
                setTimeout(() => {
                    onClose?.()
                }, 300)
            }, duration)

            return () => clearTimeout(timer)
        }
    }, [isOpen])

    if (!isOpen && !show) return null

    return (
        <div
            className={`${styles.toast} ${show ? styles.show : styles.hide}`}
            style={{ backgroundColor: color }}
        >
            {text}
            {button && <div className = {styles.button}>{buttonLink && <Link href={buttonLink}>{buttonContent}</Link>}</div>}
        </div>
    )
}