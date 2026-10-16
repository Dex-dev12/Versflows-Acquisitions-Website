import { usePageMeta } from '../components/ui.jsx'

export default function Legal({ title, updated, description, children }) {
  usePageMeta(title, description)
  return (
    <section className="pb-28 pt-36 sm:pt-44">
      <div className="container-site max-w-3xl">
        <h1 className="h-display">{title}</h1>
        <p className="mt-4 text-[14px] text-faint">Last updated {updated}</p>
        <div className="mt-14 space-y-10 text-[16px] leading-relaxed text-muted [&_a]:text-sky [&_a]:underline [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:tracking-[-0.015em] [&_h2]:text-ink">
          {children}
        </div>
      </div>
    </section>
  )
}
