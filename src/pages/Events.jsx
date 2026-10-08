import { Check } from 'lucide-react'
import usePageTitle from '../components/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead } from '../components/Section.jsx'
import CardGrid from '../components/CardGrid.jsx'
import CTA from '../components/CTA.jsx'
import { eventServices } from '../data.js'

const types = ['Annual general meetings', 'Product launches', 'Conferences', 'Executive summits', 'Galas & private functions', 'Promotional events & branded activations']
const scope = ['Venue coordination', 'Audio-visual arrangements', 'Stage construction & setup', 'Lighting & equipment', 'Vendor management', 'Catering coordination', 'Entry management', 'Ushers, ticketing & crowd management']

export default function Events() {
  usePageTitle('Event Management')
  return (
    <>
      <PageHero eyebrow="Event Management" title="Every detail, handled" text="Corporate, commercial, private and social events planned and delivered with polish." image="/images/event-audience.jpg" />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What we offer" title="Event services" />
          <CardGrid items={eventServices} />
        </div>
      </section>

      <section className="section tinted">
        <div className="container split">
          <Reveal className="split-copy">
            <span className="eyebrow">Events we deliver</span>
            <h2>For every kind of occasion</h2>
            <ul className="ticks">{types.map((r) => <li key={r}><Check size={18} /> {r}</li>)}</ul>
          </Reveal>
          <Reveal className="split-copy" delay={120}>
            <span className="eyebrow">Production & logistics</span>
            <h2>One partner for the full scope</h2>
            <ul className="ticks">{scope.map((r) => <li key={r}><Check size={18} /> {r}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="section dark">
        <div className="container narrow center-text">
          <SectionHead eyebrow="Our approach" title="Calm on the day because we planned for everything" text="Detailed run-sheets, briefed teams and clear communication with every vendor mean your guests only see a seamless experience." />
        </div>
      </section>

      <CTA title="Planning an event?" text="Tell us the occasion, date and scale — we’ll bring the plan, the people and the production." />
    </>
  )
}
