import Link from 'next/link';
import styles from './signUpContent.module.css';
import { FaApple, FaGoogle } from 'react-icons/fa6';

export default function SignUpContent() {
    return (
    <>
    
    <div className={styles.container}>
        <h1 className= {styles.pageTitle}>Sign up on <span>Quicklie</span> today</h1>
        <p className={styles.signUpText}>Already have an account? <Link href="/login" className={styles.signUpLink}>Sign In</Link></p>
        <form className={styles.loginForm}>
            <div className= {styles.name}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" className={styles.inputField} />
            </div>
            <div className= {styles.email}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" className={styles.inputField} />
            </div>
            
            <div className={styles.password}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" className={styles.inputField} />
            </div>
            <section className= {styles.agree}>
                <input type="checkbox" id="agree" className={styles.checkbox} />
                <label htmlFor="agree">I agree to the <Link href="/terms" className={styles.termsLink}>Terms and Conditions</Link> and <Link href="/privacy" className={styles.termsLink}>Privacy Policy</Link></label>
            </section>
           
            <button type="submit" className={styles.loginButton}>Sign Up</button> 
            <h3>OR</h3>
            <div className= {styles.socialLogin}>
                <button type="button" className={styles.socialButton}>Sign up with Google <FaGoogle/> </button>
                <button type="button" className={styles.socialButton}>Sign up with Apple <FaApple/> </button>
            </div>
        </form>
    </div>
    
    </>
    )
}