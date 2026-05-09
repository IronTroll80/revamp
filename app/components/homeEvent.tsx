import Image from 'next/image'
import styles from './homeEvent.module.css'
import SectionTitle from './sectionTitle'
import { LuCalendar, LuClock, LuMapPinMinus, LuPin } from 'react-icons/lu'

interface Props{
    showTitle: boolean
}

export default function HomeEvent ({showTitle}: Props){
    return(
        <>
        
        <div className= {styles.container}>
            {showTitle && <SectionTitle title='Quicklie’s Event Calendar' description='Relax on the Weekend' link='/events' />}
            <div className= {styles.eventSection}>
                <div className= {styles.event}>
                    <Image src = "/eventHome.png" alt = 'event' fill />
                    <div className= {styles.text}>
                    <span className = {styles.tag}>Wine and Dine</span>
                    <h3 className= {styles.title}>Owambe Under the Stars</h3>
                    <p className= {styles.description}>
                         Owambe Under The Stars is an outdoor celebration with Afrobeat,
                         highlife and juju music, delicious food, and the best of Lagos nightlife - under the stars!
                    </p>
                    </div>
                    <div className= {styles.footing}>
                        <div className= {styles.left}>
                            <p><LuCalendar/> July, 1 2025</p>
                            <p><LuMapPinMinus/> Victoria Island</p>
                            <p><LuClock/> 8PM - 1PM WAT</p>
                        </div>
                        <div className= {styles.right}>
                            <p>Check it out </p>
                        </div>
                    </div>
                </div>
                <div className= {styles.event}>
                    <Image src = "/eventHome.png" alt = 'event' fill />
                    <div className= {styles.text}>
                    <span className = {styles.tag}>Wine and Dine</span>
                    <h3 className= {styles.title}>Owambe Under the Stars</h3>
                    <p className= {styles.description}>
                         Owambe Under The Stars is an outdoor celebration with Afrobeat,
                         highlife and juju music, delicious food, and the best of Lagos nightlife - under the stars!
                    </p>
                    </div>
                    <div className= {styles.footing}>
                        <div className= {styles.left}>
                            <p><LuCalendar/> July, 1 2025</p>
                            <p><LuMapPinMinus/> Victoria Island</p>
                            <p><LuClock/> 8PM - 1PM WAT</p>
                        </div>
                        <div className= {styles.right}>
                            <p>Check it out </p>
                        </div>
                    </div>
                </div>
                <div className= {styles.event}>
                    <Image src = "/eventHome.png" alt = 'event' fill />
                    <div className= {styles.text}>
                    <span className = {styles.tag}>Wine and Dine</span>
                    <h3 className= {styles.title}>Owambe Under the Stars</h3>
                    <p className= {styles.description}>
                         Owambe Under The Stars is an outdoor celebration with Afrobeat,
                         highlife and juju music, delicious food, and the best of Lagos nightlife - under the stars!
                    </p>
                    </div>
                    <div className= {styles.footing}>
                        <div className= {styles.left}>
                            <p><LuCalendar/> July, 1 2025</p>
                            <p><LuMapPinMinus/> Victoria Island</p>
                            <p><LuClock/> 8PM - 1PM WAT</p>
                        </div>
                        <div className= {styles.right}>
                            <p>Check it out </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}