import usePageTitle from '../components/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead } from '../components/Section.jsx'
import CardGrid from '../components/CardGrid.jsx'
import CTA from '../components/CTA.jsx'
import { values } from '../data.js'
import { CEO } from '../config.js'

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHero eyebrow="About Everprime" title="Built on preparation, delivered with pride" text="A Sri Lankan company combining workforce expertise with event craftsmanship." image="/images/about-team.jpg" />

      <section className="section">
        <div className="container split">
          <Reveal className="split-copy">
            <span className="eyebrow">Our story</span>
            <h2>Why Everprime exists</h2>
            <p>
              Businesses need dependable people, and organisations need occasions that reflect their standards.
              Everprime was established to serve both — providing manpower and staffing services alongside
              professional event management and production.
            </p>
            <p>
              We recruit, vet and train personnel for administrative, operational, customer-support,
              hospitality, warehouse, retail and supply-chain roles, and we plan and execute corporate,
              commercial, private and social events from first concept to final guest.
            </p>
          </Reveal>
          <Reveal className="mv" delay={120}>
            <div className="mv-card"><h3>Our Mission</h3><p>To empower organisations with skilled, reliable people and unforgettable events, delivered with integrity and precision.</p></div>
            <div className="mv-card"><h3>Our Vision</h3><p>To be Sri Lanka’s most trusted partner for workforce solutions and event management — locally and beyond.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead eyebrow="Our values" title="What guides every engagement" />
          <CardGrid items={values} cols={4} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Leadership" title="Meet our CEO" />
          <Reveal className="ceo">
            <div className="ceo-photo">
              <img src="/images/ceo_image.jpeg" alt={`${CEO.name}, ${CEO.title}`} />
            </div>
            <div className="ceo-copy">
              <h3>{CEO.name}</h3>
              <span className="ceo-role">{CEO.title}</span>
              <p>
                Tharusha leads Everprime with a technology-minded approach to people and operations. With
                postgraduate and undergraduate qualifications in Information Technology from SLIIT and the
                University of Moratuwa, he brings analytical rigour, structure and innovation to staffing and
                event delivery.
              </p>
              <ul className="quals">
                {CEO.quals.map((q) => <li key={q}>{q}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
