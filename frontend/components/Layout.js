import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Layout.module.css'

export default function Layout({ children }) {
  const router = useRouter()

  const isActive = (path) => router.pathname === path

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topBar}>
          <div className={styles.logoSection}>
            <div className={styles.logoGroup}>
              <div className={styles.aicteLogo}>🎓</div>
              <div className={styles.logoText}>
                <span className={styles.aicteText}>AICTE</span>
                <span className={styles.ideaLabText}>Idea Lab</span>
              </div>
              <div className={styles.bulbIcon}>💡</div>
            </div>
          </div>
          <div className={styles.universitySection}>
            <span className={styles.universityText}>GGSIPU</span>
            <div className={styles.universityLogo}>🏛️</div>
          </div>
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={isActive('/') ? styles.active : ''}>Home</Link></li>
            <li><Link href="/aboutus" className={isActive('/aboutus') ? styles.active : ''}>About Us</Link></li>
            <li><Link href="/facilities" className={isActive('/facilities') ? styles.active : ''}>Facilities</Link></li>
            <li><Link href="/events" className={isActive('/events') ? styles.active : ''}>Events</Link></li>
            <li><Link href="/projects" className={isActive('/projects') ? styles.active : ''}>Projects</Link></li>
            <li><Link href="/gallery" className={isActive('/gallery') ? styles.active : ''}>Gallery</Link></li>
            <li><Link href="/faculty" className={isActive('/faculty') ? styles.active : ''}>Faculty</Link></li>
            <li><Link href="/team" className={isActive('/team') ? styles.active : ''}>Team</Link></li>
            <li><Link href="/contact" className={isActive('/contact') ? styles.active : ''}>Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Instagram">📷</a>
              <span>|</span>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
            <ul className={styles.footerLinks}>
              <li><Link href="#">Terms of Use</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Terms of Use</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#">Terms of Use</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Useful Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#">AICTE</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerLogo}>
            <div className={styles.footerLogoIcon}>🎓</div>
            <div className={styles.footerLogoText}>
              <span>AICTE</span>
              <span>Idea Lab</span>
            </div>
          </div>
          <p>©2025 AICTE All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}
