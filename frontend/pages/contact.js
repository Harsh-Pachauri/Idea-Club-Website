import Head from 'next/head'
import Layout from '@/components/Layout'
import { useState } from 'react'
import styles from '@/styles/Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <Layout>
      <Head>
        <title>Contact Us - Idea Lab</title>
        <meta name="description" content="Get in touch with Idea Lab" />
      </Head>

      <div className={styles.hero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p className={styles.breadcrumb}>Home | Contact Us</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Get In Touch With Us</h2>
          <p className={styles.sectionSubtitle}>
            We'd love to hear from you! Reach out to us for any queries or collaborations.
          </p>

          <div className={styles.contactCardsGrid}>
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>✉️</div>
              <h3>Email</h3>
              <p>info@aicteidealab.ac.in</p>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>📍</div>
              <h3>Address</h3>
              <p>AICTE Idea Lab,</p>
              <p>Guru Gobind Singh</p>
              <p>Indraprastha University,</p>
              <p>Sector 16C, Dwarka,</p>
              <p>New Delhi, 110078</p>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>📞</div>
              <h3>Phone</h3>
              <p>+91-9876543210</p>
              <p>+91-9876543221</p>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  )
}
