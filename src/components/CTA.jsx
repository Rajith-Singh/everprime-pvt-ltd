import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function CTA({ title = 'Let’s build something exceptional together', text = 'Tell us what you need — a team, an event, or both — and we’ll shape a proposal around you.' }) {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta-inner">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link to="/contact" className="btn btn-gold">Start a conversation <ArrowRight size={18} /></Link>
        </Reveal>
      </div>
    </section>
  )
}
