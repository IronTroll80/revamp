import Link from 'next/link'
import styles from './homeBlog.module.css'
import Image from 'next/image'
import { BLOGS } from '../lib/data'

export default function HomeBlog (){
    return (
        <>
        
        <div className = {styles.homeBlog}>
            <div className= {styles.container}>
                <div className= {styles.sectionTitle}>
                    <div>
                        <p>Learn more about your drinks.</p>
                        <h2>The Quicklie Blog</h2>
                        </div>
                        <span><Link href={'/blogs'}>See all →</Link></span>
                    </div>
                <div className= {styles.blogSection}>
                    {
                        BLOGS.map((blog, index)=>(
                            <div className= {styles.blog} key={index}>
                                <div className= {styles.imageContainer}>
                                    <Image src={blog.image} alt='event' fill/>
                                </div>
                                <p className= {styles.tag}>{blog.tag}</p>
                                <p className= {styles.title}>{blog.title}</p>
                                <p className= {styles.description}>{blog.description}</p>
                                <p className= {styles.meta}>{blog.meta}</p>
                            </div>
                        ))
                    }
                </div>
                <Link className={styles.bottomLink} href="/blogs">See all blogs →</Link>
            </div>
        </div>
        
        
        </>
    )
}