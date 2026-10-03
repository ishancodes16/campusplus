const TONE = {
  Reported: 'badge-slate',
  'Under Review': 'badge-amber',
  'In Progress': 'badge-teal',
  Resolved: 'badge-green',
}

export default function StatusBadge({ status }) {
  return <span className={`status-badge ${TONE[status] || 'badge-slate'}`}>{status}</span>
}
