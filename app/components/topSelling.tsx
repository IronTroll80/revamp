import styles from './topSelling.module.css'
import SectionTitle from "./sectionTitle";
import ProductCard from './productCard'


export default function Topselling() {
    return (
        <>

        <div className = {styles.container}>
            <SectionTitle title="Top Selling products" description = "Hot and Selling" link = '/products' />
            <div className = {styles.productContainer}>
                {Array.from({ length: 10 }, (_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
           
        </div>

        </>
    )
}