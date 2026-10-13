'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './productCard.module.css'
import Toast from './toast'

interface ProductProps {

    name: string,
    image: string,
    volume: string,
    price: number,
    oldPrice?: number,

}

export default function ProductCard({name, image, volume, price, oldPrice}:ProductProps) {
    const [quantity, setQuantity] = useState(0)
    const [showToast, setShowToast] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src= {image} alt={name} fill />
            </div>

            <div className={styles.text}>
                <div className={styles.top}>
                    <p className={styles.productName}>{name}</p>
                    <p className={styles.volume}>{volume}</p>
                </div>

                <p className={styles.price}>{price.toLocaleString()}</p>
                <p className={styles.oldPrice}>{oldPrice? oldPrice?.toLocaleString(): ' '}</p>
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
                color="#1c1c1c"
                isOpen={showToast}
                duration={2500}
                button = {true}
                buttonContent='Go to Cart'
                buttonLink='/cart'
                onClose={() => setShowToast(false)}
            />
            }
        </div>
        
    )
}