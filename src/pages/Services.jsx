import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import usePageTitle from '../components/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead } from '../components/Section.jsx'
import CardGrid from '../components/CardGrid.jsx'
import CTA from '../components/CTA.jsx'
import { Icon } from '../icons.jsx'
import { staffingServices, eventServices, process } from '../data.js'

export default function Services() {
  usePageTitle('Services')
  return (
    <>
      <PageHero eyebrow="Our Services" title="Two disciplines. One standard of excellence." text="Workforce solutions and event management, designed to work independently or together." image="/images/services-team.jpg" />

      <section className="section">
        <div className="container two-col">
          <Reveal className="division">
            <img className="division-photo" src="/images/staffing-team.jpg" alt="Professional at work in an industrial setting" />
            <div className="icon-wrap gold"><Icon name="Users" /></div>
            <h3>Manpower & Staffing</h3>
            <p>Temporary, contract, seasonal and project-based personnel for businesses, organisations and events.</p>
            <Link to="/staffing" className="link-arrow">Explore staffing <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal className="division" delay={100}>
            <img className="division-photo" src="/images/event-audience.jpg" alt="Corporate event space arranged for a conference" />
            <div className="icon-wrap gold"><Icon name="CalendarCheck" /></div>
            <h3>Event Management</h3>
            <p>Planning, production and on-site delivery of corporate, commercial, private and social events.</p>
            <Link to="/events" className="link-arrow">Explore events <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead eyebrow="Staffing" title="Workforce solutions" />
          <CardGrid items={staffingServices} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Events" title="Event solutions" />
          <CardGrid items={eventServices} />
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="Process" title="How we deliver" />
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

      <CTA />
    </>
  )
}
