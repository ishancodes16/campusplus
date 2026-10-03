import Card from './Card'
import { formatEventWhen } from '../utils/reports'

export default function EventCard({ event }) {
  const day = new Date(`${event.date}T00:00:00`).toLocaleDateString('en-IN', {
    day: '2-digit',
  })
  const month = new Date(`${event.date}T00:00:00`).toLocaleDateString('en-IN', {
    month: 'short',
  })

  return (
    <Card className="event-card">
      <div className="event-date" aria-hidden="true">
        <span>{month}</span>
        <strong>{day}</strong>
      </div>
      <div>
        <h3>{event.name}</h3>
        <p className="event-when">{formatEventWhen(event.date, event.time)}</p>
        <p className="muted">{event.location}</p>
        <p>{event.description}</p>
      </div>
    </Card>
  )
}
