import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>My Stakeholder</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>The primary stakeholder, a university lecturer and lab manager, currently relies on a manual process and requires a digital solution to optimize lab asset management.</p>
            <img src="https://cdn.discordapp.com/attachments/645911480017092630/1515749049049940148/image.jpg?ex=6a3022ce&is=6a2ed14e&hm=e7c33498633f479a0d3693dc59b139e9811928137bfe0746b8c8da33427a21e5&" alt="clients" />
            <h4>Asst.prof Dr. Maroot</h4>
            <p className={styles.bio}>Stakeholder</p>
        </div>
        <div className={styles.testi_items}>
            <p>As a software development mentor, I am guiding a junior developer through his first end-to-end development project 'Game Wiki'</p>
            <img src="https://cdn.discordapp.com/attachments/645911480017092630/1515756061376643134/48390721_1000143780177494_3833051109572739072_n.jpg?ex=6a302956&is=6a2ed7d6&hm=2f40be1f43a21470ffa78efd9a224ffeeb6667e0979ccbe1f2a788fb18b56bb3&" alt="clients" />
            <h4>Title Panuwat</h4>
            <p className={styles.bio}>Web Developer (Co-worker)</p>
        </div>
        <div className={styles.testi_items}>
            <p>This project was requested by a friend who wanted a central place to find information about his favorite video game. He provided the requirements for a Game Wiki system that he can use while playing.</p>
            <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/723653614_1524436572476075_1677689510747053373_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1920&ctp=s1080x1920&_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=1dCKbNn-3a0Q7kNvwHhHQ14&_nc_oc=AdrpYi-v03T57rYH8s8W6pEoy3ZZCPSBcUI5Sfo-fV88n7u6edkYNmsqADGyk5LXh4lYPyV5bRIEmF9tSE6MLV2D&_nc_zt=23&_nc_ht=scontent.fcnx4-1.fna&_nc_ss=7b2a8&oh=03_Q7cD5gFtBPYfpkIya2BA_yKMnRlFi2r7y2xZytMobPdMoO7GQw&oe=6A563265" alt="clients" />
            <h4>Dom Pontakorn</h4>
            <p className={styles.bio}>End-User</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
