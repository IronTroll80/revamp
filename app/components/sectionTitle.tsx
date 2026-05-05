import Link from 'next/link'
import styles from './sectionTitle.module.css'

interface Props {
  title: string, 
  description: string, 
  link: string,
  bold?: string,
}
  


export default function SectionTitle({title, description,link,bold}: Props) {
  return (
    <div className={styles.container}>
        <div>
        <p>{description}<b> {bold} </b></p>
        <h2>{title}</h2>
        </div>
        <span><Link href={link}>See all →</Link></span>
    </div>
  )
}