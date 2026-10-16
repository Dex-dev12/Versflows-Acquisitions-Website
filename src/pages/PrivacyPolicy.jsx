import Legal from './Legal.jsx'
import { EMAIL } from '../content.js'

export default function PrivacyPolicy() {
  return (
    <Legal title="Privacy Policy" updated="October 2026" description="How Versflows handles personal information.">
      <section>
        <h2>Who we are</h2>
        <p>
          Versflows provides lead generation and customer acquisition services to businesses in Australia. This policy
          explains how we handle personal information in line with the Privacy Act 1988 (Cth) and the Australian
          Privacy Principles.
        </p>
      </section>
      <section>
        <h2>What we collect</h2>
        <p>
          When you contact us we collect the details you provide, such as your name, business name, email address,
          website and the information in your message. When we run campaigns for clients, we process business contact
          information about people at target organisations.
        </p>
      </section>
      <section>
        <h2>How we use it</h2>
        <p>
          Enquiry details are used to respond to you and, if we work together, to deliver our services. We do not add
          website enquiries to outbound campaigns and we do not sell personal information.
        </p>
      </section>
      <section>
        <h2>Commercial email</h2>
        <p>
          Campaigns we run identify the sender and include a working way to opt out, as required by the Spam Act 2003.
          Opt-out requests are honoured promptly.
        </p>
      </section>
      <section>
        <h2>Access and contact</h2>
        <p>
          You can ask to access, correct or delete your information by emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </section>
    </Legal>
  )
}
