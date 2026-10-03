import { useMemo, useState, useEffect } from 'react'
import { INITIAL_EVENTS, INITIAL_REPORTS } from '../data/mockData'
import { generateTrackingId } from '../utils/reports'
import { AppDataContext } from './appDataContext'

export default function AppDataProvider({ children }) {
  const [reports, setReports] = useState(INITIAL_REPORTS)
  const [events] = useState(INITIAL_EVENTS)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setError('')
      setStatus('ready')
    }, 280)
    return () => window.clearTimeout(timer)
  }, [])

  const value = useMemo(
    () => ({
      reports,
      events,
      status,
      error,
      addReport: (payload) => {
        const now = new Date().toISOString()
        const created = {
          id: `rep-${Date.now()}`,
          trackingId: generateTrackingId(reports),
          title: payload.title.trim(),
          description: payload.description.trim(),
          category: payload.category,
          location: payload.location,
          status: 'Reported',
          createdAt: now,
          updatedAt: now,
          imageName: payload.imageName || null,
          timeline: [
            {
              status: 'Reported',
              at: now,
              note: 'Issue submitted by a student.',
            },
          ],
        }
        setReports((current) => [created, ...current])
        return created
      },
      getReportById: (id) => reports.find((report) => report.id === id) || null,
    }),
    [reports, events, status, error],
  )

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
}
