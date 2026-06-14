import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text_1}>Hi, its' me</p>
                <h3 className={styles.text_2}>Vorawut Phirunpathanagul</h3>
                <p className={styles.text_3}>
                  <span style={{ marginRight: '10px'}}>I'm a</span>
                  <TypeAnimation
                    sequence={[
                      'Front-end Developer',
                      'QA Engineer',
                      'Full-stack Developer',
                    ]}
                    speed={25}
                    repeat={Infinity}
                  />
                </p>
                <p className={styles.text_4}>Hi there, I am a software enthusiast dedicated to continuous growth and
professional excellence. Having a background in software testing and
development, I am now looking to dive deep into real-world software
engineering. I am particularly skilled in API design and full-stack
development and am eager to contribute to a forward-thinking team.
My journey is fueled by a desire to learn best practices in the industry,
which will eventually empower me to innovate and build my own
software products.</p>
                <ul className={styles.hero_social}>
                    <li><a href="https://github.com/maxcrup007"><FaGithub /></a></li>
                    <li><a href="https://discord.com/users/ma11_maxi"><FaLinkedinIn /></a></li>
                    <li><a href="https://www.facebook.com/vorawut.max"><FaFacebookF /></a></li>
                </ul>
            </div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_img}></div>
            </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
