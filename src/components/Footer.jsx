import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="brand-foot">CampusPulse</p>
          <p className="muted">A student-first desk for campus repairs, tracking, and events.</p>
        </div>
        <div className="footer-links">
          <Link to="/report">Report an issue</Link>
          <Link to="/reports">Track reports</Link>
          <Link to="/events">Campus events</Link>
        </div>
      </div>
    </footer>
  )
}
