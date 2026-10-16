import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plus } from 'lucide-react'
import { CTA_PRIMARY, SITE_NAME } from '../content.js'

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | B2B Lead Generation`
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])
}

export function PillLink({ to, children, className = '' }) {
  return (
    <Link to={to} className={`btn-pill ${className}`}>
      {children}
      <span className="btn-dot">
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}

export function PageHero({ title, children, actions }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="glow pointer-events-none absolute inset-0" />
      <div className="container-site relative pb-20 pt-32 sm:pb-24 sm:pt-40">
        <h1 className="h-display max-w-4xl">{title}</h1>
        {children && <div className="lede mt-7 max-w-2xl">{children}</div>}
        {actions && <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">{actions}</div>}
      </div>
    </section>
  )
}

export function SectionHeading({ title, children, align = 'left', className = '' }) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      <h2 className="h-section">{title}</h2>
      {children && <p className={`lede mt-5 ${centered ? 'mx-auto max-w-2xl' : ''}`}>{children}</p>}
    </div>
  )
}

const CLIENTS = [
  { name: 'Ground Up Landscaping', src: '/clients/ground-up.png', w: 879, h: 80, cls: 'h-[15px] sm:h-[17px]' },
  { name: 'Fibonacci Landscapes', src: '/clients/fibonacci-mark.png', w: 160, h: 160, cls: 'h-8', label: 'Fibonacci Landscapes' },
  { name: 'Markwicks Services', src: '/clients/markwicks-mark.png', w: 156, h: 160, cls: 'h-8', label: 'Markwicks Services' },
  { name: 'First Impressions Landscaping', src: '/clients/first-impressions-wordmark.png', w: 353, h: 43, cls: 'h-[17px] sm:h-[19px]' },
]

export function LogoStrip() {
  return (
    <section aria-label="Businesses we've worked with" className="border-y border-white/[0.06] bg-night-2/60">
      <div className="container-site flex flex-col gap-8 py-9 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-[13px] text-faint lg:w-44">Businesses we've worked with</p>
        <ul className="grid flex-1 grid-cols-2 items-center gap-x-8 gap-y-8 sm:flex sm:flex-wrap sm:justify-between">
          {CLIENTS.map((c) => (
            <li
              key={c.name}
              className="flex items-center gap-3 opacity-75 transition-opacity duration-300 hover:opacity-100"
            >
              <img src={c.src} alt={c.label ? '' : c.name} width={c.w} height={c.h} loading="lazy" className={`${c.cls} w-auto`} />
              {c.label && <span className="text-[15px] font-medium tracking-[-0.01em] text-ink">{c.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function CtaBand({
  title = 'Ready for a more structured approach to new business?',
  text = 'Tell us who you want to reach and what kind of work you want more of. We will come back with how we would approach it.',
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06]">
      <div aria-hidden="true" className="glow pointer-events-none absolute inset-0 [background-position:center]" />
      <div className="container-site relative py-28 text-center sm:py-36">
        <h2 className="h-section mx-auto max-w-3xl sm:text-5xl">{title}</h2>
        <p className="lede mx-auto mt-6 max-w-xl">{text}</p>
        <PillLink to="/contact" className="mt-10">
          {CTA_PRIMARY}
        </PillLink>
      </div>
    </section>
  )
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {items.map((item, i) => {
        const isOpen = open === i
        const id = `faq-${i}`
        return (
          <div key={item.q}>
            <h3 className="text-[17px] font-medium">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-white"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.q}
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 transition-transform duration-500 ease-expo ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div id={id} hidden={!isOpen} className="max-w-2xl pb-7 pr-12 text-[16px] leading-relaxed text-muted">
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function CheckList({ items, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
          <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
