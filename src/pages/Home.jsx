import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PipelineTrack from '../components/PipelineTrack.jsx'
import { CheckList, CtaBand, LogoStrip, PillLink, usePageMeta } from '../components/ui.jsx'
import { B2B_AUDIENCES, CTA_PRIMARY, CTA_SECONDARY } from '../content.js'

const SYMPTOMS = [
  ['Prospecting happens in bursts', 'Outreach starts when work is quiet and stops when it picks up again.'],
  ['No clear target list', 'Without defined accounts and decision-makers, effort is spread too thin.'],
  ['Follow-up relies on memory', 'Interested prospects go cold because no one owns the next step.'],
]

const DOES = [
  [
    'Identify the right prospects',
    'Research your market, agree what a good-fit account looks like and build a database of organisations that match.',
  ],
  [
    'Reach relevant decision-makers',
    'Find the people responsible for buying your service and contact them with relevant, personalised messaging.',
  ],
  [
    'Organise the follow-up',
    'Planned follow-ups, managed replies and a CRM pipeline so every opportunity has a clear next step.',
  ],
]

const PHASES = [
  { range: 'Stages 1–2', title: 'Target', text: 'Choose the sectors and regions worth pursuing, then build a database of organisations that fit.' },
  { range: 'Stage 3', title: 'Verify', text: 'Identify the people who buy or influence the service and verify their contact details.' },
  { range: 'Stages 4–5', title: 'Reach', text: 'Run personalised outbound campaigns with planned follow-up across the right channels.' },
  { range: 'Stages 6–8', title: 'Hand off', text: 'Qualify replies, move opportunities into your CRM and report on what is working.' },
]

const MARKWICKS_STEPS = [
  'Identify relevant organisations across suitable commercial sectors',
  'Build a targeted prospect database for the region',
  'Identify the decision-makers at each organisation',
  'Prepare outbound messaging relevant to each sector',
  'Execute outreach and planned follow-ups',
  'Handle replies and qualify potential opportunities',
  'Route qualified opportunities into a CRM pipeline',
]

// One layout rail for every section: heading on the left, content on the right.
function Rail({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`border-t border-white/[0.06] py-24 sm:py-28 ${className}`}>
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 className="h-section max-w-md">{title}</h2>
          {intro && <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">{intro}</p>}
        </div>
        <div className="lg:col-span-7">{children}</div>
      </div>
    </section>
  )
}

function Rows({ items }) {
  return (
    <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {items.map(([title, text]) => (
        <li key={title} className="py-6">
          <h3 className="h-card">{title}</h3>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">{text}</p>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  usePageMeta(
    null,
    'Versflows helps businesses build structured lead generation systems through targeted prospect research, outbound campaigns and organised follow-up.'
  )

  return (
    <>
      {/* Hero: statement left, live workflow right */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="glow pointer-events-none absolute inset-0" />
        <div className="container-site relative grid items-center gap-14 pb-20 pt-32 sm:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="lg:col-span-7">
            <h1 className="h-display max-w-2xl">Build a more predictable pipeline for your B2B business.</h1>
            <p className="lede mt-7 max-w-xl">
              Versflows helps businesses build structured lead generation systems through targeted prospect research,
              outbound campaigns and organised follow-up.
            </p>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <PillLink to="/contact">{CTA_PRIMARY}</PillLink>
              <a href="#process" className="btn-ghost">
                {CTA_SECONDARY}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <PipelineTrack className="mx-auto max-w-md lg:ml-auto lg:mr-0" />
          </div>
        </div>
      </section>

      <LogoStrip />

      <Rail
        title="New business shouldn't depend on who has time to prospect."
        intro="For most service businesses, prospecting happens in the gaps: between jobs, after hours or when work slows down. The pipeline rises and falls with how busy the team is."
        className="border-t-0"
      >
        <Rows items={SYMPTOMS} />
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink">
          The answer is rarely more effort. It is a structured process that keeps running whether or not you are free
          that week.
        </p>
      </Rail>

      <Rail
        title="We build and run the system that creates new conversations."
        intro="A managed process covering who to target, how to reach them and what happens when someone replies."
      >
        <Rows items={DOES} />
      </Rail>

      {/* Process: the one full-width sequence */}
      <section id="process" className="scroll-mt-20 border-t border-white/[0.06] bg-night-2/60 py-24 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="h-section">Eight stages, grouped into four phases.</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-muted">
                Every campaign follows the same structure, so you always know what is happening and what comes next.
              </p>
            </div>
            <Link to="/b2b-lead-generation#stages" className="link-sky shrink-0">
              See all eight stages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute left-[26px] top-[26px] hidden h-px bg-gradient-to-r from-white/15 via-white/15 to-sky md:block"
              style={{ right: 'calc(25% - 50px)' }}
            />
            {PHASES.map((p, i) => {
              const last = i === PHASES.length - 1
              return (
                <li key={p.title} className="relative flex gap-5 md:block">
                  <span
                    className={`relative z-10 grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border text-[15px] font-medium tabular ${
                      last ? 'border-sky bg-signal text-white' : 'border-white/15 bg-night text-ink'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="md:mt-6">
                    <h3 className="text-2xl font-medium tracking-[-0.02em]">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      <span className="text-faint">{p.range}. </span>
                      {p.text}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <Rail
        title="B2B lead generation, done for you."
        intro="Our core service. Not a list of contacts and not a software login. We plan, run and manage the campaign, and you take over when there is a real conversation to have."
      >
        <div className="panel grid gap-10 p-8 sm:grid-cols-2 sm:p-10">
          <div>
            <h3 className="h-card">Built for</h3>
            <CheckList
              className="mt-5"
              items={[...B2B_AUDIENCES, 'Businesses pursuing larger contracts, partnerships or commercial buyers']}
            />
          </div>
          <div>
            <h3 className="h-card">What you get</h3>
            <CheckList
              className="mt-5"
              items={[
                'A defined target market and verified prospect database',
                'Personalised outbound campaigns with planned follow-up',
                'Reply handling and qualification against your criteria',
                'A CRM pipeline with notifications when opportunities arrive',
                'Regular reporting and ongoing optimisation',
              ]}
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <PillLink to="/contact">{CTA_PRIMARY}</PillLink>
          <Link to="/b2b-lead-generation" className="btn-ghost">
            How the service works
          </Link>
        </div>
      </Rail>

      <Rail
        title="Example of our process."
        intro="Markwicks Services is a commercial maintenance and grounds business across the Bathurst, Orange and Lithgow region of NSW. This is how its outbound campaign is structured."
      >
        <div className="grid gap-6">
          <ol className="panel p-3">
            {MARKWICKS_STEPS.map((step, i) => (
              <li key={step} className="flex items-baseline gap-5 rounded-xl px-5 py-3.5">
                <span className="w-4 shrink-0 text-[14px] text-faint tabular">{i + 1}</span>
                <span className="text-[16px] leading-snug text-ink">{step}</span>
              </li>
            ))}
          </ol>
          <div>
            <dl className="grid grid-cols-2 gap-x-6 border-y border-white/[0.08] text-[15px] sm:grid-cols-4">
              {[
                ['Client', 'Markwicks Services'],
                ['Sector', 'Commercial maintenance and grounds'],
                ['Approach', 'Managed B2B outbound'],
                ['Status', 'Preparing for launch'],
              ].map(([k, v]) => (
                <div key={k} className="py-3.5">
                  <dt className="text-[13px] text-faint">{k}</dt>
                  <dd className={`mt-0.5 ${k === 'Status' ? 'text-sky' : 'text-ink'}`}>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[13px] leading-relaxed text-faint">
              Outcomes will only be shared once they have been verified.
            </p>
          </div>
        </div>
      </Rail>

      <Rail
        title="Lead generation for local service businesses."
        intro="For landscapers, pool builders and other local providers: social media advertising, web design and follow-up, connected into one combined system."
      >
        <ul className="flex flex-wrap gap-2">
          {['Meta Ads', 'Websites and landing pages', 'Local lead generation', 'CRM setup', 'Lead follow-up automation'].map((s) => (
            <li key={s} className="rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[15px] text-ink">
              {s}
            </li>
          ))}
        </ul>
        <Link to="/additional-services" className="link-sky mt-8">
          View additional services
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Rail>

      <Rail title="A focused acquisition partner.">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          We start by understanding your market and commercial goals, build a process around them, run it carefully and
          improve it based on evidence. Clear communication and honest reporting throughout, without inflated promises.
        </p>
        <Link to="/about" className="link-sky mt-8">
          About our approach
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Rail>

      <CtaBand />
    </>
  )
}
