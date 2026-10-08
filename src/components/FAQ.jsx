import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{f.q}</span><Plus size={20} />
          </button>
          <div className="faq-a"><p>{f.a}</p></div>
        </div>
      ))}
    </div>
  )
}
