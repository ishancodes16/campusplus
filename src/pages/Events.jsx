import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import EventCard from '../components/EventCard'
import LoadingState from '../components/LoadingState'
import { useAppData } from '../hooks/useAppData'
import { isUpcoming } from '../utils/reports'

export default function Events() {
  const { events, status, error } = useAppData()

  if (status === 'loading') return <LoadingState label="Loading campus events…" />
  if (status === 'error') return <ErrorState body={error} />

  const upcoming = [...events]
    .filter((event) => isUpcoming(event.date))
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))

  return (
    <div className="page">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Campus calendar</p>
          <h1>Upcoming events</h1>
          <p className="lede">
            Workshops, meets, and open houses — listed with time and place, not buried in stories.
          </p>
        </div>
      </header>

      {upcoming.length === 0 ? (
        <EmptyState
          title="No events on the board"
          body="When student clubs and administration publish dates, they will appear here."
        />
      ) : (
        <div className="event-list">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}
