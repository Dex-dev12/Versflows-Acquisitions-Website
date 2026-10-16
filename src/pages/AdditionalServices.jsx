import { Link } from 'react-router-dom'
import { CheckList, CtaBand, PageHero, PillLink, SectionHeading, usePageMeta } from '../components/ui.jsx'
import { CTA_PRIMARY } from '../content.js'

const SERVICES = [
  {
    title: 'Meta Ads management',
    text: 'Facebook and Instagram campaigns aimed at people in your service area who are planning a project.',
    points: ['Audience and location targeting', 'Ad creative and copy', 'Ongoing budget and performance management'],
  },
  {
    title: 'Website and landing page development',
    text: 'Fast, clear pages built to turn visitors into enquiries, whether for a full website or a single campaign.',
    points: ['Service and location pages', 'Campaign-specific landing pages', 'Enquiry forms connected to your CRM'],
  },
  {
    title: 'Local lead generation',
    text: 'Making sure people searching nearby can find you and get in touch, alongside paid campaigns.',
    points: ['Google Business Profile setup and upkeep', 'Local search foundations', 'Review requests after completed jobs'],
  },
  {
    title: 'CRM setup and automation',
    text: 'One place to see every enquiry, where it came from and what needs to happen next.',
    points: ['Pipeline built around how you quote and book', 'Automated reminders and tasks', 'Simple reporting on enquiry sources'],
  },
  {
    title: 'Lead capture, routing and follow-up',
    text: 'Fast, consistent responses so enquiries are not lost while you are on site.',
    points: ['Instant notification of new enquiries', 'Automatic SMS and email follow-up', 'Routing to the right person or calendar'],
  },
]

const FLOW = ['Meta Ads', 'Landing page', 'Lead capture', 'CRM and routing', 'Follow-up', 'Booked quote']

export default function AdditionalServices() {
  usePageMeta(
    'Additional Services',
    'Meta Ads, websites, landing pages, CRM setup and lead follow-up automation for selected local service businesses such as landscapers and pool builders.'
  )

  return (
    <>
      <PageHero title="Lead generation for local service businesses." actions={<PillLink to="/contact">{CTA_PRIMARY}</PillLink>}>
        <p>
          For landscapers, pool builders and other local providers that want more project enquiries, we connect
          social media advertising, web design and follow-ups into one combined system.
        </p>
        <p className="mt-4 text-[16px] text-faint">
          Our main focus is{' '}
          <Link to="/b2b-lead-generation" className="text-sky underline">
            B2B lead generation
          </Link>
          . These services are offered alongside it where they are a good fit.
        </p>
      </PageHero>

      {/* The connected flow */}
      <section className="border-y border-white/[0.06] bg-night-2/60 py-16 sm:py-20">
        <div className="container-site">
          <h2 className="text-[15px] text-muted">From first click to booked quote</h2>
          <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3">
            {FLOW.map((step, i) => {
              const last = i === FLOW.length - 1
              return (
                <li key={step} className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-4 py-2 text-[15px] font-medium ${
                      last ? 'bg-signal text-white' : 'border border-white/[0.12] bg-white/[0.04] text-ink'
                    }`}
                  >
                    {step}
                  </span>
                  {!last && <span aria-hidden="true" className="h-px w-5 bg-white/20" />}
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-28">
        <div className="container-site">
          <SectionHeading title="What we can set up for you.">
            Each service works on its own, but they are most useful when they are connected.
          </SectionHeading>
          <div className="mt-16 max-w-5xl divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {SERVICES.map((s) => (
              <div key={s.title} className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-6">
                  <h3 className="text-[1.375rem] font-medium tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted">{s.text}</p>
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                  <CheckList items={s.points} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it suits */}
      <section className="border-t border-white/[0.06] py-24 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h-section">Established local businesses ready for more project work.</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-muted">
              These services suit businesses with a proven service, capacity to take on more work and a willingness to
              respond quickly to new enquiries. For example:
            </p>
            <CheckList
              className="mt-8"
              items={[
                'Landscapers and landscape construction businesses',
                'Pool builders and outdoor living specialists',
                'Other local trades and service providers with higher-value projects',
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Want more project enquiries from your local area?"
        text="Tell us about your business, your service area and the type of work you want more of."
      />
    </>
  )
}
