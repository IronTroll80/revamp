'use client'

import { useState } from 'react'
import { LuMapPin, LuPlus } from 'react-icons/lu'
import styles from './addressContent.module.css'

interface Address {
    id: number
    label: string
    address: string
    isDefault: boolean
}

const initialAddresses: Address[] = [
    { id: 1, label: 'Home', address: '14 Adeniyi Jones Ave, Ikeja, Lagos', isDefault: true },
    { id: 2, label: 'Office', address: '6 Esugbayi Street, Ikeja GRA, Lagos', isDefault: false },
    { id: 3, label: 'Mum', address: '22 Allen Avenue, Ikeja, Lagos', isDefault: false },
]

type Modal = 'default' | 'select' | 'add'

export default function SavedAddresses() {
    const [addresses, setAddresses] = useState<Address[]>(initialAddresses)
    const [modal, setModal] = useState<Modal>('default')
    const [newAddress, setNewAddress] = useState('')
    const [newLabel, setNewLabel] = useState('')

    const handleDelete = (id: number) => {
        setAddresses((prev) => prev.filter((a) => a.id !== id))
    }

    const handleSave = () => {
        if (!newAddress.trim()) return
        setAddresses((prev) => [
            ...prev,
            {
                id: Date.now(),
                label: newLabel.trim() || 'New Address',
                address: newAddress.trim(),
                isDefault: false,
            },
        ])
        setNewAddress('')
        setNewLabel('')
        setModal('default')
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Saved Addresses</h3>
                <p className={styles.subtitle}>Manage your delivery addresses</p>
            </div>

            <div className={styles.list}>
                {addresses.length === 0 && (
                    <p className={styles.empty}>No saved addresses yet</p>
                )}
                {addresses.map((addr) => (
                    <div key={addr.id} className={styles.addressCard}>
                        <div className={styles.addressDetails}>
                            <span>
                                <LuMapPin /> {addr.label}
                                {addr.isDefault && <span className={styles.defaultTag}>Default</span>}
                            </span>
                            <p>{addr.address}</p>
                        </div>
                        <button className={styles.deleteBtn} onClick={() => handleDelete(addr.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <button className={styles.addBtn} onClick={() => setModal('select')}>
                <LuPlus /> Add New Address
            </button>

            {modal === 'select' && (
                <div className={styles.itemModal}>
                    <div className={styles.itemModalContent}>
                        <h3>Select Address</h3>
                        <div>
                            {addresses.map((addr) => (
                                <div key={addr.id} className={styles.locationOption}>
                                    <div>
                                        <span><LuMapPin /> {addr.label}</span>
                                        <p>{addr.address}</p>
                                    </div>
                                    <input type='radio' name='address' value={addr.id} />
                                </div>
                            ))}
                        </div>
                        <button className={styles.addLocationButton} onClick={() => setModal('add')}>
                            <LuPlus /> Add New Address
                        </button>
                        <div className={styles.modalActions}>
                            <button className={styles.cancelButton} onClick={() => setModal('default')}>Cancel</button>
                            <button className={styles.confirmButton} onClick={() => setModal('default')}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}

            {modal === 'add' && (
                <div className={styles.addLocationModal}>
                    <div className={styles.addLocationModalContent}>
                        <h3>Add New Address</h3>
                        <div className={styles.addLocationForm}>
                            <div className={styles.map} />
                            <div className={styles.address}>
                                <input
                                    type='text'
                                    placeholder='Enter your address'
                                    value={newAddress}
                                    onChange={(e) => setNewAddress(e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Label (e.g. Home, Office)'
                                    value={newLabel}
                                    onChange={(e) => setNewLabel(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.modalActions}>
                            <button className={styles.cancelButton} onClick={() => setModal('select')}>Cancel</button>
                            <button className={styles.confirmButton} onClick={handleSave}>Save Address</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}