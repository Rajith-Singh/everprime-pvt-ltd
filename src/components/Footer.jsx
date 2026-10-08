import { Link } from 'react-router-dom'
import { Phone, Mail, Globe } from 'lucide-react'
import { COMPANY } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo"><img src="/images/everprime_logo.png" alt="Everprime (Pvt) Ltd" /></div>
          <p className="footer-text">Premium manpower, staffing and event management solutions — delivered with integrity, precision and care.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/staffing">Manpower & Staffing</Link></li>
            <li><Link to="/events">Event Management</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><Phone size={16} /> <a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phone}</a></li>
            <li><Mail size={16} /> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li><Globe size={16} /> <a href={`https://${COMPANY.website}`}>{COMPANY.website}</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
        <span>Registered in Sri Lanka under the Companies Act No. 7 of 2007</span>
      </div>
    </footer>
  )
}
