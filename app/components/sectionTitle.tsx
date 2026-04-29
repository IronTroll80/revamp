import Link from 'next/link'
import styles from './sectionTitle.module.css'

export default function SectionTitle({title, description,link}: {title: string, description: string, link: string}) {
  return (
    <div className={styles.container}>
        <div>
        <p>{description}</p>
        <h2>{title}</h2>
        </div>
        <span><Link href={link}>See all →</Link></span>
    </div>
  )
}