import Head from 'next/head'
import Layout from '@/components/Layout'
import styles from '@/styles/Projects.module.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Campus IoT System",
      category: "Internet of Things",
      team: "Tech Innovators",
      description: "An integrated IoT solution for monitoring and managing campus facilities including lighting, HVAC, and security systems.",
      status: "Completed",
      icon: "🏢"
    },
    {
      id: 2,
      title: "AI-Powered Study Assistant",
      category: "Artificial Intelligence",
      team: "AI Squad",
      description: "Machine learning application that provides personalized study recommendations and adaptive learning paths for students.",
      status: "In Progress",
      icon: "🤖"
    },
    {
      id: 3,
      title: "Educational Robotics Kit",
      category: "Robotics",
      team: "Robo Warriors",
      description: "Affordable and modular robotics platform designed to teach programming and electronics to K-12 students.",
      status: "Completed",
      icon: "🤖"
    },
    {
      id: 4,
      title: "Sustainable Energy Monitor",
      category: "Green Tech",
      team: "Eco Innovators",
      description: "Real-time energy consumption tracking system for campus buildings with AI-powered optimization suggestions.",
      status: "In Progress",
      icon: "🌱"
    },
    {
      id: 5,
      title: "AR Campus Navigation",
      category: "Augmented Reality",
      team: "AR Pioneers",
      description: "Mobile app using AR technology to help new students and visitors navigate the campus with interactive waypoints.",
      status: "Completed",
      icon: "🗺️"
    },
    {
      id: 6,
      title: "Health Monitoring Wearable",
      category: "Healthcare Tech",
      team: "Med Tech",
      description: "Low-cost wearable device for monitoring vital signs with emergency alert features for elderly users.",
      status: "In Progress",
      icon: "⌚"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Projects - Idea Lab</title>
        <meta name="description" content="Explore innovative projects from Idea Lab" />
      </Head>

      <div className={styles.hero}>
        <div className="container">
          <h1>Building Ideas Into Impact</h1>
          <p className={styles.heroSubtitle}>
            From hardware prototypes to intelligent software systems—our students
            turn imagination into innovation.
          </p>
          <div className={styles.heroTags}>
            <span>Hands-on Learning</span>
            <span>Research-Driven Development</span>
            <span>Real-World Impact</span>
          </div>
          <div className={styles.projectTypes}>
            <button className={styles.projectTypeBtn}>🔧 Hardware Projects</button>
            <button className={styles.projectTypeBtn}>💻 Software Projects</button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.featuredProject}>
            <div className={styles.projectImageSection}>
              <div className={styles.projectImage}>🚁</div>
            </div>
            <div className={styles.projectDetails}>
              <h2>Solar Powered Surveillance Drone</h2>
              <p className={styles.projectCategory}>Aerospace + Renewable Energy</p>
              <p className={styles.projectDescription}>
                A lightweight drone powered by integrated solar panels,
                designed for long-duration environmental monitoring
                and agricultural surveillance.
              </p>
              <div className={styles.projectTags}>
                <span>Solar Energy</span>
                <span>UAV</span>
                <span>Embedded Systems</span>
              </div>
              <div className={styles.projectActions}>
                <button className={styles.viewProjectBtn}>View Project &gt;</button>
                <button className={styles.viewGalleryBtn}>View Gallery &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--bg-light)'}}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>💻 Software Projects</h2>
            <span className={styles.moreIcon}>→</span>
          </div>
          <div className={styles.softwareProject}>
            <div className={styles.softwareProjectContent}>
              <div className={styles.projectDate}>Apr 15, 2024</div>
              <div className={styles.softwareDetails}>
                <h3>AI-Based Dental Image Classifier</h3>
                <p className={styles.softwareCategory}>Artificial Intelligence & Healthcare</p>
                <p className={styles.softwareDescription}>
                  Deep learning system for age and gender prediction
                  using radiographic dental images through transfer le-
                </p>
                <div className={styles.softwareTags}>
                  <span>Robotics</span>
                  <span>PID Control</span>
                  <span>Sensors</span>
                </div>
                <div className={styles.softwareActions}>
                  <button className={styles.viewProjectBtn}>View Project &gt;</button>
                  <button className={styles.technicalReportBtn}>Technical Report &gt;</button>
                </div>
              </div>
            </div>
            <div className={styles.softwareImage}>
              <div className={styles.softwarePlaceholder}>🤖</div>
              <div className={styles.softwareTechBadge}>Solar Energy | UAV | Embedded Systems</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>💻 Software Projects</h2>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--bg-light)'}}>
        <div className="container">
          <h2 className="section-title">Project Categories</h2>
          <div className={styles.categoriesGrid}>
            <div className={styles.categoryItem}>
              <h3>🤖 AI & Machine Learning</h3>
              <p>15 Projects</p>
            </div>
            <div className={styles.categoryItem}>
              <h3>🌐 IoT & Smart Systems</h3>
              <p>12 Projects</p>
            </div>
            <div className={styles.categoryItem}>
              <h3>🔧 Robotics</h3>
              <p>10 Projects</p>
            </div>
            <div className={styles.categoryItem}>
              <h3>📱 Mobile Apps</h3>
              <p>18 Projects</p>
            </div>
            <div className={styles.categoryItem}>
              <h3>🌱 Sustainability</h3>
              <p>8 Projects</p>
            </div>
            <div className={styles.categoryItem}>
              <h3>🎮 AR/VR</h3>
              <p>7 Projects</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Start Your Own Project</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Submit Your Idea</h3>
              <p>Share your innovative idea with our team through the project proposal form</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Get Approved</h3>
              <p>Our faculty reviews your proposal and provides feedback and approval</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Build Your Team</h3>
              <p>Recruit team members and get assigned a faculty mentor</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Start Creating</h3>
              <p>Access our facilities and resources to bring your project to life</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Have an Innovative Idea?</h2>
          <p>Submit your project proposal and turn your vision into reality</p>
          <button className="btn btn-primary">Submit Project Idea</button>
        </div>
      </section>
    </Layout>
  )
}
