import { LuMail, LuPhone, LuPin } from 'react-icons/lu'
import styles from './contactUsContent.module.css'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export default function ContactUsContent (){
    return (
        <>
        
        <div className= {styles.container}>
            <h3 className= {styles.title}>Contact Us </h3>
            <p className= {styles.subtitle}>Reach Out to us through any of our contacts</p>

            <div className= {styles.content}>
                <div className= {styles.left}>
                    <div>
                        <h3 className= {styles.contentTitle}>Contact Information</h3>
                        <p className= {styles.contentSubtitle}>Say something to start chatting with us!</p>
                    </div>

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
                            <FaXTwitter/>
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
                    <div className={styles.map}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.529133539874!2d3.347334075847515!3d6.580947122491368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92108dd4cbd9%3A0xfa972532ac31f458!2s6%20Esugbayi%20St%2C%20Ikeja%20GRA%2C%20Lagos%20102101%2C%20Lagos!5e0!3m2!1sen!2sng!4v1778318336917!5m2!1sen!2sng" 
                            width="700" height="450" 
                            style={{border:0}}
                            allowFullScreen= {true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}