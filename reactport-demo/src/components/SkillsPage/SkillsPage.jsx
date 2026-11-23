import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SkillsPage.module.css'
import { FaArrowLeft } from 'react-icons/fa6'
import Tilt from 'react-parallax-tilt'
import skills from '../../data/skills'
import Services from '../Services/Services'

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

        {/* ── Services sub-section — same component as homepage ── */}
        <div className={styles.services_block}>
          <Services />
        </div>

      </div>
    </div>
  )
}

export default SkillsPage
