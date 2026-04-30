import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.column}>
        <div className={styles.logoContainer}>
          <img src= '/quicklie-logo.png' alt='Quicklie Logo'/>
        </div>
        <p>
          Quicklie Distribution is your one-stop solution for all wholesale beverage needs. We pride ourselves on providing a seamless supply chain, offering premium spirits, wines, and other beverages with unmatched efficiency.
        </p>
      </div>

      
      <div className={styles.column}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Blogs/Articles</a></li>
          <li><a href="#">Events/Promotions</a></li>
          <li><a href="#">Memberships</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>

      
      <div className={styles.column}>
        <h3>Pages</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Shop Now</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>

      
      <div className={styles.column}>
        <h3>About Us</h3>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms And Conditions</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Our Socials</a></li>
        </ul>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaXTwitter /></a>
        </div>
      </div>
    </footer>
  )
}
