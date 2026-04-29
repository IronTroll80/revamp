import styles from './memberDeals.module.css'
import SectionTitle from "./sectionTitle";
import ProductCard from './productCard'


export default function MemberDeals() {
    return (
        <>

        <div className = {styles.container}>
            <SectionTitle title="Our Member Deals" description = "Join the club today" link = '/products' />
            <div className = {styles.productContainer}>
                {Array.from({ length: 10 }, (_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
           
        </div>

        </>
    )
}