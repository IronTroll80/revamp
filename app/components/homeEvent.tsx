import Image from 'next/image'
import styles from './homeEvent.module.css'
import SectionTitle from './sectionTitle'
import { LuCalendar, LuClock, LuMapPinMinus } from 'react-icons/lu'
import { EVENTS } from '../lib/data'



interface Props {
    showTitle: boolean
}

export default function HomeEvent({ showTitle }: Props) {
    return (
        <>
            <div className={styles.container}>
                {showTitle && <SectionTitle title='Quicklie’s Event Calendar' description='Relax on the Weekend' link='/events' />}
                
                <div className={styles.eventSection}>
                    {EVENTS.map((event) => (
                        <div key={event.id} className={styles.event}>
                            <Image src={event.image} alt={event.title} fill />
                            
                            <div className={styles.text}>
                                <span className={styles.tag}>{event.tag}</span>
                                <h3 className={styles.title}>{event.title}</h3>
                                <p className={styles.description}>
                                    {event.description}
                                </p>
                            </div>

                            <div className={styles.footing}>
                                <div className={styles.left}>
                                    <p><LuCalendar /> {event.date}</p>
                                    <p><LuMapPinMinus /> {event.location}</p>
                                    <p><LuClock /> {event.time}</p>
                                </div>
                                <div className={styles.right}>
                                    <p>Check it out</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}