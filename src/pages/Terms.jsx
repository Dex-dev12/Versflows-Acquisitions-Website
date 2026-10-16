import Legal from './Legal.jsx'
import { EMAIL } from '../content.js'

export default function Terms() {
  return (
    <Legal title="Terms of Service" updated="October 2026" description="Terms for using the Versflows website and services.">
      <section>
        <h2>Services</h2>
        <p>
          Versflows provides B2B lead generation, outbound campaigns and related customer acquisition services. The
          scope, fees and timelines for each engagement are set out in a written proposal agreed with the client.
        </p>
      </section>
      <section>
        <h2>Results</h2>
        <p>
          Lead generation outcomes depend on the market, offer, timing and the client's follow-up. We commit to running
          the agreed process carefully and reporting on it transparently, but we do not guarantee a particular number of
          leads, contracts or revenue.
        </p>
      </section>
      <section>
        <h2>Compliance</h2>
        <p>
          Campaigns are run to business contacts with relevant, identified messaging and a functional opt-out. Clients
          agree to provide accurate information about their services and to honour opt-out requests passed on to them.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </section>
    </Legal>
  )
}
