import { useMemo, useState } from 'react'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import FormField, { Select, TextInput } from '../components/FormField'
import LoadingState from '../components/LoadingState'
import { ReportCardList } from '../components/ReportCard'
import { useAppData } from '../hooks/useAppData'
import { CATEGORIES, LOCATIONS, STATUSES } from '../data/mockData'
import { filterReports } from '../utils/reports'

export default function Reports() {
  const { reports, status, error } = useAppData()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [reportStatus, setReportStatus] = useState('')
  const [location, setLocation] = useState('')

  const filtered = useMemo(
    () =>
      filterReports(reports, {
        query,
        category,
        status: reportStatus,
        location,
      }),
    [reports, query, category, reportStatus, location],
  )

  if (status === 'loading') return <LoadingState label="Loading reports…" />
  if (status === 'error') return <ErrorState body={error} />

  const hasFilters = query || category || reportStatus || location

  return (
    <div className="page">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Work orders</p>
          <h1>Campus reports</h1>
          <p className="lede">
            Search by title, location, or tracking ID. Narrow by category, status, or building.
          </p>
        </div>
      </header>

      <form className="filter-bar" onSubmit={(event) => event.preventDefault()}>
        <FormField id="search" label="Search">
          <TextInput
            id="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Title, tracking ID, or place"
          />
        </FormField>
        <FormField id="filter-category" label="Category">
          <Select
            id="filter-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">All categories</option>
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField id="filter-status" label="Status">
          <Select
            id="filter-status"
            value={reportStatus}
            onChange={(event) => setReportStatus(event.target.value)}
          >
            <option value="">All statuses</option>
            {STATUSES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField id="filter-location" label="Location">
          <Select
            id="filter-location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          >
            <option value="">All locations</option>
            {LOCATIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </FormField>
      </form>

      <p className="result-count">
        {filtered.length} {filtered.length === 1 ? 'report' : 'reports'}
        {hasFilters ? ' match these filters' : ' on the desk'}
      </p>

      {filtered.length === 0 ? (
        <EmptyState
          title={hasFilters ? 'No reports match' : 'No reports yet'}
          body={
            hasFilters
              ? 'Try a broader search, or clear one of the filters.'
              : 'Student issues will collect here once they are filed.'
          }
          actionLabel="Report an issue"
          actionTo="/report"
        />
      ) : (
        <ReportCardList reports={filtered} />
      )}
    </div>
  )
}
