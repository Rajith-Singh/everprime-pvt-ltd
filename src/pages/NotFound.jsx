import { Link } from 'react-router-dom'
import usePageTitle from '../components/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="section notfound">
      <div className="container center-text">
        <span className="eyebrow">404</span>
        <h1>This page can’t be found</h1>
        <p>The page you’re looking for may have moved or no longer exists.</p>
        <Link to="/" className="btn btn-gold">Back to home</Link>
      </div>
    </section>
  )
}
