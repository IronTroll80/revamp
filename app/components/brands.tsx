import Image from 'next/image'
import styles from './brands.module.css'
import SectionTitle from './sectionTitle'

export default function Brands() {

    const brands = 6

return(
    <>
    
    <div className = {styles.container}>
        <SectionTitle title = "Quicklie is the Official Distributor of over 50+ Brands " description = "" link = '/products' />
        <div className= {styles.brandContainer}>
            {Array.from({ length: brands }, (_, i) => (
                <div key={i}>
                    <Image src={`/brand${i + 1}.png`} alt={`Brand ${i + 1}`} width={225} height={135}/>
                </div>
            ))}
        </div>
    </div>
    
    </>
)

}