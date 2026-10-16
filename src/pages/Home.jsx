import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PipelineTrack from '../components/PipelineTrack.jsx'
import { CheckList, CtaBand, LogoStrip, PillLink, usePageMeta } from '../components/ui.jsx'
import { B2B_AUDIENCES, CTA_PRIMARY, CTA_SECONDARY } from '../content.js'

const SYMPTOMS = [
  ['Prospecting happens in bursts', 'It starts when work is quiet and stops when it picks up.'],
  ['No clear target list', 'Effort gets spread across the wrong accounts.'],
  ['Follow-up relies on memory', 'Interested prospects go cold.'],
]

const PHASES = [
  { title: 'Target', text: 'Pick the sectors and regions worth pursuing and build the account list.' },
  { title: 'Verify', text: 'Find the decision-makers and verify their contact details.' },
  { title: 'Reach', text: 'Personalised outreach with planned follow-up.' },
  { title: 'Hand off', text: 'Qualified replies go straight into your CRM.' },
]

// One layout rail for every section: heading on the left, content on the right.
function Rail({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-white/[0.06] py-24 sm:py-28 ${className}`}>
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

export default function Home() {
  usePageMeta(
    null,
    'Versflows helps B2B businesses build a more predictable pipeline through targeted prospect research, outbound campaigns and organised follow-up.'
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
              Targeted prospect research, outbound campaigns and organised follow-up, so new commercial opportunities
              come in consistently.
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

      <Rail title="New business shouldn't depend on who has time to prospect." className="border-t-0">
        <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SYMPTOMS.map(([title, text]) => (
            <li key={title} className="grid gap-1 py-5 sm:grid-cols-[16rem_1fr] sm:gap-8">
              <h3 className="text-[17px] font-medium tracking-[-0.01em]">{title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink">
          The fix isn't more effort. It's a process that keeps running when you're busy.
        </p>
      </Rail>

      {/* Process */}
      <section id="process" className="scroll-mt-20 border-t border-white/[0.06] bg-night-2/60 py-24 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="h-section max-w-xl">How it works.</h2>
            <Link to="/b2b-lead-generation#stages" className="link-sky shrink-0">
              See the full process
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
                    <p className="mt-2 max-w-[16rem] text-[15px] leading-relaxed text-muted">{p.text}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <Rail
        title="B2B lead generation, done for you."
        intro="Not a contact list and not a software login. We run the whole campaign; you take the conversations."
      >
        <div className="panel p-8 sm:p-10">
          <h3 className="h-card">Built for</h3>
          <CheckList className="mt-5 space-y-0 sm:columns-2 sm:gap-10 [&>li]:mb-3 [&>li]:break-inside-avoid" items={B2B_AUDIENCES} />
        </div>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <PillLink to="/contact">{CTA_PRIMARY}</PillLink>
          <Link to="/b2b-lead-generation" className="btn-ghost">
            How the service works
          </Link>
        </div>
      </Rail>

      <Rail
        id="recent-work"
        title="Recent work."
        intro="A commercial grounds maintenance company in the Central West of NSW, looking for more high-ticket, recurring commercial contracts."
      >
        <div className="panel overflow-hidden">
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
            {[
              ['Verified decision-makers', 'Named contacts with full enrichment, reached with personalised outreach and follow-up.'],
              ['Company inboxes', 'General business email addresses where no decision-maker could be verified.'],
              ['Phone-only accounts', 'Businesses with a phone number only, worked by phone.'],
            ].map(([title, text]) => (
              <div key={title} className="grid gap-1 px-8 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:px-10">
                <dt className="text-[16px] font-medium tracking-[-0.01em] text-sky">{title}</dt>
                <dd className="text-[15px] leading-relaxed text-muted">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Rail>

      <section className="border-t border-white/[0.06] py-14 sm:py-16">
        <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">Lead generation for local service businesses.</h2>
            <p className="mt-2 text-[15px] text-muted">Social media advertising, web design and follow-up, connected into one system.</p>
          </div>
          <Link to="/additional-services" className="btn-ghost shrink-0 self-start lg:self-auto">
            View additional services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand text="Tell us who you want to reach. We'll come back with how we'd approach it." />
    </>
  )
}
