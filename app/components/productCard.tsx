'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './productCard.module.css'
import Toast from './toast'

export default function ProductCard() {
    const [quantity, setQuantity] = useState(0)
    const [showToast, setShowToast] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src='/martell.jpg' alt='product' fill />
            </div>

            <div className={styles.text}>
                <div className={styles.top}>
                    <p className={styles.productName}>Product Name</p>
                    <p className={styles.volume}>75cl</p>
                </div>

                <p className={styles.price}>N5,000.00</p>
                <p className={styles.oldPrice}>N5,790.00</p>
            </div>

            {quantity === 0 ? (
                <div
                    className={styles.button}
                    onClick={() => {setQuantity(1), setShowToast(true)}}
                >
                    Add To Cart
                </div>
            ) : (
                <div className={styles.quantityContainer}>
                    <button
                        className={styles.quantityButton}
                        onClick={() => setQuantity(quantity - 1)}
                    >
                        -
                    </button>

                    <p className={styles.quantity}>{quantity}</p>

                    <button
                        className={styles.quantityButton}
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                </div>
            )}

            {showToast && <Toast
                text="Added To Cart"
                color="#16a34a91"
                isOpen={showToast}
                duration={1500}
                onClose={() => setShowToast(false)}
            />
            }
        </div>
        
    )
}