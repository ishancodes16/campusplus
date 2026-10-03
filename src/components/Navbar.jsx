import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/reports', label: 'Reports' },
  { to: '/events', label: 'Events' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="nav-inner">
        <NavLink className="brand" to="/" aria-label="CampusPulse home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            CP
          </span>
          <span className="brand-text">
            <strong>CampusPulse</strong>
            <span>Issue & event hub</span>
          </span>
        </NavLink>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>

        <nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/report" size="sm" className="nav-cta" onClick={closeMenu}>
            Report an issue
          </Button>
        </nav>
      </div>
    </header>
  )
}
