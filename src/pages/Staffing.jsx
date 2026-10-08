import { Check } from 'lucide-react'
import usePageTitle from '../components/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead } from '../components/Section.jsx'
import CardGrid from '../components/CardGrid.jsx'
import CTA from '../components/CTA.jsx'
import FAQ from '../components/FAQ.jsx'
import { Icon } from '../icons.jsx'
import { staffingServices, industries, faqs } from '../data.js'

const roles = ['Administrative & office assistants', 'Data entry operators', 'Customer support executives', 'Warehouse & logistics staff', 'Retail & sales associates', 'Hospitality & front-of-house teams', 'Event ushers & ticketing staff', 'Skilled & semi-skilled industrial workers']
const why = ['Rigorous sourcing, screening and vetting', 'Training before placement where needed', 'Flexible terms: temporary, contract, seasonal, project', 'Compliance with applicable laws and regulations', 'Responsive replacement and support']

export default function Staffing() {
  usePageTitle('Manpower & Staffing')
  return (
    <>
      <PageHero eyebrow="Manpower & Staffing" title="People you can rely on" text="Flexible, vetted and professional workforce solutions for every scale of operation." image="/images/staffing-team.jpg" />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What we offer" title="Staffing services" />
          <CardGrid items={staffingServices} />
        </div>
      </section>

      <section className="section tinted">
        <div className="container split">
          <Reveal className="split-copy">
            <span className="eyebrow">Roles we fill</span>
            <h2>Skilled and semi-skilled talent across functions</h2>
            <ul className="ticks">{roles.map((r) => <li key={r}><Check size={18} /> {r}</li>)}</ul>
          </Reveal>
          <Reveal className="split-copy" delay={120}>
            <span className="eyebrow">Why Everprime</span>
            <h2>A more dependable way to staff</h2>
            <ul className="ticks">{why.map((r) => <li key={r}><Check size={18} /> {r}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Industries" title="Sectors we serve" />
          <div className="chips">
            {industries.map((i, idx) => (
              <Reveal key={i.label} delay={idx * 60} className="chip"><Icon name={i.icon} size={20} /> {i.label}</Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title="Staffing questions" />
          <FAQ items={faqs.filter((_, i) => i !== 1)} />
        </div>
      </section>

      <CTA title="Need a team? Tell us the brief." text="Share your roles, numbers and dates and we’ll respond with a clear staffing plan." />
    </>
  )
}
