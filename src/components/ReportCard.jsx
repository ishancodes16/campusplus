import { Link } from 'react-router-dom'
import Card from './Card'
import StatusBadge from './StatusBadge'
import { formatDate } from '../utils/reports'

export default function ReportCard({ report }) {
  return (
    <Card to={`/reports/${report.id}`} className="report-card">
      <div className="card-top">
        <StatusBadge status={report.status} />
        <span className="tracking-id">{report.trackingId}</span>
      </div>
      <h3>{report.title}</h3>
      <p className="muted clamp-2">{report.description}</p>
      <dl className="meta-row">
        <div>
          <dt>Category</dt>
          <dd>{report.category}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{report.location}</dd>
        </div>
        <div>
          <dt>Filed</dt>
          <dd>{formatDate(report.createdAt)}</dd>
        </div>
      </dl>
      <span className="card-follow">
        View timeline
        <span aria-hidden="true"> →</span>
      </span>
    </Card>
  )
}

export function ReportCardList({ reports }) {
  return (
    <div className="report-grid">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  )
}

export function CompactReportRow({ report }) {
  return (
    <Link className="compact-row" to={`/reports/${report.id}`}>
      <div>
        <p className="compact-title">{report.title}</p>
        <p className="muted">
          {report.trackingId} · {report.location}
        </p>
      </div>
      <StatusBadge status={report.status} />
    </Link>
  )
}
