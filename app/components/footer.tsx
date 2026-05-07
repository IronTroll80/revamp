import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.logoContainer}>
          <img src='/quicklie-logo.png' alt='Quicklie Logo' />
        </div>

        <p>
          Quicklie Distribution is your one-stop solution for all wholesale
          beverage needs. We pride ourselves on providing a seamless supply
          chain, offering premium spirits, wines, and other beverages with
          unmatched efficiency.
        </p>
      </div>

      <div className={styles.column}>
        <h3>Quick Links</h3>

        <ul>
          <li>
            <Link href='/new-arrivals'>New Arrivals</Link>
          </li>

          <li>
            <Link href='/blog'>Blogs/Articles</Link>
          </li>

          <li>
            <Link href='/events'>Events/Promotions</Link>
          </li>

          <li>
            <Link href='/membership'>Memberships</Link>
          </li>

          <li>
            <Link href='/about'>About Us</Link>
          </li>
        </ul>
      </div>

      <div className={styles.column}>
        <h3>Pages</h3>

        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>

          <li>
            <Link href='/marketplace'>Products</Link>
          </li>

          <li>
            <Link href='/marketplace'>Shop Now</Link>
          </li>

          <li>
            <Link href='/contact-us'>Contact</Link>
          </li>

          <li>
            <Link href='/about'>About Us</Link>
          </li>
        </ul>
      </div>

      <div className={styles.column}>
        <h3>About Us</h3>

        <ul>
          <li>
            <Link href='/about'>FAQs</Link>
          </li>

          <li>
            <Link href='/privacy-policy'>Privacy Policy</Link>
          </li>

          <li>
            <Link href='/terms-and-conditions'>
              Terms And Conditions
            </Link>
          </li>

          <li>
            <Link href='/contact-us'>Contact Us</Link>
          </li>

          <li>
            <p>Our Socials</p>
          </li>
        </ul>

        <div className={styles.socialIcons}>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <FaInstagram />
          </a>

          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <FaFacebookF />
          </a>

          <a
            href='https://x.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}