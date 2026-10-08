import { useState } from 'react'
import { Phone, Mail, Globe, MessageCircle, Send } from 'lucide-react'
import usePageTitle from '../components/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import { PageHero } from '../components/Section.jsx'
import { COMPANY } from '../config.js'

export default function Contact() {
  usePageTitle('Contact')
  const [f, setF] = useState({ name: '', email: '', phone: '', service: 'Manpower & Staffing', message: '' })
  const [sent, setSent] = useState(false)
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // No backend needed: opens the visitor's email app with the enquiry pre-filled.
  // To receive form submissions directly (Formspree, Resend, Vercel function), swap this handler.
  const submit = (e) => {
    e.preventDefault()
    const subject = `Website enquiry — ${f.service}`
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nService: ${f.service}\n\n${f.message}`
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s talk about what you need" text="Tell us about your staffing or event requirements and we’ll respond promptly." image="/images/contact-office.jpg" />
      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <h3>Get in touch</h3>
            <ul>
              <li><span className="icon-wrap"><Phone size={20} /></span><div><small>Phone</small><a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phone}</a></div></li>
              <li><span className="icon-wrap"><Mail size={20} /></span><div><small>Email</small><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div></li>
              <li><span className="icon-wrap"><MessageCircle size={20} /></span><div><small>WhatsApp</small><a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer">Message us</a></div></li>
              <li><span className="icon-wrap"><Globe size={20} /></span><div><small>Website</small><a href={`https://${COMPANY.website}`}>{COMPANY.website}</a></div></li>
            </ul>
          </Reveal>
          <Reveal className="form-card" delay={100}>
            <form onSubmit={submit}>
              <div className="row">
                <label>Full name<input required value={f.name} onChange={on('name')} placeholder="Your name" /></label>
                <label>Email<input required type="email" value={f.email} onChange={on('email')} placeholder="you@company.com" /></label>
              </div>
              <div className="row">
                <label>Phone<input value={f.phone} onChange={on('phone')} placeholder="+94 ..." /></label>
                <label>I’m interested in
                  <select value={f.service} onChange={on('service')}>
                    <option>Manpower & Staffing</option>
                    <option>Event Management</option>
                    <option>Both</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <label>Message<textarea required rows={5} value={f.message} onChange={on('message')} placeholder="Tell us about your requirements, dates and numbers..." /></label>
              <button className="btn btn-gold" type="submit">Send enquiry <Send size={18} /></button>
              {sent && <p className="form-note">Your email app should have opened with your enquiry ready to send.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
