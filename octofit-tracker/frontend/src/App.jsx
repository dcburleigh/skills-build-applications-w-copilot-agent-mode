import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  { label: 'Overview', path: '/', icon: '◈' },
  { label: 'Activities', path: '/activities', icon: '↗' },
  { label: 'Leaderboard', path: '/leaderboard', icon: '⌁' },
  { label: 'Teams', path: '/teams', icon: '◎' },
  { label: 'Users', path: '/users', icon: '◌' },
  { label: 'Workouts', path: '/workouts', icon: '✦' },
]

function App() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME
  const apiBaseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000'

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <img src="/octofitapp-small.png" alt="OctoFit" className="brand-mark" />
          <div><strong>OctoFit</strong><span>TRACKER / 01</span></div>
        </div>
        <div className="side-label">Workspace</div>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'} className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>{item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span className={codespaceName ? 'status-dot online' : 'status-dot'} />
          <div><span className="side-label">API connection</span><small>{codespaceName ? 'Codespaces' : 'Local development'}</small></div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div><span className="eyebrow">Performance dashboard</span><h1>Move with purpose.</h1></div>
          <div className="api-pill" title={apiBaseUrl}><span className={codespaceName ? 'status-dot online' : 'status-dot'} />{codespaceName ? 'Cloud API' : 'Local API'}</div>
        </header>
        {!codespaceName && <div className="config-notice" role="status"><strong>Local API fallback active.</strong> Define <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to use the Codespaces API.</div>}
        <section className="content-frame">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

function Overview() {
  return (
    <div className="overview-page">
      <div className="overview-intro"><span className="section-kicker">Today / 22 September</span><h2>Your training, at a glance.</h2><p>Keep momentum visible across every team, workout, and win.</p></div>
      <div className="overview-grid">
        <MetricCard label="Active athletes" value="24" note="+12% this week" accent="coral" />
        <MetricCard label="Sessions logged" value="86" note="Across 5 teams" accent="blue" />
        <MetricCard label="Team points" value="1,284" note="Ranked #02" accent="gold" />
      </div>
      <div className="overview-banner"><div><span className="section-kicker">Next up</span><h3>Make the next rep count.</h3><p>Browse suggested workouts and keep your weekly streak moving.</p></div><NavLink className="text-link" to="/workouts">Explore workouts <span>↗</span></NavLink></div>
    </div>
  )
}

function MetricCard({ label, value, note, accent }) {
  return <article className={`metric-card ${accent}`}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>
}

export default App
