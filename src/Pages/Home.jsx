import Button from '../components/Button'
import Card from '../components/Card'

const STEPS = [
  {
    n: '01',
    title: 'Describe the problem',
    body: 'Title, location, and a photo if you have one. Staff should understand it without a follow-up message.',
  },
  {
    n: '02',
    title: 'Receive a tracking ID',
    body: 'Every report gets a CampusPulse ID you can search later — no chasing group chats.',
  },
  {
    n: '03',
    title: 'Watch the status move',
    body: 'Reported, under review, in progress, resolved. The timeline stays with the issue.',
  },
]

const CATEGORY_NOTES = [
  { name: 'Electrical', note: 'Lights, wiring, outages' },
  { name: 'Water', note: 'Leaks, taps, drainage' },
  { name: 'Internet', note: 'Wi-Fi, labs, library' },
  { name: 'Cleanliness', note: 'Bins, washrooms, halls' },
  { name: 'Infrastructure', note: 'Paths, doors, seating' },
  { name: 'Equipment', note: 'Projectors, AC, benches' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">For students, by the campus desk</p>
          <h1>When something on campus breaks, it should not disappear into a chat thread.</h1>
          <p className="lede">
            CampusPulse is the shared ledger for repairs and events. File an issue once, keep the
            tracking ID, and see it through until the corridor lights are actually back on.
          </p>
          <div className="hero-actions">
            <Button to="/report" size="lg">
              Report an issue
            </Button>
            <Button to="/dashboard" variant="secondary" size="lg">
              Open dashboard
            </Button>
          </div>
        </div>
        <Card className="hero-panel" as="aside">
          <p className="panel-kicker">Live desk snapshot</p>
          <ol className="snapshot">
            <li>
              <span>CP-2026-1842</span>
              <strong>Block B corridor lights</strong>
              <em>In progress</em>
            </li>
            <li>
              <span>CP-2026-1831</span>
              <strong>Library Wi-Fi at noon</strong>
              <em>Under review</em>
            </li>
            <li>
              <span>CP-2026-1760</span>
              <strong>Classroom 302 projector</strong>
              <em>Resolved</em>
            </li>
          </ol>
          <p className="panel-note">Sample desk queue — connected to live data in a later phase.</p>
        </Card>
      </section>

      <section className="band">
        <div className="band-grid">
          <article>
            <h2>Built for the walk between classes</h2>
            <p>
              Most campus problems are ordinary: a dark stairwell, a dead projector, a blocked drain.
              They stall because there is no single place to put them. CampusPulse is that place.
            </p>
          </article>
          <ul className="stat-strip">
            <li>
              <strong>One desk</strong>
              <span>Reports, status, and events in the same product.</span>
            </li>
            <li>
              <strong>Four statuses</strong>
              <span>A short, honest pipeline instead of endless comments.</span>
            </li>
            <li>
              <strong>Searchable IDs</strong>
              <span>Find a report the way staff find a work order.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>How a report moves</h2>
          <p className="muted">Three steps. No account wall on this UI preview.</p>
        </div>
        <div className="step-grid">
          {STEPS.map((step) => (
            <Card key={step.n}>
              <p className="step-n">{step.n}</p>
              <h3>{step.title}</h3>
              <p className="muted">{step.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>What you can flag</h2>
          <p className="muted">Categories map to campus teams, not generic tickets.</p>
        </div>
        <div className="chip-grid">
          {CATEGORY_NOTES.map((item) => (
            <Card key={item.name} className="chip-card">
              <h3>{item.name}</h3>
              <p className="muted">{item.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>See something that needs a work order?</h2>
          <p>Take thirty seconds now. The tracking ID is yours to keep.</p>
        </div>
        <Button to="/report" size="lg">
          File a report
        </Button>
      </section>
    </>
  )
}
