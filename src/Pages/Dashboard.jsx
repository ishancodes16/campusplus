import Button from '../components/Button'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import EventCard from '../components/EventCard'
import LoadingState from '../components/LoadingState'
import { CompactReportRow } from '../components/ReportCard'
import { useAppData } from '../hooks/useAppData'
import { getReportStats, isUpcoming } from '../utils/reports'

export default function Dashboard() {
  const { reports, events, status, error } = useAppData()

  if (status === 'loading') return <LoadingState label="Preparing your dashboard…" />
  if (status === 'error') return <ErrorState body={error} />

  const stats = getReportStats(reports)
  const recent = [...reports]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 4)
  const upcoming = events.filter((event) => isUpcoming(event.date)).slice(0, 3)

  return (
    <div className="page">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Student desk</p>
          <h1>Campus at a glance</h1>
          <p className="lede">
            Open work, recent movement, and what is happening this month — without opening five
            different groups.
          </p>
        </div>
        <Button to="/report">Report an issue</Button>
      </header>

      <section className="stat-grid" aria-label="Report statistics">
        <Card className="stat-card">
          <p className="stat-label">Total reports</p>
          <p className="stat-value">{stats.total}</p>
        </Card>
        <Card className="stat-card">
          <p className="stat-label">Open</p>
          <p className="stat-value">{stats.open}</p>
          <p className="muted">Reported or under review</p>
        </Card>
        <Card className="stat-card">
          <p className="stat-label">In progress</p>
          <p className="stat-value">{stats.inProgress}</p>
        </Card>
        <Card className="stat-card">
          <p className="stat-label">Resolved</p>
          <p className="stat-value">{stats.resolved}</p>
        </Card>
      </section>

      <div className="dashboard-split">
        <section>
          <div className="section-head tight">
            <h2>Recent reports</h2>
            <Button to="/reports" variant="ghost" size="sm">
              View all
            </Button>
          </div>
          {recent.length === 0 ? (
            <EmptyState
              title="No reports filed yet"
              body="When students submit issues, they will land here with a tracking ID."
              actionLabel="Report an issue"
              actionTo="/report"
            />
          ) : (
            <Card padded={false} className="stack-card">
              {recent.map((report) => (
                <CompactReportRow key={report.id} report={report} />
              ))}
            </Card>
          )}
        </section>

        <aside className="dashboard-aside">
          <Card className="quick-action">
            <p className="eyebrow">Quick action</p>
            <h2>Something broken on the way to class?</h2>
            <p className="muted">
              Category, location, and a short description are enough. A photo helps facilities
              confirm it.
            </p>
            <Button to="/report">Start a report</Button>
          </Card>

          <div className="section-head tight">
            <h2>Upcoming events</h2>
            <Button to="/events" variant="ghost" size="sm">
              Calendar
            </Button>
          </div>
          {upcoming.length === 0 ? (
            <EmptyState
              title="No upcoming events"
              body="When the campus calendar is published, it will appear here."
            />
          ) : (
            <div className="mini-events">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
