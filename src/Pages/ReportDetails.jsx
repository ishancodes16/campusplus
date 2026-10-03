import { useLocation, useParams } from 'react-router-dom'
import Card from '../components/Card'
import ErrorState from '../components/ErrorState'
import LoadingState from '../components/LoadingState'
import StatusBadge from '../components/StatusBadge'
import { useAppData } from '../hooks/useAppData'
import { formatDateTime } from '../utils/reports'

export default function ReportDetails() {
  const { id } = useParams()
  const location = useLocation()
  const { getReportById, status } = useAppData()

  if (status === 'loading') return <LoadingState label="Opening report…" />

  const report = getReportById(id)
  if (!report) {
    return (
      <ErrorState
        title="Report not found"
        body="That tracking record is not on this desk. It may have been typed incorrectly."
        actionLabel="Browse reports"
        actionTo="/reports"
      />
    )
  }

  const submitted = Boolean(location.state?.justSubmitted)

  return (
    <div className="page page-narrow">
      {submitted ? (
        <p className="banner-success" role="status">
          Report filed. Keep this tracking ID: <strong>{report.trackingId}</strong>
        </p>
      ) : null}

      <header className="page-hero">
        <div>
          <p className="eyebrow">{report.category}</p>
          <h1>{report.title}</h1>
          <p className="lede">{report.description}</p>
        </div>
        <StatusBadge status={report.status} />
      </header>

      <div className="detail-grid">
        <Card>
          <h2 className="card-heading">Issue information</h2>
          <dl className="detail-list">
            <div>
              <dt>Tracking ID</dt>
              <dd className="tracking-id">{report.trackingId}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>
                <StatusBadge status={report.status} />
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{report.location}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{report.category}</dd>
            </div>
            <div>
              <dt>Filed</dt>
              <dd>{formatDateTime(report.createdAt)}</dd>
            </div>
            <div>
              <dt>Last update</dt>
              <dd>{formatDateTime(report.updatedAt)}</dd>
            </div>
            <div>
              <dt>Photo</dt>
              <dd>{report.imageName || 'None attached'}</dd>
            </div>
          </dl>
        </Card>

        <Card>
          <h2 className="card-heading">Timeline</h2>
          <ol className="timeline">
            {report.timeline.map((item) => (
              <li key={`${item.status}-${item.at}`}>
                <span className="timeline-dot" aria-hidden="true" />
                <div>
                  <p className="timeline-status">{item.status}</p>
                  <p className="muted">{formatDateTime(item.at)}</p>
                  <p>{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </div>
  )
}
