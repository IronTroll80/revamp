import styles from './productCard.module.css'

export default function ProductCard (){
    return (
        <>

        <div className = {styles.container}>
            <div className={styles.image}>

            </div>
            <div className = {styles.text}>
                <div className = {styles.top}>
                    <p className = {styles.productName}>Product Name</p>
                    <p className = {styles.volume}>75cl</p>
                </div>
                <p className = {styles.price}>N5,000.00</p>
                <p className = {styles.oldPrice}> N5,790.00 </p>
            </div>
            <div className = {styles.button}>
                Add To Cart
            </div>
        </div>

        </>
    )
}