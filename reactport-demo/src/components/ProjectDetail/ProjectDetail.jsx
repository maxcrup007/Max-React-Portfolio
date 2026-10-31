import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './ProjectDetail.module.css'
import { FaArrowLeft, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import projects from '../../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className={styles.not_found}>
        <h2>Project not found</h2>
        <Link to="/" className={styles.back_link}>
          <FaArrowLeft /> Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.detail_wrapper}>
      <Link to="/" className={styles.back_link}>
        <FaArrowLeft /> Back to Portfolio
      </Link>

      <div className={styles.detail_card}>
        <div className={styles.image_section}>
          <img src={project.image} alt={project.title} />
        </div>

        <div className={styles.info_section}>
          <h1 className={styles.project_title}>{project.title}</h1>
          <p className={styles.project_desc}>{project.description}</p>

          <div className={styles.section_block}>
            <h3 className={styles.section_label}>Tech Stack</h3>
            <div className={styles.tech_list}>
              {project.techStack.map((tech, i) => (
                <span key={i} className={styles.tech_tag}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.section_block}>
            <h3 className={styles.section_label}>Work Flow</h3>
            <ul className={styles.feature_list}>
              {project.workflow.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.section_block}>
            <h3 className={styles.section_label}>My Job Responsibilities</h3>
            <ul className={styles.responsibility_list}>
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className={styles.project_link}>
              View on GitHub <FaArrowUpRightFromSquare />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
