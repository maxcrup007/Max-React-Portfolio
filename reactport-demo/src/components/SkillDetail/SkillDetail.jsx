import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './SkillDetail.module.css'
import { FaArrowLeft } from 'react-icons/fa6'
import skills from '../../data/skills'

const LEVEL_COLOR = {
  Beginner:     '#4dabf7',
  Intermediate: '#ff6a00',
  Advanced:     '#69db7c',
  Expert:       '#ffd43b',
}

function SkillDetail() {
  const { id } = useParams()
  const skill = skills.find(s => s.id === id)

  if (!skill) {
    return (
      <div className={styles.not_found}>
        <h2>Skill not found</h2>
        <Link to="/skills" className={styles.back_link}>
          <FaArrowLeft /> Back to Skills
        </Link>
      </div>
    )
  }

  const levelColor = LEVEL_COLOR[skill.level] || 'var(--color-orange)'

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_inner}>

        <Link to="/skills" className={styles.back_link}>
          <FaArrowLeft /> Back to Skills
        </Link>

        {/* ── Hero row ── */}
        <div className={styles.hero_row}>
          <div className={styles.icon_wrap}>
            {skill.icon}
          </div>
          <div className={styles.hero_info}>
            <h1 className={styles.skill_name}>{skill.name}</h1>
            <div className={styles.meta_row}>
              <span className={styles.level_badge} style={{ borderColor: levelColor, color: levelColor }}>
                {skill.level}
              </span>
              <span className={styles.exp_badge}>
                {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'} of experience
              </span>
            </div>
          </div>
        </div>

        <div className={styles.content_grid}>

          {/* ── Description ── */}
          <div className={styles.detail_card}>
            <h3 className={styles.card_label}>About this Skill</h3>
            <p className={styles.description}>{skill.description}</p>
          </div>

          {/* ── Used In ── */}
          <div className={styles.detail_card}>
            <h3 className={styles.card_label}>Used In</h3>
            <div className={styles.tag_list}>
              {skill.usedIn.map((item, i) => (
                <span key={i} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>

          {/* ── Highlights ── */}
          <div className={`${styles.detail_card} ${styles.full_width}`}>
            <h3 className={styles.card_label}>Experience Highlights</h3>
            <ul className={styles.highlight_list}>
              {skill.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SkillDetail
