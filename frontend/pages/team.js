import Head from 'next/head'
import Layout from '@/components/Layout'
import styles from '@/styles/Team.module.css'

export default function Team() {
  const leadership = [
    {
      id: 1,
      name: "Himanshu Tomar",
      role: "President",
      description: "Leading and coordinating the team with passion. Strong interest in robotics and AI.",
      email: "amit.singh@ggsipu.ac.in",
      phone: "+91-9876543210",
      image: "👨‍💼"
    },
    {
      id: 2,
      name: "Tejaswi Gautam",
      role: "Vice President",
      description: "Overseeing team activities and fostering collaboration. Enthusiastic about AI and IoT.",
      email: "ruchi.sehrawat@ggsipu.ac.in",
      phone: "+91-9876543221",
      image: "👩‍💼"
    },
    {
      id: 3,
      name: "Mayank",
      role: "Treasurer",
      description: "Managing finances and ensuring smooth operations. Passionate about embedded systems.",
      email: "manoj.satyarthi@ggsipu.ac.in",
      phone: "+91-9876543221",
      image: "👨‍💻"
    },
    {
      id: 4,
      name: "Kamal",
      role: "Web Dev Lead",
      description: "Heading web development initiatives. Skilled in full-stack development.",
      email: "",
      phone: "",
      image: "👨‍💻"
    },
    {
      id: 5,
      name: "Harsh",
      role: "Web Dev Vice Lead",
      description: "Assisting in web development projects. Proficient in front-end technologies.",
      email: "",
      phone: "",
      image: "👨‍💻"
    },
    {
      id: 6,
      name: "Aman",
      role: "Robotics Lead",
      description: "Leading robotics projects and workshops. Interested in autonomous systems.",
      email: "",
      phone: "",
      image: "👨‍💻"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Team - Idea Lab</title>
        <meta name="description" content="Meet the student team behind Idea Lab" />
      </Head>

      <div className={styles.hero}>
        <div className="container">
          <h1>Team</h1>
          <p className={styles.breadcrumb}>Home | Team</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Dedicated Team</h2>
          <p className="section-subtitle">
            Our enthusiastic and skilled team of students drives innovation and success at the
            AICTE Idea Lab.
          </p>
          <div className={styles.leadershipGrid}>
            {leadership.map(member => (
              <div key={member.id} className={styles.memberCard}>
                <div className={styles.memberImage}>
                  <div className={styles.avatar}>{member.image}</div>
                </div>
                <h3>{member.name}</h3>
                <div className={styles.role}>{member.role}</div>
                <p className={styles.description}>{member.description}</p>
                {member.email && (
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>✉️</span>
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </div>
                    {member.phone && (
                      <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>📞</span>
                        <span>{member.phone}</span>
                      </div>
                    )}
                  </div>
                )}
                <button className={styles.viewProfileBtn}>View Profile</button>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <span className={styles.prevBtn}>‹</span>
            <span className={styles.pageNumber}>1</span>
            <span className={styles.pageNumber}>2</span>
            <span className={styles.pageNumber}>3</span>
            <span className={styles.nextBtn}>›</span>
          </div>
        </div>
      </section>


    </Layout>
  )
}
