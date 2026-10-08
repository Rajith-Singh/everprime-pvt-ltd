import Reveal from './Reveal.jsx'

export function SectionHead({ eyebrow, title, text, center = true }) {
  return (
    <Reveal className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero">
      {image && <img className="page-hero-image" src={image} alt="" aria-hidden="true" loading="eager" />}
      <div className="container page-hero-content">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}
