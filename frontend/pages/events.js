import Head from 'next/head'
import Layout from '@/components/Layout'
import styles from '@/styles/Events.module.css'

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Hackathon 2026",
      date: "March 15-17, 2026",
      type: "Competition",
      description: "48-hour coding marathon where teams compete to build innovative solutions.",
      icon: "💻"
    },
    {
      id: 2,
      title: "IoT Workshop Series",
      date: "March 25, 2026",
      type: "Workshop",
      description: "Hands-on workshop covering IoT fundamentals and practical applications.",
      icon: "🔌"
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      date: "April 5, 2026",
      type: "Networking",
      description: "Students present their startup ideas to industry experts and investors.",
      icon: "🚀"
    }
  ]

  const pastEvents = [
    {
      title: "AI/ML Bootcamp",
      date: "February 2026",
      participants: 120
    },
    {
      title: "3D Printing Workshop",
      date: "January 2026",
      participants: 80
    },
    {
      title: "Innovation Challenge",
      date: "December 2025",
      participants: 200
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Events - Idea Lab</title>
        <meta name="description" content="Upcoming events and activities at Idea Lab" />
      </Head>

      <div className={styles.hero}>
        <div className="container">
          <h1>Events</h1>
          <p className={styles.breadcrumb}>Home | Events</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Stay updated on the latest workshops, seminars, and events hosted by AICTE Idea Lab.
            Join us to expand your knowledge and skills in innovation and technology.
          </p>
          <div className={styles.eventsGrid}>
            <div className={styles.eventCard}>
              <div className={styles.eventImageWrapper}>
                <div className={styles.eventImage}>💻</div>
                <div className={styles.eventDate}>Apr 15, 2024</div>
              </div>
              <div className={styles.eventContent}>
                <h3>Innovation Lab Workshop</h3>
                <p>Hands-on workshop aimed at fostering creativity and prototyping innovations.</p>
                <button className="btn btn-primary">View Details →</button>
              </div>
            </div>

            <div className={styles.eventCard}>
              <div className={styles.eventImageWrapper}>
                <div className={styles.eventImage}>🚁</div>
                <div className={styles.eventDate} style={{background: '#10b981'}}>Apr 28, 2024</div>
              </div>
              <div className={styles.eventContent}>
                <h3>Drone Workshop</h3>
                <p>Learn to build, program, and fly drones with expert guidance.</p>
                <button className="btn btn-primary">View Details →</button>
              </div>
            </div>

            <div className={styles.eventCard}>
              <div className={styles.eventImageWrapper}>
                <div className={styles.eventImage}>📝</div>
                <div className={styles.eventDate} style={{background: '#8b5cf6'}}>May 5, 2024</div>
              </div>
              <div className={styles.eventContent}>
                <h3>LaTeX Session</h3>
                <p>Introduction to LaTeX for research and document preparation.</p>
                <button className="btn btn-primary">View Details →</button>
              </div>
            </div>
          </div>

          <div className={styles.eventsGrid} style={{marginTop: '2rem'}}>
            <div className={styles.eventCardHorizontal}>
              <div className={styles.eventImageSmall}>👥</div>
              <div className={styles.eventContentHorizontal}>
                <h3>Drone Workshop</h3>
                <p>Learn to build, program, and fly drones with expert guidance.</p>
                <button className="btn btn-primary">View Details →</button>
              </div>
            </div>

            <div className={styles.eventCardHorizontal}>
              <div className={styles.eventImageSmall}>⚙️</div>
              <div className={styles.eventContentHorizontal}>
                <h3>LaTeX Session</h3>
                <p>Introduction to LaTeX for research and document preparation.</p>
                <button className="btn btn-primary">View Details →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--bg-light)'}}>
        <div className="container">
          <h2 className="section-title">Event Categories</h2>
          <div className={styles.categoriesGrid}>
            <div className={styles.categoryCard}>
              <h3>🎓 Workshops</h3>
              <p>Hands-on learning sessions covering various technologies and skills.</p>
            </div>
            <div className={styles.categoryCard}>
              <h3>🏆 Competitions</h3>
              <p>Hackathons and challenges to test your skills and win prizes.</p>
            </div>
            <div className={styles.categoryCard}>
              <h3>👥 Networking</h3>
              <p>Connect with industry professionals, mentors, and fellow innovators.</p>
            </div>
            <div className={styles.categoryCard}>
              <h3>🎤 Talks & Seminars</h3>
              <p>Guest lectures from industry experts and successful entrepreneurs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Past Events</h2>
          <div className={styles.pastEventsGrid}>
            {pastEvents.map((event, index) => (
              <div key={index} className={styles.pastEventCard}>
                <h3>{event.title}</h3>
                <p className={styles.pastEventDate}>{event.date}</p>
                <p className={styles.pastEventParticipants}>
                  👥 {event.participants} Participants
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to get notified about upcoming events</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
