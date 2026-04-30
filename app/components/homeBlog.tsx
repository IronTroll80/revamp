import Link from 'next/link'
import styles from './homeBlog.module.css'

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
    },
    {
        tag: 'Culture',
        title: 'Whiskey vs Cognac: What Lagos Drinks', 
        description: `Lorem ipsum dolor sit amet consectuer adipiscing elit. Lorem ipsum dolor sit amet consectuer adipiscing elit`,
        meta: `Feb 18, 2026 • 6 min read`
    },
]

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
                        blogs.map((blog, index)=>(
                            <div className= {styles.blog} key={index}>
                                <div className= {styles.imageContainer}></div>
                                <p className= {styles.tag}>{blog.tag}</p>
                                <p className= {styles.title}>{blog.title}</p>
                                <p className= {styles.description}>{blog.description}</p>
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