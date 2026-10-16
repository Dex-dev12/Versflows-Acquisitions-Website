import { CtaBand, PageHero, usePageMeta } from '../components/ui.jsx'

const PRINCIPLES = [
  {
    title: 'Understand the market and the goal',
    text: 'Every engagement starts with your commercial goals, the work you want more of and the buyers who award it. Targeting follows from that, not the other way round.',
  },
  {
    title: 'Build a structured process',
    text: 'Clear stages, defined outputs and agreed criteria. A process that can be repeated and improved, rather than a burst of activity that fades.',
  },
  {
    title: 'Execute and monitor carefully',
    text: 'Campaigns are run consistently and watched closely, from deliverability to the content of every reply.',
  },
  {
    title: 'Improve based on evidence',
    text: 'Changes to targeting, messaging and timing are made because the results support them, and we explain the reasoning.',
  },
  {
    title: 'Communicate clearly',
    text: 'Plain-English reporting, honest assessments and no inflated promises. You always know what is being done and what it is producing.',
  },
]

export default function About() {
  usePageMeta(
    'About',
    'Versflows builds structured, repeatable customer acquisition systems, with B2B lead generation and outbound campaigns as its core service.'
  )

  return (
    <>
      <PageHero title="Structured customer acquisition, run with care.">
        <p>
          Versflows is a customer acquisition and lead generation agency. Our core work is B2B lead generation and
          outbound campaigns: helping businesses identify relevant prospects, reach decision-makers and build a
          systematic way of generating commercial opportunities.
        </p>
      </PageHero>

      <section className="border-t border-white/[0.06] py-24 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <h2 className="h-section lg:sticky lg:top-28">Five principles behind every engagement.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <dl className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="py-8">
                  <dt className="text-[1.375rem] font-medium tracking-[-0.02em]">{p.title}</dt>
                  <dd className="mt-3 max-w-xl text-[16px] leading-relaxed text-muted">{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-night-2/60 py-24 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h-section">B2B first, with selected local work.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
            <p>
              Most of our work is with B2B and commercial businesses: contractors, property and facilities providers,
              specialist service firms and consultancies that want to reach commercial buyers or pursue larger
              contracts.
            </p>
            <p>
              We also work with selected local service businesses on Meta Ads, websites, CRM setup and lead follow-up,
              where a connected enquiry system is the right fit.
            </p>
            <p className="text-ink">
              In both cases the aim is the same: a structured, repeatable way to generate and manage new opportunities.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
