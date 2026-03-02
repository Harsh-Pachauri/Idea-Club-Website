import Head from 'next/head'
import Layout from '@/components/Layout'
import styles from '@/styles/Faculty.module.css'

export default function Faculty() {
  const faculty = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Director, Idea Lab",
      expertise: "Robotics & Automation",
      email: "sarah.johnson@idealab.edu"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Technical Advisor",
      expertise: "Artificial Intelligence & Machine Learning",
      email: "michael.chen@idealab.edu"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Innovation Mentor",
      expertise: "Product Design & Entrepreneurship",
      email: "emily.rodriguez@idealab.edu"
    },
    {
      id: 4,
      name: "Prof. David Kumar",
      role: "Electronics Lab Supervisor",
      expertise: "Embedded Systems & IoT",
      email: "david.kumar@idealab.edu"
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      role: "Workshop Coordinator",
      expertise: "3D Printing & Digital Fabrication",
      email: "lisa.anderson@idealab.edu"
    },
    {
      id: 6,
      name: "Prof. James Wilson",
      role: "Project Mentor",
      expertise: "Software Engineering & Web Development",
      email: "james.wilson@idealab.edu"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Faculty - Idea Lab</title>
        <meta name="description" content="Meet our expert faculty and mentors" />
      </Head>

      <div className={styles.hero}>
        <div className="container">
          <h1>Faculty</h1>
          <p className={styles.breadcrumb}>Home | Faculty</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Talented Faculty</h2>
          <p className="section-subtitle">
            Our faculty members bring a wealth of expertise and experience to guide and
            mentor students in their innovative projects.
          </p>
          <div className={styles.facultyGrid}>
            {faculty.map(member => (
              <div key={member.id} className={styles.facultyCard}>
                <div className={styles.facultyImage}>
                  <div className={styles.avatar}>{member.image}</div>
                </div>
                <h3>{member.name}</h3>
                <div className={styles.role}>{member.role}</div>
                <p className={styles.description}>{member.description}</p>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>✉️</span>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📞</span>
                    <span>{member.phone}</span>
                  </div>
                </div>
                <div className={styles.actionButtons}>
                  <button className={styles.viewProfileBtn}>View Profile</button>
                  <button className={styles.sendEmailBtn}>Send Email</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--bg-light)'}}>
        <div className="container">
          <h2 className="section-title">What Our Faculty Provides</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>🎯 Project Mentorship</h3>
              <p>One-on-one guidance for your innovation projects from ideation to completion</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>📚 Technical Training</h3>
              <p>Specialized workshops and hands-on training sessions on various technologies</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>💼 Career Guidance</h3>
              <p>Industry insights and advice to help you navigate your career path</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>🔬 Research Support</h3>
              <p>Assistance with research projects and academic publications</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Want to Connect with Our Faculty?</h2>
          <p>Book an office hour session or reach out via email</p>
          <button className="btn btn-primary">Schedule Appointment</button>
        </div>
      </section>
    </Layout>
  )
}
