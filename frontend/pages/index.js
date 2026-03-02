import Head from 'next/head'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Idea Lab - Innovation & Creativity Hub</title>
        <meta name="description" content="Idea Lab - Fostering innovation and creativity" />
      </Head>

      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>AICTE Idea Lab</h1>
          <p className={styles.heroUniversity}>GGSIPU</p>
          <p className={styles.heroSubtitle}>
            Innovation | Design | Entrepreneurship
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className={styles.tagline}>
            Transforming ideas into real world solutions | Hands-on learning | Prototyping Innovation
          </p>
        </div>
      </section>

      <section className="section" style={{background: 'var(--bg-light)', paddingTop: '60px', paddingBottom: '60px'}}>
        <div className="container">
          <h2 className="section-title">Vision, Objectives, Mission, Goals</h2>
          <div className={styles.visionSection}>
            <div className={styles.visionIcon}>💡</div>
            <div className={styles.visionContent}>
              <p>
                Empowering the next generation of innovators at GGSIPU.
                We provide the ecosystem to turn your technical visions into
                real-world prototypes.
              </p>
            </div>
          </div>
          <div className={styles.ctaButtonWrapper}>
            <button className="btn btn-primary">Join the Idea Lab →</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3>State-of-the-Art Facilities</h3>
              <p>Access to modern equipment including 3D printers, laser cutters, electronics lab, and more.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Collaborative Environment</h3>
              <p>Work with like-minded peers and mentors to turn your innovative ideas into reality.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💡</div>
              <h3>Innovation Programs</h3>
              <p>Participate in workshops, hackathons, and innovation challenges throughout the year.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎓</div>
              <h3>Expert Mentorship</h3>
              <p>Learn from experienced faculty and industry professionals who guide your projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>500+</h3>
              <p>Active Members</p>
            </div>
            <div className={styles.statItem}>
              <h3>150+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Workshops Held</p>
            </div>
            <div className={styles.statItem}>
              <h3>20+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--bg-light)'}}>
        <div className="container">
          <h2 className="section-title">Recent Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src="/images/project1.jpg" alt="Project" />
              </div>
              <h3>Smart Campus System</h3>
              <p>IoT-based solution for campus automation and energy management.</p>
              <button className="btn btn-outline">Learn More</button>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src="/images/project2.jpg" alt="Project" />
              </div>
              <h3>AI-Powered Assistant</h3>
              <p>Machine learning application for student support services.</p>
              <button className="btn btn-outline">Learn More</button>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src="/images/project3.jpg" alt="Project" />
              </div>
              <h3>Robotics Platform</h3>
              <p>Educational robotics kit designed for beginners and enthusiasts.</p>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Start Your Innovation Journey?</h2>
          <p>Join our community of innovators and makers today!</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>
    </Layout>
  )
}
