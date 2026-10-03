import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AppDataProvider from './context/AppDataProvider'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import Home from './pages/Home'
import ReportDetails from './pages/ReportDetails'
import ReportIssue from './pages/ReportIssue'
import Reports from './pages/Reports'
import ErrorState from './components/ErrorState'

function NotFound() {
  return (
    <div className="page">
      <ErrorState
        title="Page not found"
        body="That route is not part of CampusPulse."
        actionLabel="Go home"
        actionTo="/"
      />
    </div>
  )
}

function App() {
  return (
    <AppDataProvider>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/reports/:id" element={<ReportDetails />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/events" element={<Events />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppDataProvider>
  )
}

export default App
