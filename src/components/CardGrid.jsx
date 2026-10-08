import Reveal from './Reveal.jsx'
import { Icon } from '../icons.jsx'

export default function CardGrid({ items, cols = 3 }) {
  return (
    <div className={`grid cols-${cols}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 70} className="card">
          <div className="icon-wrap"><Icon name={it.icon} /></div>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </Reveal>
      ))}
    </div>
  )
}
