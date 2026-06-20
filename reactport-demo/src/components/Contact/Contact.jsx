import React, { useState } from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope  } from "react-icons/fa6";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || 'http://localhost:8080/api/contact';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <div id='contact' className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius eligendi in laboriosam delectus ipsum inventore alias dolorem ducimus aliquid.
                </p>
                <p className={styles.contact_address}>
                    26/20 Danha Street in Midtown <br />
                    Chaing Rai, Thailand
                </p>
                <p><FaPhone /> (+66) 84 4877 396</p>
                <p><FaEnvelope /> vorawut.maggy@gmail.com</p>
                <p><FaEnvelope /> vorawut_max@hotmail.com</p>
            </div>
            <div className={styles.contact_form}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder='eg. Max' value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" placeholder='eg. Autumn' value={formData.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" placeholder='eg. inwza@gmail.com' value={formData.email} onChange={handleChange} required />
                    <label htmlFor="message">Your message</label>
                    <textarea id="message" name="message" cols="30" rows="10" placeholder='Type here' value={formData.message} onChange={handleChange} required></textarea>
                    <button type='submit' disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Submit'}
                    </button>
                    {status === 'success' && <p className={styles.status_success}>Thanks! Your message has been sent.</p>}
                    {status === 'error' && <p className={styles.status_error}>Something went wrong. Please try again later.</p>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
