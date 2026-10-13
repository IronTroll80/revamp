import styles from './memberDeals.module.css'
import SectionTitle from "./sectionTitle";
import ProductCard from './productCard'
import { PRODUCTS } from '../lib/data';


export default function MemberDeals() {
    return (
        <>

        <div className = {styles.container}>
            <SectionTitle title="Our Member Deals" description = "Join the club today" link = '/marketplace' />
            <div className = {styles.productContainer}>
                {PRODUCTS.map((product, index)=> (
                     <ProductCard key={product.id} {...PRODUCTS[index]}  />
                ))}
            </div>
           
        </div>

        </>
    )
}