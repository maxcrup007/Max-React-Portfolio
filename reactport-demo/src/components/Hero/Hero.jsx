import React, { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaDiscord, FaFacebookF, FaDownload, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

const photos = [
  'https://i.ibb.co/HQsqyh4/28166263-1182525198550745-2459796525163076801-n.jpg',
  'https://i.ibb.co/ZpSj9NjM/IMG-4118.jpg',
  'https://i.ibb.co/211MG058/48976849-2133676196883682-7944768605072130048-n.jpg',
];

function Hero() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPhotoIndex(prev => (prev + 1) % photos.length);
        setFading(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero_section}>
      <div className={styles.bento_grid}>

        {/* Card 1: Name + Role */}
        <div className={`${styles.card} ${styles.card_title}`}>
          <p className={styles.greeting}>Hi, it's me <span className={styles.highlight}>Max</span></p>
          <h1 className={styles.name}>
            <span className={styles.name_first}>Vorawut</span>
            <span className={styles.name_divider}></span>
            <span className={styles.name_last}>Phirunpathanagul</span>
          </h1>
          <p className={styles.role}>
            <span>I'm a </span>
            <TypeAnimation
              sequence={['Data Analyst', 1200, 'QA Engineer', 1200, 'Full-stack Developer', 1200]}
              speed={30}
              repeat={Infinity}
            />
          </p>
        </div>

        {/* Card 2: Profile photo — spans 2 rows, auto-rotates every 5s */}
        <Tilt scale={1.04} transitionSpeed={2500} tiltReverse={true} className={`${styles.card} ${styles.card_photo}`}>
          <div
            className={`${styles.photo_img} ${fading ? styles.photo_fade : ''}`}
            style={{ backgroundImage: `url('${photos[photoIndex]}')` }}
          >
            <div className={styles.photo_dots}>
              {photos.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === photoIndex ? styles.dot_active : ''}`}
                  onClick={() => { setFading(true); setTimeout(() => { setPhotoIndex(i); setFading(false); }, 400); }}
                />
              ))}
            </div>
          </div>
        </Tilt>

        {/* Card 3: Social links */}
        <div className={`${styles.card} ${styles.card_social}`}>
          <p className={styles.card_label}>Find me on</p>
          <ul className={styles.social_list}>
            <li>
              <a href="https://github.com/maxcrup007" target="_blank" rel="noreferrer">
                <FaGithub /> <span>GitHub</span> <FaArrowUpRightFromSquare className={styles.arrow} />
              </a>
            </li>
            <li>
              <a href="https://discord.com/users/ma11_maxi" target="_blank" rel="noreferrer">
                <FaDiscord /> <span>Discord</span> <FaArrowUpRightFromSquare className={styles.arrow} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/vorawut.max" target="_blank" rel="noreferrer">
                <FaFacebookF /> <span>Facebook</span> <FaArrowUpRightFromSquare className={styles.arrow} />
              </a>
            </li>
          </ul>
        </div>

        {/* Card 4: Bio */}
        <div className={`${styles.card} ${styles.card_bio}`}>
          <p>Hi there, I am a software enthusiast dedicated to continuous growth and professional excellence. Having a background in software testing and development, I am eager to contribute to a forward-thinking team. Particularly skilled in API design and full-stack development.</p>
        </div>

        {/* Card 5: Download CV CTA */}
        <div className={`${styles.card} ${styles.card_cta}`}>
          <p className={styles.cta_question}>View my resume</p>
          <a className={styles.cta_link} href="/Max_Resume.pdf" download>
            Download CV <FaDownload />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
