import { DataState } from './DataStates.jsx'
import { useCollection } from './useCollection.js'

function Teams() {
  const { data, loading, error } = useCollection('teams')

  return (
    <div className="resource-page"><div className="page-heading"><span className="section-kicker">Collective energy</span><h2>Teams</h2><p>Find your people, share the work, and make progress visible.</p></div>
      {data.length > 0 ? <div className="card-grid">{data.map((team, index) => <article className="info-card" key={team._id || team.id || index}><span className="card-number">0{index + 1}</span><h3>{team.name || 'Training team'}</h3><p>{team.description || 'A focused crew building consistency together.'}</p><small>{team.members?.length || team.memberCount || 0} members</small></article>)}</div> : <DataState loading={loading} error={error} emptyLabel="No teams have been created yet." />}
    </div>
  )
}

export default Teams
