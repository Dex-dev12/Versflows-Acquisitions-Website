import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { CTA_PRIMARY, EMAIL, NAV_LINKS, SITE_NAME } from '../content.js'
import { PillLink } from './ui.jsx'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-night"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        solid ? 'border-b border-white/[0.06] bg-night/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container-site grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-6">
        <Link to="/" aria-label={`${SITE_NAME} home`} className="shrink-0">
          <img
            src="/brand/versflows-acquisitions-light.png"
            alt={SITE_NAME}
            width="596"
            height="96"
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav aria-label="Main" className="hidden justify-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[14px] transition-colors duration-300 ${isActive ? 'text-ink' : 'text-muted hover:text-ink'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="col-start-3 flex items-center justify-end gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-3 rounded-full bg-ink py-1 pl-4 pr-1 text-[14px] font-medium text-night transition-colors hover:bg-white lg:inline-flex"
          >
            Let's talk
            <span className="grid h-7 w-7 place-items-center rounded-full bg-signal text-white">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <button
            type="button"
            className="-mr-2 grid h-11 w-11 place-items-center rounded-full text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className="border-t border-white/[0.06] bg-night lg:hidden">
        <nav aria-label="Mobile" className="container-site flex min-h-[calc(100dvh-72px)] flex-col pb-10 pt-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-white/[0.06] py-5 text-2xl font-medium tracking-[-0.02em] ${
                  isActive ? 'text-sky' : 'text-ink'
                }`
              }
            >
              {link.label}
              <ArrowRight className="h-5 w-5 text-faint" />
            </NavLink>
          ))}
          <PillLink to="/contact" className="mt-auto w-full">
            {CTA_PRIMARY}
          </PillLink>
        </nav>
      </div>
    </header>
  )
}

const FOOTER_COLS = [
  {
    title: 'Services',
    links: [
      { label: 'B2B Lead Generation', to: '/b2b-lead-generation' },
      { label: 'Our process', to: '/b2b-lead-generation#stages' },
      { label: 'Additional Services', to: '/additional-services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
]

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07080C]">
      <div className="container-site grid gap-14 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="max-w-xs text-lg leading-snug text-ink">
            Start with a conversation about who you want to reach.
          </p>
          <PillLink to="/contact" className="mt-7">
            Let's talk
          </PillLink>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-medium text-faint">{col.title}</p>
              <ul className="mt-4 space-y-3 text-[15px]">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-muted transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[13px] font-medium text-faint">Contact</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li>
                <a href={`mailto:${EMAIL}`} className="text-muted transition-colors hover:text-ink">
                  {EMAIL}
                </a>
              </li>
              <li className="text-muted">Australia-wide</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
      <div className="container-site flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <img
          src="/brand/versflows-acquisitions-light.png"
          alt={SITE_NAME}
          width="596"
          height="96"
          loading="lazy"
          className="h-6 w-auto self-start opacity-80 sm:self-auto"
        />
        <p className="text-[13px] text-faint">© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
      </div>
      </div>
    </footer>
  )
}
