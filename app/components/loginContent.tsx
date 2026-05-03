import Link from 'next/link';
import styles from './loginContent.module.css';
import { FaApple, FaGoogle } from 'react-icons/fa6';

export default function LoginContent() {
    return (
    <>
    
    <div className={styles.container}>
        <h1 className= {styles.pageTitle}>Get Back Into Your <span>Quicklie</span> Account</h1>
        <p className={styles.signUpText}>Don't have an account? <Link href="/signup" className={styles.signUpLink}>Sign Up</Link></p>
        <form className={styles.loginForm}>
            <div className= {styles.email}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" className={styles.inputField} />
            </div>
            <div className={styles.password}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" className={styles.inputField} />
                <Link href="/forgot-password" className={styles.forgotPasswordLink}>Forgot Password?</Link>
            </div>
           
            <button type="submit" className={styles.loginButton}>Login</button> 
            <h3>OR</h3>
            <div className= {styles.socialLogin}>
                <button type="button" className={styles.socialButton}>Sign in with Google <FaGoogle/> </button>
                <button type="button" className={styles.socialButton}>Sign in with Apple <FaApple/> </button>
            </div>
        </form>
    </div>
    
    </>
    )
}