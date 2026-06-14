import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop  } from "react-icons/fa6";

function Services() {
  return (
    <div id='services' className={styles.services_con}>
        <h3 className={styles.services_title}>My Services</h3>
        <div className={styles.services_list}>
            <div className={styles.services_items}>
                <FaCode />
                <h4>Full-stack Developer</h4>
                <p>
                About My Software development skill and experience have skill development as"Django Framework", "Flask Framework", "REST API", "Docker" and also learning about "TypeScript workflow".
                </p>
            </div>
            <div className={styles.services_items}>
                <FaPaintbrush />
                <h4>QA Engineer</h4>
                <p>
                About My Software testing skill and experience have skill testing as "Selenium Webdriver", "ROBOT Framework", "POSTMAN and NewMAN", "Locust", "JMeter", "Katalon" and also learning about "Playwright".
                </p>
            </div>
            <div className={styles.services_items}>
                <FaDesktop />
                <h4>Front-end Consulting</h4>
                <p>
                About My Software design skill and experience have skill testing as "React,js", "Vue.js", "Vite", "Figma Design", "Git" and also learning about "AI apply for development".
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services
