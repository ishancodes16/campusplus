export function formatDate(iso) {
  const date = new Date(iso)
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateTime(iso) {
  const date = new Date(iso)
  return date.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatEventWhen(date, time) {
  const iso = `${date}T${time}:00`
  const parsed = new Date(iso)
  const day = parsed.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
  const clock = parsed.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `${day} · ${clock}`
}

export function isUpcoming(date) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return new Date(`${date}T00:00:00`) >= today
}

export function generateTrackingId(reports) {
  const year = new Date().getFullYear()
  const used = new Set(
    reports.map((report) => Number(String(report.trackingId).split('-').pop())),
  )
  let next = 1900 + reports.length
  while (used.has(next)) next += 1
  return `CP-${year}-${String(next).padStart(4, '0')}`
}

export function getReportStats(reports) {
  const openStatuses = new Set(['Reported', 'Under Review'])
  return {
    total: reports.length,
    open: reports.filter((report) => openStatuses.has(report.status)).length,
    inProgress: reports.filter((report) => report.status === 'In Progress').length,
    resolved: reports.filter((report) => report.status === 'Resolved').length,
  }
}

export function filterReports(reports, { query, category, status, location }) {
  const needle = query.trim().toLowerCase()
  return reports.filter((report) => {
    const matchesQuery =
      !needle ||
      report.title.toLowerCase().includes(needle) ||
      report.description.toLowerCase().includes(needle) ||
      report.trackingId.toLowerCase().includes(needle) ||
      report.location.toLowerCase().includes(needle)
    const matchesCategory = !category || report.category === category
    const matchesStatus = !status || report.status === status
    const matchesLocation = !location || report.location === location
    return matchesQuery && matchesCategory && matchesStatus && matchesLocation
  })
}

export function validateReportForm(values) {
  const errors = {}
  const title = values.title.trim()
  const description = values.description.trim()

  if (!title) errors.title = 'Give the issue a short, specific title.'
  else if (title.length < 8) errors.title = 'Use at least 8 characters so staff can scan it quickly.'

  if (!description) errors.description = 'Describe what is wrong and where it affects students.'
  else if (description.length < 24) {
    errors.description = 'Add a little more detail (at least 24 characters).'
  }

  if (!values.category) errors.category = 'Choose the closest category.'
  if (!values.location) errors.location = 'Select a campus location.'

  if (values.imageFile) {
    if (!values.imageFile.type.startsWith('image/')) {
      errors.image = 'Only image files can be attached.'
    } else if (values.imageFile.size > 5 * 1024 * 1024) {
      errors.image = 'Keep the photo under 5 MB.'
    }
  }

  return errors
}
