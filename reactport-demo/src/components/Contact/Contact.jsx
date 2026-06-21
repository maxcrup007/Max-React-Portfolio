import React, { useState } from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

const API_URL = import.meta.env.VITE_CONTACT_API_URL || 'http://localhost:8080/api/contact';

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setForm({ firstName: '', lastName: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <div id='contact' className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_desc}>
                    Feel free to reach out for project collaborations, consulting, or just to say hello.
                    I'll get back to you as soon as possible.
                </p>
                <p className={styles.contact_address}>
                    26/20 Danha Street in Midtown <br />
                    Chiang Rai, Thailand
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
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="eg. Max"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="eg. Autumn"
                                value={form.lastName}
                                onChange={handleChange}
                                disabled={status === 'sending'}
                            />
                        </div>
                    </div>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="eg. inwza@gmail.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                    />
                    <label htmlFor="message">Your message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Type here"
                        value={form.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                    ></textarea>

                    <div className={styles.form_footer}>
                        <button type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending…' : 'Submit'}
                        </button>
                        {status === 'success' && (
                            <p className={styles.status_success}>
                                <FaCircleCheck /> Message sent! I'll reply soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className={styles.status_error}>
                                <FaCircleXmark /> Something went wrong. Please try again.
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
