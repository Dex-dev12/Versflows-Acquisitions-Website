import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { usePageMeta } from '../components/ui.jsx'
import { CTA_PRIMARY, EMAIL } from '../content.js'

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
  { name: 'business', label: 'Business name', type: 'text', autoComplete: 'organization', required: true },
  { name: 'email', label: 'Email address', type: 'email', autoComplete: 'email', required: true },
  { name: 'website', label: 'Website', type: 'url', autoComplete: 'url', required: false, placeholder: 'https://' },
]

const EMPTY = { name: '', business: '', email: '', website: '', goals: '', notes: '' }

const NEXT_STEPS = [
  'We review your enquiry and website.',
  'We reply to arrange a short call if it looks like a fit.',
  'On the call, we discuss your market, goals and a possible approach.',
]

export default function Contact() {
  usePageMeta(
    'Contact',
    'Discuss your growth goals with Versflows. Tell us what you are looking to achieve.'
  )

  const [form, setForm] = useState(EMPTY)
  const [opened, setOpened] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // No form backend is connected yet, so submitting composes the enquiry in the visitor's email app.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Enquiry from ${form.business || form.name}`
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Email: ${form.email}`,
      `Website: ${form.website || 'Not provided'}`,
      '',
      'What we want to achieve:',
      form.goals,
      '',
      'Additional information:',
      form.notes || 'None',
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  const inputCls =
    'mt-2 block w-full rounded-xl border border-white/10 bg-[#12151C] px-4 py-3 text-[16px] text-ink placeholder:text-faint/80 transition-colors focus:border-sky focus:bg-[#151924] focus:outline-none'

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="glow pointer-events-none absolute inset-x-0 top-0 h-[640px]" />
      <div className="container-site relative grid gap-14 pb-28 pt-36 sm:pt-44 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h1 className="h-display">Discuss your growth goals.</h1>
          <p className="lede mt-7">
            Tell us what you're looking to achieve. We'll reply with an honest view of whether we can help and how
            we'd approach it.
          </p>

          <div className="mt-12 border-t border-white/[0.08] pt-8">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 text-xl font-medium transition-colors hover:text-sky">
              <Mail className="h-5 w-5 text-sky" />
              {EMAIL}
            </a>
          </div>

          <div className="mt-10 border-t border-white/[0.08] pt-8">
            <h2 className="h-card">What happens next</h2>
            <ol className="mt-5 space-y-4">
              {NEXT_STEPS.map((step, i) => (
                <li key={step} className="flex gap-4 text-[15px] leading-relaxed text-muted">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/15 text-[12px] text-ink tabular">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <form onSubmit={handleSubmit} className="panel p-6 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="text-[14px] font-medium text-ink">
                    {f.label}{' '}
                    {f.required ? (
                      <span className="text-sky" aria-hidden="true">*</span>
                    ) : (
                      <span className="font-normal text-faint">(optional)</span>
                    )}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={set(f.name)}
                    className={inputCls}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <label htmlFor="goals" className="text-[14px] font-medium text-ink">
                What are you looking to achieve? <span className="text-sky" aria-hidden="true">*</span>
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={4}
                value={form.goals}
                onChange={set('goals')}
                placeholder="For example: win more commercial maintenance contracts across regional NSW."
                className={`${inputCls} resize-y`}
              />
            </div>

            <div className="mt-6">
              <label htmlFor="notes" className="text-[14px] font-medium text-ink">
                Any additional information? <span className="font-normal text-faint">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={form.notes}
                onChange={set('notes')}
                className={`${inputCls} resize-y`}
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <p className="text-[13px] leading-relaxed text-faint xl:max-w-[14rem]">
                Sending opens your email app with these details filled in.
              </p>
              <button type="submit" className="btn-pill self-start">
                {CTA_PRIMARY}
                <span className="btn-dot">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>

            {opened && (
              <p role="status" className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-[15px] leading-relaxed text-muted">
                Your email app should now be open with your enquiry ready to send. If nothing opened, email us directly
                at{' '}
                <a href={`mailto:${EMAIL}`} className="text-sky underline">
                  {EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
