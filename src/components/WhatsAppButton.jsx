import { MessageCircle } from 'lucide-react'
import { COMPANY } from '../config.js'

export default function WhatsAppButton() {
  return (
    <a
      className="wa-btn"
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hello Everprime, I would like to enquire about your services.')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}
