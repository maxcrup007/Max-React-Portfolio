import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SkillsPage.module.css'
import { FaArrowLeft, FaCode, FaShieldHalved, FaDesktop } from 'react-icons/fa6'
import Tilt from 'react-parallax-tilt'
import skills from '../../data/skills'

const services = [
  {
    icon: <FaCode />,
    title: 'Full-stack Developer',
    desc: 'I design and build complete web applications from database to UI, taking a feature from requirements to a working deployed solution.',
    tools: [
      { name: 'Django',     desc: 'Python web framework for backend development' },
      { name: 'Flask',      desc: 'Lightweight Python framework for microservices & APIs' },
      { name: 'REST API',   desc: 'Design & build structured HTTP API endpoints' },
      { name: 'React.js',   desc: 'Component-based UI development' },
      { name: 'Vue.js',     desc: 'Progressive JavaScript UI framework' },
      { name: 'Vite',       desc: 'Fast build tool & development server' },
      { name: 'TypeScript', desc: 'Strongly typed JavaScript (currently learning)' },
    ],
  },
  {
    icon: <FaShieldHalved />,
    title: 'QA Engineer',
    desc: 'I help teams ship with confidence by covering both functional and performance testing across web, API, and load scenarios.',
    tools: [
      { name: 'Selenium WebDriver', desc: 'Web browser automation testing' },
      { name: 'Robot Framework',    desc: 'Keyword-driven automation test framework' },
      { name: 'Playwright',         desc: 'Web scraping, data extraction and automation test' },
      { name: 'Locust',             desc: 'Performance and load testing' },
      { name: 'JMeter',             desc: 'Performance and load testing' },
      { name: 'Katalon',            desc: 'Auto generate elements locator' },
      { name: 'Postman / Newman',   desc: 'Test & automate API requests' },
    ],
  },
  {
    icon: <FaDesktop />,
    title: 'Data Analyst',
    desc: 'I collect, clean, convert and interpret raw data to help solve problems and make better decisions.',
    tools: [
      { name: 'SQL',                desc: 'Execute and manage database queries' },
      { name: 'Excel / Google Sheets', desc: 'Calculation and summarize basic data' },
      { name: 'Power BI / Tableau', desc: 'Dashboard and graph for data explanation' },
      { name: 'Pandas',             desc: 'Python library for managing and converting big data' },
      { name: 'Matplotlib',         desc: 'Python library for data visualization' },
      { name: 'Scikit-learn',       desc: 'Simple ML — prediction and clustering' },
    ],
  },
]

function SkillsPage() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_inner}>

        <Link to="/" className={styles.back_link}>
          <FaArrowLeft /> Back to Portfolio
        </Link>

        {/* ── Skills header ── */}
        <div className={styles.section_header}>
          <p className={styles.section_label}>What I work with</p>
          <h1 className={styles.section_title}>My Skill Set</h1>
        </div>

        {/* ── Skill icon grid ── */}
        <div className={styles.skill_grid}>
          {skills.map((s) => (
            <Tilt key={s.id} scale={1.1} transitionSpeed={2500} tiltReverse>
              <Link to={`/skill/${s.id}`} className={styles.skill_link}>
                <div className={styles.skill_card}>
                  <span className={styles.skill_icon}>{s.icon}</span>
                  <span className={styles.skill_label}>{s.name}</span>
                  <span className={styles.skill_level}>{s.level}</span>
                </div>
              </Link>
            </Tilt>
          ))}
        </div>

        {/* ── Services sub-section ── */}
        <div className={styles.services_block}>
          <div className={styles.section_header}>
            <p className={styles.section_label}>What I can do for you</p>
            <h2 className={styles.section_title}>My Services</h2>
          </div>

          <div className={styles.service_grid}>
            {services.map((svc, i) => (
              <div key={i} className={styles.service_card}>
                <span className={styles.svc_icon}>{svc.icon}</span>
                <h3 className={styles.svc_title}>{svc.title}</h3>
                <p className={styles.svc_desc}>{svc.desc}</p>
                <ul className={styles.tool_list}>
                  {svc.tools.map((t, j) => (
                    <li key={j}>
                      <span className={styles.tool_name}>{t.name}</span>
                      <span className={styles.tool_arrow}>→</span>
                      <span className={styles.tool_desc}>{t.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default SkillsPage
