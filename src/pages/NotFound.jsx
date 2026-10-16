import { PillLink, usePageMeta } from '../components/ui.jsx'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="glow pointer-events-none absolute inset-0" />
      <div className="container-site relative pb-32 pt-44 text-center">
        <h1 className="h-display">This page doesn't exist.</h1>
        <p className="lede mx-auto mt-6 max-w-md">The link may be out of date. The homepage has everything else.</p>
        <PillLink to="/" className="mt-10">Back to the homepage</PillLink>
      </div>
    </section>
  )
}
