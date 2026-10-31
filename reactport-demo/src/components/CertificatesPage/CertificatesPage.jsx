import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './CertificatesPage.module.css'
import { FaArrowLeft, FaArrowUpRightFromSquare, FaAward, FaXmark, FaMagnifyingGlassPlus } from 'react-icons/fa6'
import certificates from '../../data/certificates'

function CertificatesPage() {
  const [lightbox, setLightbox] = useState(null) // cert object or null

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_inner}>
        <Link to="/" className={styles.back_link}>
          <FaArrowLeft /> Back to Portfolio
        </Link>

        <div className={styles.page_header}>
          <FaAward className={styles.header_icon} />
          <h1 className={styles.page_title}>My Certificates</h1>
          <p className={styles.page_subtitle}>Professional certifications and achievements</p>
        </div>

        <div className={styles.cert_grid}>
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={styles.cert_card}
              onClick={() => cert.image && setLightbox(cert)}
              style={{ cursor: cert.image ? 'pointer' : 'default' }}
            >
              <div className={styles.cert_img_wrap}>
                {cert.image ? (
                  <>
                    <img src={cert.image} alt={cert.title} className={styles.cert_img} />
                    <div className={styles.cert_img_overlay}>
                      <FaMagnifyingGlassPlus />
                    </div>
                  </>
                ) : (
                  <div className={styles.cert_img_placeholder}>
                    <FaAward />
                  </div>
                )}
              </div>

              <div className={styles.cert_info}>
                <h2 className={styles.cert_title}>{cert.title}</h2>
                <p className={styles.cert_issuer}>{cert.issuer}</p>
                <p className={styles.cert_date}>{cert.date}</p>

                {cert.description && (
                  <p className={styles.cert_desc}>{cert.description}</p>
                )}

                <div className={styles.cert_footer}>
                  {cert.credentialId && (
                    <span className={styles.cert_id}>ID: {cert.credentialId}</span>
                  )}
                  {cert.verifyLink && (
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.cert_verify}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Verify <FaArrowUpRightFromSquare />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox_backdrop} onClick={() => setLightbox(null)}>
          <button className={styles.lightbox_close} onClick={() => setLightbox(null)}>
            <FaXmark />
          </button>
          <div className={styles.lightbox_content} onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} className={styles.lightbox_img} />
            <p className={styles.lightbox_caption}>
              <strong>{lightbox.title}</strong> — {lightbox.issuer}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CertificatesPage
