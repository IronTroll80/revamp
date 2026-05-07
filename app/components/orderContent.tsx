'use client'

import { useState } from 'react'
import { LuPackage, LuChevronRight, LuMapPin, LuPhone } from 'react-icons/lu'
import styles from './orderContent.module.css'

const orders = [
    {
        id: 'ORD-00421',
        date: 'May 2, 2025',
        status: 'Delivered',
        amount: '₦12,500',
        items: [
            { name: 'Indomie Noodles x12', qty: 2, price: '₦4,800' },
            { name: 'Milo 500g', qty: 1, price: '₦3,200' },
            { name: 'Peak Milk Tin', qty: 3, price: '₦4,500' },
        ],
        delivery: {
            address: '14 Adeniyi Jones, Ikeja',
            phone: '0802 345 6789',
            method: 'Home Delivery',
            estimatedDate: 'May 4, 2025',
        },
        payment: {
            method: 'Card',
            ref: 'PAY-8821X',
        },
        timeline: [
            { status: 'Order Placed', date: 'May 2, 2025 · 10:14am', done: true },
            { status: 'Confirmed', date: 'May 2, 2025 · 10:30am', done: true },
            { status: 'Out for Delivery', date: 'May 3, 2025 · 08:00am', done: true },
            { status: 'Delivered', date: 'May 3, 2025 · 01:22pm', done: true },
        ],
    },
    {
        id: 'ORD-00398',
        date: 'Apr 18, 2025',
        status: 'Cancelled',
        amount: '₦7,200',
        items: [
            { name: 'Dangote Sugar 1kg', qty: 4, price: '₦3,600' },
            { name: 'Golden Penny Pasta', qty: 2, price: '₦3,600' },
        ],
        delivery: {
            address: '6 Esugbayi St, Ikeja GRA',
            phone: '0802 345 6789',
            method: 'Home Delivery',
            estimatedDate: 'Apr 20, 2025',
        },
        payment: {
            method: 'Transfer',
            ref: 'PAY-7745K',
        },
        timeline: [
            { status: 'Order Placed', date: 'Apr 18, 2025 · 3:55pm', done: true },
            { status: 'Confirmed', date: 'Apr 18, 2025 · 4:10pm', done: true },
            { status: 'Cancelled', date: 'Apr 19, 2025 · 9:00am', done: true },
        ],
    },
    {
        id: 'ORD-00441',
        date: 'May 5, 2025',
        status: 'Processing',
        amount: '₦19,750',
        items: [
            { name: 'Sunflower Oil 5L', qty: 1, price: '₦9,500' },
            { name: 'Titus Sardine x6', qty: 2, price: '₦5,400' },
            { name: 'Maggi Chicken Cubes', qty: 5, price: '₦4,850' },
        ],
        delivery: {
            address: '22 Allen Ave, Ikeja',
            phone: '0902 000 1234',
            method: 'Home Delivery',
            estimatedDate: 'May 7, 2025',
        },
        payment: {
            method: 'Card',
            ref: 'PAY-9900Z',
        },
        timeline: [
            { status: 'Order Placed', date: 'May 5, 2025 · 11:40am', done: true },
            { status: 'Confirmed', date: 'May 5, 2025 · 11:55am', done: true },
            { status: 'Out for Delivery', date: '—', done: false },
            { status: 'Delivered', date: '—', done: false },
        ],
    },
    {
        id: 'ORD-00387',
        date: 'Apr 10, 2025',
        status: 'Delivered',
        amount: '₦5,100',
        items: [
            { name: 'Lipton Tea x25', qty: 1, price: '₦2,100' },
            { name: 'Nescafé Classic 100g', qty: 1, price: '₦3,000' },
        ],
        delivery: {
            address: '3 Mobolaji Bank-Anthony Way',
            phone: '0803 111 2222',
            method: 'Pickup',
            estimatedDate: 'Apr 11, 2025',
        },
        payment: {
            method: 'Cash on Delivery',
            ref: 'PAY-6612W',
        },
        timeline: [
            { status: 'Order Placed', date: 'Apr 10, 2025 · 9:00am', done: true },
            { status: 'Confirmed', date: 'Apr 10, 2025 · 9:15am', done: true },
            { status: 'Out for Delivery', date: 'Apr 11, 2025 · 7:30am', done: true },
            { status: 'Delivered', date: 'Apr 11, 2025 · 12:05pm', done: true },
        ],
    },
]

const filters = ['All', 'Delivered', 'Processing', 'Pending', 'Cancelled']

type Order = typeof orders[number]

function badgeClass(status: string) {
    if (status === 'Delivered') return styles.badgeDelivered
    if (status === 'Cancelled') return styles.badgeCancelled
    if (status === 'Processing') return styles.badgeProcessing
    return styles.badgePending
}

function OrderModal({ order, onClose }: { order: Order; onClose: () => void }) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalTop}>
                    <div>
                        <p className={styles.modalTitle}>Order Details</p>
                        <p className={styles.modalOrderId}>{order.id}</p>
                    </div>
                    <button className={styles.closeBtn} onClick={onClose}>✕</button>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionLabel}>Summary</p>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoKey}>Date</span>
                            <span className={styles.infoVal}>{order.date}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoKey}>Status</span>
                            <span className={`${styles.badge} ${badgeClass(order.status)}`}>{order.status}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoKey}>Payment</span>
                            <span className={styles.infoVal}>{order.payment.method}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoKey}>Ref</span>
                            <span className={styles.infoVal}>{order.payment.ref}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.section}>
                    <p className={styles.sectionLabel}>Delivery Info</p>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoKey}>Address</span>
                            <span className={styles.infoVal}>{order.delivery.address}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoKey}>Phone</span>
                            <span className={styles.infoVal}>{order.delivery.phone}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoKey}>Method</span>
                            <span className={styles.infoVal}>{order.delivery.method}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoKey}>Est. Date</span>
                            <span className={styles.infoVal}>{order.delivery.estimatedDate}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.section}>
                    <p className={styles.sectionLabel}>Items</p>
                    <div className={styles.itemsList}>
                        {order.items.map((item, i) => (
                            <div key={i} className={styles.lineItem}>
                                <div className={styles.lineItemName}>
                                    <span className={styles.lineItemQty}>x{item.qty}</span>
                                    <span>{item.name}</span>
                                </div>
                                <span className={styles.lineItemPrice}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.totalRow}>
                        <span className={styles.totalLabel}>Total</span>
                        <span className={styles.totalAmount}>{order.amount}</span>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.section}>
                    <p className={styles.sectionLabel}>Timeline</p>
                    <div className={styles.timeline}>
                        {order.timeline.map((step: { status: string; date: string; done: boolean }, i: number) => (
                            <div key={i} className={styles.timelineItem}>
                                <div className={styles.timelineDotWrap}>
                                    <div className={`${styles.timelineDot} ${step.done ? styles.timelineDotActive : ''}`} />
                                    {i < order.timeline.length - 1 && <div className={styles.timelineLine} />}
                                </div>
                                <div className={styles.timelineContent}>
                                    <p className={styles.timelineStatus}>{step.status}</p>
                                    <p className={styles.timelineDate}>{step.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className={styles.reorderBtn}>Reorder</button>
            </div>
        </div>
    )
}

export default function OrderHistory() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null)

    const filtered = activeFilter === 'All'
        ? orders
        : orders.filter(o => o.status === activeFilter)

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Order History</h3>
                <p className={styles.subtitle}>Tap any order to see the full details</p>
            </div>

            <div className={styles.filters}>
                {filters.map(f => (
                    <button
                        key={f}
                        className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ''}`}
                        onClick={() => setActiveFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className={styles.list}>
                {filtered.length === 0 && (
                    <p className={styles.empty}>No {activeFilter.toLowerCase()} orders yet</p>
                )}
                {filtered.map(order => (
                    <div key={order.id} className={styles.orderCard} onClick={() => setSelectedOrder(order)}>
                        <div className={styles.orderCardTop}>
                            <div className={styles.orderLeft}>
                                <p className={styles.orderId}>Order Number: <span>{order.id}</span></p>
                                <p className={styles.orderDate}>{order.date}</p>
                            </div>
                            <div className={styles.orderRight}>
                                <span className={styles.orderTotalLabel}>Total</span>
                                <span className={styles.orderAmount}>{order.amount}</span>
                            </div>
                        </div>
                        <span className={`${styles.badge} ${badgeClass(order.status)}`}>{order.status}</span>
                    </div>
                ))}
            </div>

            {selectedOrder && (
                <OrderModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
            )}
        </div>
    )
}