import { LuHeadset, LuPackage, LuShoppingBag, LuTruck } from 'react-icons/lu'
import styles from './sellingPoints.module.css'

export default function SellingPoints() {

    const sellingPoints = [
        {
            icon: <LuTruck/>,
            title: "Free Shipping",
            description: "Free Shipping on orders above ₦ 500,000"
        },
        {
            icon: <LuHeadset/>,
            title: "24/7 Support",
            description: "Need clarity on anything, we are!"
        },
        {
            icon: <LuShoppingBag/>,
            title: '100% Secure Payment',
            description: 'Pay Securely using Card or Transfer!'
        },
        {
            icon: <LuPackage/>,
            title: 'Track Your Order',
            description: 'Track your orders & returns on your dashboard!'
        }

    ]

  return (
    <div className={styles.container}>
        {
            sellingPoints.map((point, index) => (
                <div className={styles.point} key={index}>
                    <div className={styles.icon}>
                        {point.icon}
                    </div>
                    <div className={styles.text}>
                        <p>{point.title}</p>
                        <h4>{point.description}</h4>
                    </div>
                </div>
            ))
        }
    </div>
  )
}