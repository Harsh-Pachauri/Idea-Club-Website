import Head from 'next/head'
import Layout from '@/components/Layout'
import styles from '@/styles/Facilities.module.css'

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      name: "3D Printing Lab",
      icon: "🖨️",
      description: "Multiple 3D printers including FDM and resin printers for prototyping and manufacturing",
      features: ["5 FDM Printers", "2 Resin Printers", "Design Software", "Material Library"]
    },
    {
      id: 2,
      name: "Electronics Workshop",
      icon: "⚡",
      description: "Fully equipped electronics lab with tools for circuit design, testing, and assembly",
      features: ["Oscilloscopes", "Soldering Stations", "PCB Design Tools", "Component Library"]
    },
    {
      id: 3,
      name: "Maker Space",
      icon: "🔧",
      description: "General purpose workspace with hand tools, power tools, and assembly area",
      features: ["CNC Machine", "Laser Cutter", "Hand Tools", "Assembly Benches"]
    },
    {
      id: 4,
      name: "Computer Lab",
      icon: "💻",
      description: "High-performance workstations with latest software for design and development",
      features: ["20 Workstations", "CAD Software", "Dev Tools", "Rendering PCs"]
    },
    {
      id: 5,
      name: "Testing Area",
      icon: "🧪",
      description: "Dedicated space for testing prototypes and conducting experiments",
      features: ["Test Equipment", "Safety Gear", "Data Logging", "Analysis Tools"]
    },
    {
      id: 6,
      name: "Collaboration Zones",
      icon: "👥",
      description: "Flexible spaces designed for team meetings, brainstorming, and project planning",
      features: ["Whiteboards", "AV Equipment", "Comfortable Seating", "Project Displays"]
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Facilities - Idea Lab</title>
        <meta name="description" content="State-of-the-art facilities at Idea Lab" />
      </Head>

      <div className={styles.hero}>
        <div className="container">
          <h1>Facilities</h1>
          <p className={styles.breadcrumb}>Home | Facilities</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">AICTE Idea Lab</h2>
          <p className="section-subtitle">
            AICTE Idea Lab is equipped with state-of-the-art facilities to support innovators at every stage of
            their journey. From modern labs to cutting-edge prototyping tools,
            we provide everything you need to bring your ideas to life.
          </p>

          <div className={styles.facilitiesGrid}>
            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>🧑‍🤝‍🧑</div>
              <div className={styles.facilityContent}>
                <div className={styles.iconBadge}>🚀</div>
                <h3>Incubation</h3>
                <p>Supportive environment for startups to grow from idea to prototype and beyond.</p>
                <button className="btn btn-primary">Learn More →</button>
              </div>
            </div>

            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>💻</div>
              <div className={styles.facilityContent}>
                <div className={styles.iconBadge} style={{background: '#10b981'}}>🔓</div>
                <h3>Lab Access</h3>
                <p>Open access to state-of-the-art labs for all your innovation and prototyping needs.</p>
                <button className="btn btn-primary">Learn More →</button>
              </div>
            </div>

            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>👥</div>
              <div className={styles.facilityContent}>
                <div className={styles.iconBadge} style={{background: '#10b981'}}>💼</div>
                <h3>Workshops</h3>
                <p>Hands-on workshops and expert-led training sessions offered regularly.</p>
                <button className="btn btn-primary">Learn More →</button>
              </div>
            </div>

            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>⚙️</div>
              <div className={styles.facilityContent}>
                <div className={styles.iconBadge}>🖨️</div>
                <h3>3D Printer</h3>
                <p>State-of-the-art 3D printing technology - bring your designs to life.</p>
                <button className="btn btn-primary">Learn More →</button>
              </div>
            </div>

            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>🔧</div>
              <div className={styles.facilityContent}>
                <div className={styles.iconBadge} style={{background: '#10b981'}}>⚙️</div>
                <h3>CNC Router</h3>
                <p>High-precision CNC routing for cutting and shaping materials with accuracy.</p>
                <button className="btn btn-primary">Learn More →</button>
              </div>
            </div>

            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>✨</div>
              <div className={styles.facilityContent}>
                <div className={styles.iconBadge} style={{background: '#ef4444'}}>🔥</div>
                <h3>Laser Engraver</h3>
                <p>Advanced laser engraving machine for detailed precise marking.</p>
                <button className="btn btn-primary">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--bg-light)'}}>
        <div className="container">
          <h2 className="section-title">Lab Access & Hours</h2>
          <div className={styles.accessGrid}>
            <div className={styles.accessCard}>
              <h3>🕐 Operating Hours</h3>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 10:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
              <p><strong>Sunday:</strong> 12:00 PM - 6:00 PM</p>
            </div>
            <div className={styles.accessCard}>
              <h3>🎫 Membership</h3>
              <p>Free access for all enrolled students</p>
              <p>Faculty and staff welcome</p>
              <p>Alumni access available</p>
            </div>
            <div className={styles.accessCard}>
              <h3>📋 Requirements</h3>
              <p>Valid student/staff ID required</p>
              <p>Safety training for equipment</p>
              <p>Project registration recommended</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Safety Guidelines</h2>
          <div className={styles.guidelinesGrid}>
            <div className={styles.guideline}>
              <div className={styles.guidelineNumber}>1</div>
              <h3>Training Required</h3>
              <p>Complete safety training before using equipment</p>
            </div>
            <div className={styles.guideline}>
              <div className={styles.guidelineNumber}>2</div>
              <h3>PPE Mandatory</h3>
              <p>Wear appropriate safety gear at all times</p>
            </div>
            <div className={styles.guideline}>
              <div className={styles.guidelineNumber}>3</div>
              <h3>Supervision</h3>
              <p>Staff supervision required for certain equipment</p>
            </div>
            <div className={styles.guideline}>
              <div className={styles.guidelineNumber}>4</div>
              <h3>Clean Workspace</h3>
              <p>Keep your workspace clean and organized</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Book a facility tour or reserve equipment for your next project</p>
          <div className={styles.ctaButtons}>
            <button className="btn btn-primary">Schedule a Tour</button>
            <button className="btn btn-outline">Reserve Equipment</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
