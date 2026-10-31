import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { FaBars, FaBriefcase, FaDownload } from "react-icons/fa6";

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled)
  }

  return (
    <nav>
        <div className={styles.container}>
          <div className={styles.nav_con}>
            <div className={styles.logo}>
              <a href="#"><FaBriefcase className={styles.logo_icon} /> Vorawut's Portfolio</a>
            </div>
            <ul>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/certificates">My Certificate</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className={styles.button}>
              <a href="/Max_Resume.pdf" download>Download CV <FaDownload /></a>
            </div>
          </div>

          {/* Mobile Menu */}
          <FaBars className={styles.bars} onClick={handleToggle} />
          {isToggled ? (
            <>
              <ul className={styles.mobile_menu}>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/certificates">My Certificate</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
              <div className={styles.mobile_button}>
                <a href="/Max_Resume.pdf" download>Download CV <FaDownload /></a>
              </div>
            </>
          ) : null}

        </div>
    </nav>
  )
}

export default Navbar
