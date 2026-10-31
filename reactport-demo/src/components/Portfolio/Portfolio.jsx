import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';
import projects from '../../data/projects'

function Portfolio() {
  return (
    <div id='portfolio' className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        {projects.map(project => (
          <Link to={`/project/${project.id}`} key={project.id} className={styles.port_link}>
            <div className={styles.port_items}>
              <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src={project.image} alt={project.title} />
              </Tilt>
              <p>{project.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
