import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PipelineTrack from '../components/PipelineTrack.jsx'
import { CheckList, CtaBand, LogoStrip, PillLink, Reveal, useInView, usePageMeta } from '../components/ui.jsx'
import { B2B_AUDIENCES, CTA_PRIMARY, CTA_SECONDARY } from '../content.js'

const DOES = [
  ['Identify the right prospects', 'Research your market, agree what a good-fit account looks like and build a database of organisations that match.'],
  ['Reach relevant decision-makers', 'Find the people responsible for buying your service and contact them with relevant, personalised messaging.'],
  ['Organise the follow-up', 'Planned follow-ups, managed replies and a CRM pipeline so every opportunity has a clear next step.'],
]

const PHASES = [
  { title: 'Target', text: 'Pick the sectors and regions worth pursuing and build the account list.' },
  { title: 'Verify', text: 'Find the decision-makers and verify their contact details.' },
  { title: 'Reach', text: 'Personalised outreach with planned follow-up.' },
  { title: 'Hand off', text: 'Qualified replies go straight into your CRM.' },
]

const WHAT_YOU_GET = [
  'A defined target market and verified prospect database',
  'Personalised outbound campaigns with planned follow-up',
  'Reply handling and qualification against your criteria',
  'A CRM pipeline with notifications when opportunities arrive',
  'Regular reporting and ongoing optimisation',
]

const LOCAL_SERVICES = ['Meta Ads', 'Websites and landing pages', 'Local lead generation', 'CRM setup', 'Lead follow-up automation']

const SEGMENTS = [
  ['Verified decision-makers', 'Named contacts with full enrichment, reached with personalised outreach and follow-up.'],
  ['Company inboxes', 'General business email addresses where no decision-maker could be verified.'],
  ['Phone-only accounts', 'Businesses with a phone number only, worked by phone.'],
]

// One layout rail for every section: heading on the left, content on the right.
function Rail({ id, title, intro, action, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-white/[0.06] py-24 sm:py-28 ${className}`}>
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <h2 className="h-section max-w-md">{title}</h2>
          {intro && <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">{intro}</p>}
          {action && <div className="mt-8">{action}</div>}
        </Reveal>
        <div className="lg:col-span-7">{children}</div>
      </div>
    </section>
  )
}

function Rows({ items, variant = 'split' }) {
  return (
    <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {items.map(([title, text], i) => (
        <Reveal
          as="li"
          key={title}
          delay={i * 0.08}
          className={
            variant === 'split'
              ? 'grid gap-1 py-5 sm:grid-cols-[16rem_1fr] sm:gap-8'
              : 'py-6'
          }
        >
          <h3 className={variant === 'split' ? 'text-[17px] font-medium tracking-[-0.01em]' : 'h-card'}>{title}</h3>
          <p className={`text-[15px] leading-relaxed text-muted ${variant === 'split' ? '' : 'mt-2 max-w-xl'}`}>{text}</p>
        </Reveal>
      ))}
    </ul>
  )
}

function ProcessTrack() {
  const [ref, visible] = useInView(0.35)
  return (
    <ol ref={ref} className={`relative mt-14 grid gap-8 md:grid-cols-4 ${visible ? 'is-visible' : ''}`}>
      <span
        aria-hidden="true"
        className="track-line absolute left-[26px] top-[26px] hidden h-px bg-gradient-to-r from-white/15 via-sky/60 to-sky md:block"
        style={{ right: 'calc(25% - 50px)' }}
      />
      {PHASES.map((p, i) => {
        const last = i === PHASES.length - 1
        const lit = visible
        return (
          <li key={p.title} className="relative flex gap-5 md:block">
            <span
              className={`track-node relative z-10 grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border text-[15px] font-medium tabular ${
                lit && last ? 'border-sky bg-signal text-white' : lit ? 'border-sky/70 bg-night text-ink' : 'border-white/15 bg-night text-ink'
              }`}
              style={{ '--d': `${0.3 + i * 0.35}s` }}
            >
              {i + 1}
            </span>
            <Reveal className="md:mt-6" delay={0.2 + i * 0.12}>
              <h3 className="text-2xl font-medium tracking-[-0.02em]">{p.title}</h3>
              <p className="mt-2 max-w-[16rem] text-[15px] leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}

export default function Home() {
  usePageMeta(
    null,
    'Versflows helps Australian B2B businesses build a more predictable pipeline through targeted prospect research, outbound campaigns and organised follow-up.'
  )

  return (
    <>
      {/* Hero: statement left, live workflow right */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="glow glow-drift pointer-events-none absolute inset-0" />
        <div className="container-site relative grid items-center gap-14 pb-20 pt-32 sm:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="hero-in lg:col-span-7">
            <h1 className="h-display max-w-2xl">Build a more predictable pipeline for your B2B business.</h1>
            <p className="lede mt-7 max-w-xl">
              Targeted prospect research, outbound campaigns and organised follow-up, for Australian businesses that
              want new commercial work to come in consistently.
            </p>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <PillLink to="/contact">{CTA_PRIMARY}</PillLink>
              <a href="#process" className="btn-ghost">
                {CTA_SECONDARY}
              </a>
            </div>
          </div>
          <div className="hero-panel lg:col-span-5">
            <PipelineTrack className="mx-auto max-w-md lg:ml-auto lg:mr-0" />
          </div>
        </div>
      </section>

      <LogoStrip />

      <section className="py-24 sm:py-28">
        <Reveal className="container-site text-center">
          <h2 className="h-section mx-auto max-w-3xl">New business shouldn't depend on who has time to prospect.</h2>
          <p className="lede mx-auto mt-6 max-w-2xl">
            For most businesses, prospecting happens in bursts. It starts when work is quiet and stops when it picks up,
            there's no clear target list, and follow-up relies on memory, so interested prospects go cold.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink">
            The fix isn't more effort. It's a process that keeps running when you're busy.
          </p>
        </Reveal>
      </section>

      <Rail
        title="We build and run the system that creates new conversations."
        intro="A managed process covering who to target, how to reach them and what happens when someone replies."
      >
        <Rows items={DOES} variant="stacked" />
        <Reveal as="p" delay={0.3} className="mt-8 max-w-xl text-lg leading-relaxed text-ink">
          The goal isn't just a meeting. It's a real relationship with the buyer, one that can lead to ongoing work and
          contracts that last for years.
        </Reveal>
      </Rail>

      {/* Process */}
      <section id="process" className="scroll-mt-20 border-t border-white/[0.06] bg-night-2/60 py-24 sm:py-28">
        <div className="container-site">
          <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="h-section max-w-xl">How it works.</h2>
            <Link to="/b2b-lead-generation#stages" className="link-sky shrink-0">
              See the full process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <ProcessTrack />
        </div>
      </section>

      <Rail
        title="B2B lead generation, done for you."
        intro="Not a contact list and not a software login. We run the whole campaign; you take the conversations."
      >
        <Reveal className="panel grid gap-10 p-8 sm:grid-cols-2 sm:p-10">
          <div>
            <h3 className="h-card">Built for</h3>
            <CheckList className="mt-5" items={B2B_AUDIENCES} />
          </div>
          <div>
            <h3 className="h-card">What you get</h3>
            <CheckList className="mt-5" items={WHAT_YOU_GET} />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <PillLink to="/contact">{CTA_PRIMARY}</PillLink>
          <Link to="/b2b-lead-generation" className="btn-ghost">
            How the service works
          </Link>
        </Reveal>
      </Rail>

      <Rail
        id="recent-work"
        title="Recent work."
        intro="A commercial grounds maintenance company in the Central West of NSW, looking for more high-ticket, recurring commercial contracts."
        action={
          <Link to="/b2b-lead-generation#stages" className="btn-ghost">
            View our process
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      >
        <Reveal className="panel overflow-hidden">
          <div className="p-8 sm:p-10">
            <h3 className="h-card">The campaign</h3>
            <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted">
              A targeted, multi-channel campaign covering the total addressable market in the region. It is built to book
              opportunities where the client can build relationships and do on-site visits that lead to commercial work.
            </p>
          </div>
          <div className="border-t border-white/[0.08] px-8 pb-1 pt-7 sm:px-10">
            <h3 className="text-[15px] font-medium text-ink">The list, split three ways in a targeting matrix</h3>
          </div>
          <dl className="divide-y divide-white/[0.08] pb-2">
            {SEGMENTS.map(([title, text], i) => (
              <Reveal key={title} delay={0.25 + i * 0.1} className="grid gap-1 px-8 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:px-10">
                <dt className="text-[16px] font-medium tracking-[-0.01em] text-sky">{title}</dt>
                <dd className="text-[15px] leading-relaxed text-muted">{text}</dd>
              </Reveal>
            ))}
          </dl>
        </Reveal>
      </Rail>

      <Rail
        title="Lead generation for local service businesses."
        intro="We also work with local contractors and trades businesses, connecting advertising, web design and follow-up into one system."
      >
        <ul className="flex flex-wrap gap-2">
          {LOCAL_SERVICES.map((s, i) => (
            <Reveal
              as="li"
              key={s}
              delay={i * 0.06}
              className="rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[15px] text-ink"
            >
              {s}
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.35}>
          <Link to="/additional-services" className="link-sky mt-8">
            View additional services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Rail>

      <Rail title="A focused acquisition partner.">
        <Reveal as="p" className="max-w-xl text-lg leading-relaxed text-muted">
          We start by understanding your market and commercial goals, build a process around them, run it carefully and
          improve it based on evidence. Clear communication and honest reporting throughout, without inflated promises.
        </Reveal>
        <Reveal delay={0.15}>
          <Link to="/about" className="link-sky mt-8">
            About our approach
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Rail>

      <CtaBand text="Tell us who you want to reach. We'll come back with how we'd approach it." />
    </>
  )
}
