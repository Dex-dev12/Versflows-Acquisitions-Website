import { CheckList, CtaBand, Faq, PageHero, PillLink, SectionHeading, usePageMeta } from '../components/ui.jsx'
import { B2B_AUDIENCES, CTA_PRIMARY, CTA_SECONDARY, STAGES } from '../content.js'

const DELIVERABLES = [
  ['Market and targeting plan', 'The sectors, regions and account criteria we will pursue, agreed with you before anything is built.'],
  ['Verified prospect database', 'Target organisations and decision-makers, with contact details verified before use.'],
  ['Sending infrastructure', 'Dedicated domains and inboxes, configured and warmed, so your main domain is protected.'],
  ['Campaign messaging', 'Sector-specific outbound copy and follow-up sequences, approved by you before launch.'],
  ['Managed replies', 'Every reply read, answered where appropriate and qualified against your criteria.'],
  ['CRM pipeline', 'Pipeline stages, notifications and opportunity records with the conversation attached.'],
  ['Reporting', 'Regular updates on activity, replies and pipeline, with recommended next steps.'],
]

const WE_HANDLE = [
  'Market research and account selection',
  'Database building and contact verification',
  'Sending infrastructure and deliverability',
  'Writing, sending and following up',
  'Reply handling and qualification',
  'CRM setup, notifications and reporting',
]

const YOU_PROVIDE = [
  'A clear view of the work you want more of and your capacity for it',
  'Examples of good clients, past projects and what sets you apart',
  'Approval of targeting and messaging before launch',
  'Answers to the occasional prospect question we cannot answer for you',
  'Prompt follow-up when a qualified opportunity is handed over',
]

const INTEREST_FLOW = [
  ['Reply received', 'A prospect responds with interest or a question.'],
  ['Qualified', 'We check fit against the criteria agreed with you and answer simple questions.'],
  ['Handed over', 'An opportunity is created in your CRM and you are notified with the full context.'],
  ['You take it forward', 'You run the call, site visit or quote. We keep working the rest of the list.'],
]

const FAQS = [
  {
    q: 'Is this just a list of contacts?',
    a: 'No. A database is one part of the service. We also run the campaigns, manage follow-up and replies, and hand qualified opportunities into your CRM. You are buying a managed process, not a spreadsheet or software access.',
  },
  {
    q: 'Do you guarantee a number of leads or contracts?',
    a: 'No. Results depend on your market, offer and capacity, and anyone promising a fixed number is guessing. What we commit to is a structured, well-run process, transparent reporting and steady improvement based on what the data shows.',
  },
  {
    q: 'How much of my time does it take?',
    a: 'Most of your time goes into the early stages: agreeing the target market and approving messaging. After launch, your main job is following up the opportunities we hand over.',
  },
  {
    q: 'Will outreach affect my main email domain?',
    a: 'Campaigns are sent from separate domains and inboxes set up for outbound, so your main business email is kept apart from campaign sending.',
  },
  {
    q: 'Is cold outreach legal in Australia?',
    a: 'Business-to-business outreach is permitted when it is relevant to the recipient’s role, clearly identifies the sender and includes a working way to opt out, as set out in the Spam Act 2003. Every campaign we run is built around those requirements.',
  },
]

export default function LeadGeneration() {
  usePageMeta(
    'B2B Lead Generation',
    'A managed B2B lead generation service: prospect research, verified decision-maker databases, personalised outbound campaigns, follow-up, reply qualification and CRM handoff.'
  )

  return (
    <>
      <PageHero
        title="A managed outbound system for reaching commercial buyers."
        actions={
          <>
            <PillLink to="/contact">{CTA_PRIMARY}</PillLink>
            <a href="#stages" className="btn-ghost">
              {CTA_SECONDARY}
            </a>
          </>
        }
      >
        <p>
          We research your market, build a verified database of decision-makers, run personalised campaigns and manage
          every reply, so new commercial opportunities arrive in a structured, trackable way.
        </p>
      </PageHero>

      {/* Who it suits */}
      <section className="border-y border-white/[0.06] bg-night-2/60">
        <div className="container-site flex flex-col gap-6 py-9 lg:flex-row lg:items-center lg:gap-12">
          <p className="shrink-0 text-[13px] text-faint lg:w-44">Suited to</p>
          <ul className="grid flex-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {B2B_AUDIENCES.map((a) => (
              <li key={a} className="flex items-baseline gap-3 text-[15px] text-ink">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 -translate-y-[2px] rounded-full bg-sky" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Eight stages */}
      <section id="stages" className="scroll-mt-20 py-24 sm:py-28">
        <div className="container-site">
          <SectionHeading title="Eight stages, from market selection to handoff.">
            Each stage has a defined output, so you can see exactly where the campaign is and what happens next.
          </SectionHeading>

          <ol className="relative mt-16 max-w-5xl">
            {STAGES.map((s, i) => (
              <li key={s.title} className="relative grid gap-5 pb-12 pl-14 last:pb-0 sm:pl-20 lg:grid-cols-12 lg:gap-10">
                {i < STAGES.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute left-[19px] top-10 h-full w-px sm:left-[23px] sm:top-12 ${
                      i === STAGES.length - 2 ? 'bg-gradient-to-b from-white/15 to-sky' : 'bg-white/15'
                    }`}
                  />
                )}
                <span
                  className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border text-[14px] font-medium tabular sm:h-12 sm:w-12 ${
                    i === STAGES.length - 1 ? 'border-sky bg-signal text-white' : 'border-white/15 bg-night text-ink'
                  }`}
                >
                  {i + 1}
                </span>
                <div className="lg:col-span-6">
                  <h3 className="text-[1.375rem] font-medium leading-snug tracking-[-0.02em] sm:pt-2">{s.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted">{s.text}</p>
                </div>
                <div className="panel p-6 lg:col-span-6">
                  <CheckList items={s.points} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-white/[0.06] bg-night-2/60 py-24 sm:py-28">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h2 className="h-section max-w-md">What you receive.</h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">
                Everything is set up around your business and documented, so you can see what has been built and why.
              </p>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink">
                A managed service, not a list for sale or a software subscription.
              </p>
            </div>
            <dl className="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-7">
              {DELIVERABLES.map(([title, text]) => (
                <div key={title} className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8">
                  <dt className="text-[17px] font-medium tracking-[-0.01em]">{title}</dt>
                  <dd className="text-[15px] leading-relaxed text-muted">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Working relationship */}
      <section className="py-24 sm:py-28">
        <div className="container-site">
          <SectionHeading title="Clear responsibilities on both sides.">
            Outbound works best when the division of work is agreed upfront. This is how it is split.
          </SectionHeading>
          <div className="mt-16 grid max-w-5xl gap-4 lg:grid-cols-2">
            <div className="panel p-8 sm:p-10">
              <h3 className="text-2xl font-medium tracking-[-0.02em]">We handle</h3>
              <CheckList className="mt-6" items={WE_HANDLE} />
            </div>
            <div className="rounded-panel border border-white/[0.08] p-8 sm:p-10">
              <h3 className="text-2xl font-medium tracking-[-0.02em]">You provide</h3>
              <CheckList className="mt-6" items={YOU_PROVIDE} />
            </div>
          </div>
        </div>
      </section>

      {/* When a prospect replies */}
      <section className="border-t border-white/[0.06] py-24 sm:py-28">
        <div className="container-site">
          <SectionHeading title="What happens when someone shows interest.">
            Interested prospects never sit in an inbox waiting. Each one moves through the same short path.
          </SectionHeading>
          <ol className="relative mt-16 grid max-w-6xl gap-10 md:grid-cols-4 md:gap-6">
            <span aria-hidden="true" className="absolute left-[7px] top-[7px] hidden h-px bg-gradient-to-r from-white/15 to-sky md:block" style={{ right: 'calc(25% - 25px)' }} />
            {INTEREST_FLOW.map(([title, text], i) => {
              const last = i === INTEREST_FLOW.length - 1
              return (
                <li key={title} className="relative">
                  <span
                    aria-hidden="true"
                    className={`relative z-10 block h-[15px] w-[15px] rounded-full border ${
                      last ? 'border-sky bg-sky' : 'border-white/30 bg-night'
                    }`}
                  />
                  <h3 className="h-card mt-5">{title}</h3>
                  <p className="mt-2 max-w-[16rem] text-[15px] leading-relaxed text-muted">{text}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Reporting */}
      <section className="border-t border-white/[0.06] py-24 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h-section">Decisions based on evidence.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
            <p>
              You receive regular, plain-English reporting on what was sent, who replied, what they said and where each
              opportunity sits in the pipeline.
            </p>
            <p>
              Between rounds we adjust targeting, messaging and timing based on those results, and explain what we
              changed and why. The aim is a process that becomes more consistent over time, not a one-off campaign.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] py-24 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <h2 className="h-section">Fair questions.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">Anything else is worth asking on a call.</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <CtaBand title="Discuss a B2B lead generation campaign for your business." />
    </>
  )
}
