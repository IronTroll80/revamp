import { FaInfoCircle } from 'react-icons/fa'
import styles from './productContent.module.css'
import { LuInfo } from 'react-icons/lu'
import ProductCard from './productCard'
import SectionTitle from './sectionTitle'
import Link from 'next/link'

const blogs = [
    {
        tag: 'Culture',
        title: 'Whiskey vs Cognac: What Lagos Drinks', 
        description: `Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit`,
        meta: `Feb 18, 2026 • 6 min read`
    },
    {
        tag: 'Culture',
        title: 'Whiskey vs Cognac: What Lagos Drinks', 
        description: `Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit`,
        meta: `Feb 18, 2026 • 6 min read`
    },
    {
        tag: 'Culture',
        title: 'Whiskey vs Cognac: What Lagos Drinks', 
        description: `Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit`,
        meta: `Feb 18, 2026 • 6 min read`
    }
]

export default function ProductContent() {
    return (
        <>
            <div className={styles.container}>
                <p className = {styles.route}>Home/ Marketplace / Wines & Vintages / <span>4th street sweet red wine</span></p>
                <div className={styles.productDetails}>
                    <div className={styles.imageSection}>
                    </div>
                    <div className={styles.infoSection}>
                        <span className= {styles.category}>Wines</span>
                        <h1 className= {styles.name}>4th Street Sweet Red Wine</h1>
                        <p className={styles.price}>₦ 15,000</p>
                        <h4 className= {styles.descriptionTitle}>Description</h4>
                        <p className={styles.description}>A sweet red wine with a rich and fruity flavor profile, perfect for those who enjoy a sweeter taste. It pairs well with desserts and can be enjoyed on its own.</p>
                        <div className= {styles.sizeOptions}>
                            <h4>Size</h4>
                            <div className={styles.sizes}>
                                <button className={styles.sizeButton}>750ml</button>
                                <button className={styles.sizeButton}>1.5L</button>
                            </div>
                        </div>
                        <button className={styles.addToCartButton}>Add to Cart</button>
                        <span className= {styles.addInfo} title= 'See Delivery Info'>Additional Info <LuInfo/> </span>
                    </div>
                </div>
                <div className= {styles.similarProducts}>
                    <SectionTitle title="See Similar products" description = "Fan of" link = '/products'  bold = '4th Street Sweet Red Wine?'/>
                        <div className = {styles.productContainer}>
                            {Array.from({ length: 4 }, (_, i) => (
                            <ProductCard key={i} />
                            ))}
                        </div>
                </div>
                
            </div>
            <div className = {styles.productBlog}>
                    <div className= {styles.productBlogContainer}>
                        <div className= {styles.sectionTitle}>
                            <div>
                                <p>Learn more about your drinks.</p>
                                <h2>The Quicklie Blog</h2>
                                </div>
                                <span><Link href={'/blogs'}>See all →</Link></span>
                            </div>
                        <div className= {styles.blogSection}>
                            {
                                blogs.map((blog, index)=>(
                                    <div className= {styles.blog} key={index}>
                                        <div className= {styles.imageContainer}></div>
                                        <p className= {styles.tag}>{blog.tag}</p>
                                        <p className= {styles.title}>{blog.title}</p>
                                        <p className= {styles.blogDescription}>{blog.description}</p>
                                        <p className= {styles.meta}>{blog.meta}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
        </>
        
    )
}