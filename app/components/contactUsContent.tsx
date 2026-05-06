import { LuMail, LuPhone, LuPin } from 'react-icons/lu'
import styles from './contactUsContent.module.css'
import { FaFacebook, FaInstagram, FaX } from 'react-icons/fa6'

export default function ContactUsContent (){
    return (
        <>
        
        <div className= {styles.container}>
            <h3>Contact Us </h3>
            <p>Reach Out to us through any of our contacts</p>

            <div className= {styles.content}>
                <div className= {styles.left}>
                    <h3 className= {styles.contentTitle}>Contact Information</h3>
                    <p>Say something to start chatting with us!</p>

                    <div className= {styles.contactItems}>
                        <p> <LuPhone/> +234 904 566 5727</p>
                        <p> <LuMail/> sales@quickliedistributions.com.</p>
                        <p> <LuPin/> 6, Esugbayi Street, Ikeja GRA, Lagos</p>
                    </div>
                    <div className= {styles.socialMedia}>
                        <p>Follow Us On</p>
                        <div>
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaX/>
                        </div>
                    </div>
                
                </div>
                <div className= {styles.right}>
                    <div className= {styles.inputContainer}>
                        <label htmlFor='name'>Full Name</label>
                        <input type= 'text' name='name'/> 
                    </div>
                    
                    <div className= {styles.inputContainer}>
                        <label htmlFor='number'>Phone Number</label>
                        <input type= 'text' name='number'/> 
                    </div>
                    
                    <div className= {styles.inputContainer}>
                        <label htmlFor='email'>Email</label>
                        <input type= 'email' name='email'/> 
                    </div>
                    
                    <div className= {styles.inputContainer}>
                        <label htmlFor='name'>Message</label>
                        <textarea name="message"></textarea> 
                    </div>
                    <div className= {styles.map}>
                        
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}