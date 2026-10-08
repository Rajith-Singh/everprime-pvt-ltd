import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Everprime (Pvt) Ltd` : 'Everprime (Pvt) Ltd — Staffing & Event Management'
  }, [title])
}
