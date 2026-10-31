import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactPage.module.css'
import { FaArrowLeft } from 'react-icons/fa6'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function ContactPage() {
  return (
    <div className={styles.page_layout}>
      <div className={styles.page_content}>
        <div className={styles.back_row}>
          <Link to="/" className={styles.back_link}>
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
