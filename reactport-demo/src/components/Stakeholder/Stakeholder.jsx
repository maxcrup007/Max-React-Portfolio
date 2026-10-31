import React from 'react'
import styles from './Stakeholder.module.css'

function Stakeholder() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>My Stakeholder</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>The primary stakeholder, a government officer that required information extractor, currently relies on a manual process and requires a digital solution to optimize information management.</p>
            <img src="https://i.ibb.co/mVd3vXR9/515915744-718689217423442-904339952962284984-n.jpg" alt="clients" />
            <h4>Top Warut</h4>
            <p className={styles.bio}>System Analyst</p>
        </div>
        <div className={styles.testi_items}>
            <p>As a software development mentor, I am guiding a junior developer through his first end-to-end development project 'Game Wiki'</p>
            <img src="https://i.ibb.co/Q3hbNXNL/48390721-1000143780177494-3833051109572739072-n.jpg" alt="clients" />
            <h4>Title Panuwat</h4>
            <p className={styles.bio}>Web Developer (Co-worker)</p>
        </div>
        <div className={styles.testi_items}>
            <p>This project was requested by a friend who wanted a central place to find information about his favorite video game. He provided the requirements for a Game Wiki system that he can use while playing.</p>
            <img src="https://i.ibb.co/8nHLKjcR/IMG-0593.jpg" alt="clients" />
            <h4>Dom Pontakorn</h4>
            <p className={styles.bio}>End-User</p>
        </div>  
      </div>
    </div>
  )
}

export default Stakeholder
