'use client'

import { LuMapPin, LuPlus } from 'react-icons/lu'
import styles from './cartContent.module.css'
import AddLocation from './addLocation'
import SelectPayment from './selectPayment'
import PromotionCart from './promotionsCart'
import { useState } from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa6'
import Image from 'next/image'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartContent() {

      const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Hennessy VS", price: 58000, quantity: 1, image: "/4str.png" },
    { id: 2, name: "Jameson Irish Whiskey", price: 32000, quantity: 2, image: "/4str.png" },
    { id: 3, name: "Bacardi Rum", price: 21000, quantity: 1, image: "/4str.png" }
  ])

  const deliveryFee = 2000
  const serviceFee = 500

  const increaseQty = (id:number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? {...item, quantity: item.quantity + 1}
          : item
      )
    )
  }

  const decreaseQty = (id:number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item
      )
    )
  }

  const removeItem = (id:number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const total = subtotal + deliveryFee + serviceFee

  const formatPrice = (price:number) => {
    return `₦${price.toLocaleString()}`
  }


    return (
      <>
        <div className={styles.container}>
            <div className= {styles.left}>
                <div className={styles.cartItems}>

            <div className={styles.tableHeader}>
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            <div className={styles.cartScroll}>

              {cartItems.map(item => {

                const itemTotal = item.price * item.quantity

                return (
                  <div key={item.id} className={styles.cartItem}>

                    <div className={styles.product}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className={styles.image}
                        />
                      </div>

                      <div className={styles.productInfo}>
                        <p className={styles.productName}>{item.name}</p>

                        <button
                          className={styles.remove}
                          onClick={() => removeItem(item.id)}
                        >
                          <FaTrash/> Remove
                        </button>
                      </div>
                    </div>

                    <div className={styles.price}>
                      {formatPrice(item.price)}
                    </div>

                    <div className={styles.quantity}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => decreaseQty(item.id)}
                      >
                        <FaMinus/>
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className={styles.qtyBtn}
                        onClick={() => increaseQty(item.id)}
                      >
                        <FaPlus/>
                      </button>
                    </div>

                    <div className={styles.total}>
                      {formatPrice(itemTotal)}
                    </div>

                  </div>
                )

              })}

            </div>

            {/* CLEAR CART BUTTON */}

            {cartItems.length > 0 && (
              <button
                className={styles.clearCart}
                onClick={clearCart}
              >
                Clear Cart
              </button>
            )}

          </div>
            </div>
            <div className= {styles.right}>
                <AddLocation />
                <SelectPayment/>
                <PromotionCart />
                <div className={styles.summary}>
                    <div className={styles.summaryRow}>
                    <span>Subtotal</span>
                    <p>{formatPrice(subtotal)}</p>
                    </div>

                    <div className={styles.summaryRow}>
                    <span>Delivery</span>
                    <p>{formatPrice(deliveryFee)}</p>
                    </div>

                    <div className={styles.summaryRow}>
                    <span>Service Fee</span>
                    <p>{formatPrice(serviceFee)}</p>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.totalRow}>
                    <span>Total</span>
                    <p>{formatPrice(total)}</p>
                    </div>

                    <button className={styles.checkoutBtn}>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
        {/* <div className= {styles.status}>
            <div className= {styles.statusContent}>
              <h4>Your Order Has been Succesfully Placed. Thank you for shopping with <b>Quicklie Distributions</b></h4>
            </div>
        </div> */}
        </>
    )
}