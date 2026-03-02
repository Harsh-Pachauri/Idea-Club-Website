import Head from 'next/head'
import Layout from '@/components/Layout'
import styles from '@/styles/AboutUs.module.css'

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us - Idea Lab</title>
        <meta name="description" content="Learn about Idea Lab and our mission" />
      </Head>

      <div className={styles.hero}>
        <div className="container">
          <h1>About Us</h1>
          <p className={styles.breadcrumb}>Home | About Us</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">About AICTE Idea Lab</h2>
          <p className="section-subtitle">
            Empowering innovators at Guru Gobind Singh Indraprastha University with cutting-edge facilities
            and expert guidance to turn ideas into impactful prototypes, supported
            by the All India Council for Technical Education (AICTE).
          </p>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <div className={styles.iconCircle}>💡</div>
              <h3>Vision</h3>
              <p>
                Our vision is to create a hub of innovation where students and faculty
                engage in hands-on projects, learning through experimentation and
                collaboration.
              </p>
            </div>

            <div className={styles.aboutCard}>
              <div className={styles.iconCircle}>🎯</div>
              <h3>Objectives</h3>
              <p>
                Our objectives include fostering creativity, encouraging entrepreneurship,
                and providing the tools and mentorship needed for prototyping and product
                development.
              </p>
            </div>

            <div className={styles.aboutCard}>
              <div className={styles.iconCircle}>🚀</div>
              <h3>Mission</h3>
              <p>
                Our mission is to empower students with practical skills, critical
                thinking, and an innovative mindset to solve real-world challenges through
                hands-on learning and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--bg-light)'}}>
        <div className="container">
          <div className={styles.directorSection}>
            <div className={styles.directorContent}>
              <h2>Director's Message</h2>
              <p>Dear innovators,</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus
                lacus, commodo et felis vitae, posuere lectus. Praesent vel felis vitae velit
                cursus sagittis in eget purus lorem ipsum.
              </p>
            </div>
            <div className={styles.directorImage}>
              <div className={styles.directorPhoto}>👤</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
