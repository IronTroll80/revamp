import styles from './topSelling.module.css'
import SectionTitle from "./sectionTitle";
import ProductCard from './productCard'
import { PRODUCTS } from '../lib/data';


export default function Topselling() {
    return (
        <>

        <div className = {styles.container}>
            <SectionTitle title="Top Selling products" description = "Hot and Selling" link = '/marketplace' />
            <div className = {styles.productContainer}>
                {PRODUCTS.map((product, index)=> (
                     <ProductCard key={product.id} {...PRODUCTS[index]}  />
                ))}
            </div>
           
        </div>

        </>
    )
}