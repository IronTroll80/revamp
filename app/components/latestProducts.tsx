import { FaStar } from 'react-icons/fa';
import styles from './latestProducts.module.css'
import SectionTitle from './sectionTitle'
import Image from 'next/image';

const products = [
        {
            id: 1,
            image: '/weekDeal1.png',
            title: '60cl X 6 Jameson Triple Distilled Irish Whisky',
            price: '₦ 5,000.00',
            oldPrice: '₦ 6,000.00',
            stars: [<FaStar/>, <FaStar/>, <FaStar/>],
        },
        {
            id: 2,
            image: '/weekDeal2.png',
            title: '60cl X 6 Jameson Triple Distilled Irish Whisky',
            price: '₦ 5,000.00',
            oldPrice: '₦ 6,000.00',
            stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        },
        {
            id: 3,
            image: '/weekDeal3.png',
            title: '60cl X 6 Jameson Triple Distilled Irish Whisky',
            price: '₦ 5,000.00',
            oldPrice: '₦ 6,000.00',
            stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        },
        {
            id: 4,
            image: '/weekDeal4.png',
            title: '60cl X 6 Jameson Triple Distilled Irish Whisky',
            price: '₦ 5,000.00',
            oldPrice: '₦ 6,000.00',
            stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
        }
    ];

export default function LatestProducts() {
    return (
        <>
        
        <div className= {styles.container}>
            <SectionTitle title="New In the Marketplace" description = "Latest to Hit the Market" link = '/products' />
            <div className={styles.latestProductGrid}>
                {products.map(product => (
                    <div key={product.id} className={styles.product}>
                        <div className={styles.imageContainer}>
                            <Image src = {product.image} alt={product.title} fill/>
                        </div>
                        <p className={styles.productTitle}>{product.title}</p>
                        <div className={styles.productInfo}>
                        <p className={styles.price}>{product.price}</p>
                        <p className={styles.oldPrice}>{product.oldPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </>
    )
}