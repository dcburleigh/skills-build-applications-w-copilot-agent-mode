import { DataState } from './DataStates.jsx'
import { useCollection } from './useCollection.js'

function Leaderboard() {
  const { data, loading, error } = useCollection('leaderboard')

  return (
    <div className="resource-page"><div className="page-heading"><span className="section-kicker">Competitive edge</span><h2>Leaderboard</h2><p>Small improvements add up. See who is setting the pace.</p></div>
      {data.length > 0 ? <div className="rank-list">{data.map((entry, index) => <article className="rank-row" key={entry._id || entry.id || index}><span className="rank-number">{String(entry.rank || index + 1).padStart(2, '0')}</span><div><strong>{entry.name || entry.username || 'Athlete'}</strong><small>{entry.team || 'OctoFit community'}</small></div><b>{entry.points || entry.score || 0}<small> pts</small></b></article>)}</div> : <DataState loading={loading} error={error} emptyLabel="Leaderboard data is ready for your first challenge." />}
    </div>
  )
}

export default Leaderboard
