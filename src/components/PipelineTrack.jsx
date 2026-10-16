import { useEffect, useState } from 'react'

const STATIONS = [
  { label: 'Market', text: 'Sectors and regions agreed' },
  { label: 'Accounts', text: 'Matching organisations listed' },
  { label: 'Decision-makers', text: 'Contacts found and verified' },
  { label: 'Outreach', text: 'Personalised first message sent' },
  { label: 'Follow-up', text: 'Planned, across channels' },
  { label: 'Handoff', text: 'Qualified, into your CRM' },
]

const HOLD_TICKS = 2 // pause on the final station before the cycle restarts

function useStation() {
  const last = STATIONS.length - 1
  const [tick, setTick] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      return
    }
    const id = setInterval(() => setTick((t) => (t + 1) % (STATIONS.length + HOLD_TICKS)), 1500)
    return () => clearInterval(id)
  }, [])

  return reduced ? last : Math.min(tick, last)
}

// A prospect travelling through the outbound pipeline, station by station.
export default function PipelineTrack({ className = '' }) {
  const active = useStation()
  const n = STATIONS.length

  return (
    <figure className={`panel relative overflow-hidden ${className}`}>
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4 text-[13px]">
        <span className="text-muted">Campaign workflow</span>
        <span className="text-faint">Illustrative</span>
      </div>

      <ol className="px-6 py-6 sm:px-7">
        {STATIONS.map((s, i) => {
          const reached = i <= active
          const current = i === active
          return (
            <li key={s.label} className="relative flex gap-5 pb-6 last:pb-0">
              {i < n - 1 && (
                <span aria-hidden="true" className="absolute left-[6px] top-5 h-full w-px bg-white/10">
                  <span
                    className="block w-px bg-sky transition-[height] duration-700 ease-expo"
                    style={{ height: i < active ? '100%' : '0%' }}
                  />
                </span>
              )}
              <span aria-hidden="true" className="relative mt-1 grid h-[13px] w-[13px] shrink-0 place-items-center">
                {current && (
                  <span
                    className="absolute h-16 w-16 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(98,189,255,0.32) 0%, rgba(98,189,255,0) 65%)' }}
                  />
                )}
                <span
                  className={`relative h-[13px] w-[13px] rounded-full border transition-colors duration-500 ${
                    reached ? 'border-sky bg-sky' : 'border-white/25 bg-night'
                  }`}
                />
              </span>
              <div className="min-w-0">
                <p className={`text-[15px] font-medium leading-tight transition-colors duration-500 ${reached ? 'text-ink' : 'text-faint'}`}>
                  {s.label}
                </p>
                <p className={`mt-1 text-[14px] leading-snug transition-colors duration-500 ${reached ? 'text-muted' : 'text-faint'}`}>
                  {s.text}
                </p>
              </div>
            </li>
          )
        })}
      </ol>

      <figcaption className="border-t border-white/[0.06] px-6 py-4 text-[13px] text-faint">
        Every stage planned, tracked and visible to you.
      </figcaption>
    </figure>
  )
}
