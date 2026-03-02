import Head from 'next/head'
import Layout from '@/components/Layout'
import { useState } from 'react'
import styles from '@/styles/Gallery.module.css'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    { id: 1, category: 'events', title: '75th Independence day (Azadi ka Amrit Mahotsav) celebration at AICTE HQ', date: '15 August, 2022', count: '+10', image: '🇮🇳' },
    { id: 2, category: 'events', title: 'Launch of AICTE ATAL portal & Bharat Tech Foundation', date: '2 April, 2022', count: '+10', image: '🚀' },
    { id: 3, category: 'events', title: 'Launch of AICTE ATAL portal & Bharat Tech Foundation', date: '4 April, 2022', count: '+10', image: '👥' },
    { id: 4, category: 'others', title: 'AICTE Idea Lab Inauguration', date: '10 October, 2021', count: '+1', image: '🎪' },
    { id: 5, category: 'others', title: 'AICTE Idea Lab Inauguration', date: '10 October, 2021', count: '', image: '🏢' },
    { id: 6, category: 'others', title: 'Smart Energy Hackathon at GGSIPU', date: 'May, 2021', count: '', image: '⚡' }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'events', label: 'Events' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'others', label: 'Others' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <Layout>
      <Head>
        <title>Gallery - Idea Lab</title>
        <meta name="description" content="Photo gallery of Idea Lab activities and projects" />
      </Head>

      <div className={styles.hero}>
        <div className="container">
          <h1>Gallery</h1>
          <p className={styles.breadcrumb}>Home | Gallery</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.filterBar}>
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={styles.galleryGrid}>
            {filteredItems.map(item => (
              <div key={item.id} className={styles.galleryItem}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>{item.image}</div>
                  {item.count && (
                    <div className={styles.imageCount}>{item.count}</div>
                  )}
                  <div className={styles.dateTag}>{item.date}</div>
                </div>
                <div className={styles.itemContent}>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--bg-light)'}}>
        <div className="container">
          <h2 className="section-title">Gallery Highlights</h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <h3>📸 500+</h3>
              <p>Photos & Videos</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>🎉 50+</h3>
              <p>Events Documented</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>🏆 100+</h3>
              <p>Project Showcases</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>👥 1000+</h3>
              <p>Community Moments</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Share Your Moment</h2>
          <p>Have photos from Idea Lab events? Share them with us!</p>
          <button className="btn btn-primary">Submit Photos</button>
        </div>
      </section>
    </Layout>
  )
}
