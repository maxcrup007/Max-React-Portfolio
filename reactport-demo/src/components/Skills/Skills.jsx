import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode, FaLocust } from "react-icons/fa6";
import { SiSelenium, SiRobotframework, SiGo, SiDjango } from "react-icons/si";
import Tilt from 'react-parallax-tilt';

function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill set</h3>
        <ul className={styles.skills_list}>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaSquareJs />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaReact />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaSass />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaGitAlt />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaNode />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <SiSelenium />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <SiRobotframework />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <SiGo />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <SiDjango />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaLocust />
              </Tilt>
            </li>
        </ul>
    </div>
  )
}

export default Skills
