import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import usePageTitle from '../components/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import { SectionHead } from '../components/Section.jsx'
import CardGrid from '../components/CardGrid.jsx'
import CTA from '../components/CTA.jsx'
import FAQ from '../components/FAQ.jsx'
import { Icon } from '../icons.jsx'
import { staffingServices, eventServices, industries, process, stats, faqs } from '../data.js'

export default function Home() {
  usePageTitle('')
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="orb o1" /><span className="orb o2" /><span className="grid-lines" />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow light">Manpower • Staffing • Event Management</span>
            <h1>Skilled people.<br /><em>Flawless events.</em></h1>
            <p>
              Everprime partners with businesses across Sri Lanka to deliver reliable workforce solutions and
              beautifully executed events — with the professionalism your brand deserves.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-gold">Request a Proposal <ArrowRight size={18} /></Link>
              <Link to="/services" className="btn btn-ghost">Explore Services</Link>
            </div>
            <ul className="hero-points">
              <li><Check size={16} /> Vetted & trained personnel</li>
              <li><Check size={16} /> End-to-end event delivery</li>
              <li><Check size={16} /> Local & international contracts</li>
            </ul>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src="/images/homepage-event.jpg" alt="Audience attending a professionally staged conference" />
            <div className="glass-card gc-1">
              <div className="icon-wrap gold"><Icon name="Users" /></div>
              <strong>Manpower & Staffing</strong>
              <span>Temporary, contract & project teams</span>
            </div>
            <div className="glass-card gc-2">
              <div className="icon-wrap gold"><Icon name="CalendarCheck" /></div>
              <strong>Event Management</strong>
              <span>Corporate, private & branded events</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="stat">
              <b>{s.value}<small>{s.suffix}</small></b>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="section">
        <div className="container split">
          <Reveal className="split-media">
            <div className="media-frame">
              <div className="media-quote">
                <span className="eyebrow">Our promise</span>
                <p>“We don’t just fill positions or fill venues — we deliver outcomes.”</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="split-copy" delay={120}>
            <span className="eyebrow">Who we are</span>
            <h2>One trusted partner for your people and your occasions</h2>
            <p>
              Everprime (Pvt) Ltd brings together two disciplines that share one standard: preparation.
              Whether it is a skilled team for a warehouse, an usher crew for a summit, or a full-scale
              product launch, we plan carefully and execute with composure.
            </p>
            <Link to="/about" className="link-arrow">More about Everprime <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section tinted">
        <div className="container">
          <SectionHead eyebrow="Manpower & Staffing" title="The right people, ready from day one" text="We recruit, screen, train and place personnel across a wide range of operations." />
          <CardGrid items={staffingServices.slice(0, 3)} />
          <div className="center-btn"><Link to="/staffing" className="btn btn-outline">All staffing services</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Event Management" title="Events that run as beautifully as they look" text="From concept and production to crowd management and entry — we coordinate every moving part." />
          <CardGrid items={eventServices.slice(0, 3)} />
          <div className="center-btn"><Link to="/events" className="btn btn-outline">All event services</Link></div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="How we work" title="A clear process, every time" text="Simple, transparent and built around your timeline." />
          <div className="steps">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="step">
                <span className="step-n">0{i + 1}</span>
                <div className="icon-wrap gold"><Icon name={p.icon} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Industries" title="Experience across sectors" />
          <div className="chips">
            {industries.map((i, idx) => (
              <Reveal key={i.label} delay={idx * 60} className="chip"><Icon name={i.icon} size={20} /> {i.label}</Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section tinted">
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title="Questions, answered" />
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA />
    </>
  )
}
