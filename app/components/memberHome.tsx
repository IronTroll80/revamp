import Image from 'next/image'
import styles from './memberHome.module.css'
import Link from 'next/link'

export default function MemberHome() {

return(
    <>
    <div className={styles.memberHome}>
        <div className = {styles.container}>
            <div className= {styles.left}>
                <h1>Go Premium today and unlock exclusives, discounts and other benefits. </h1>
                <button><Link href={'/membership'}>Go Premium</Link></button>
            </div>
            <div className= {styles.right}>
                <Image src="/premium.png" alt="Premium Benefits" width={260} height={310}/>
            </div>
        </div>
    </div>
    </>
)
}