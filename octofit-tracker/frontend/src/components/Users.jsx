import { DataState } from './DataStates.jsx'
import { useCollection } from './useCollection.js'

function Users() {
  const { data, loading, error } = useCollection('users')

  return (
    <div className="resource-page"><div className="page-heading"><span className="section-kicker">The community</span><h2>Users</h2><p>Meet the athletes turning intention into a daily practice.</p></div>
      {data.length > 0 ? <div className="user-grid">{data.map((user, index) => <article className="user-card" key={user._id || user.id || index}><div className="avatar">{(user.name || user.username || 'A').charAt(0).toUpperCase()}</div><div><strong>{user.name || user.username || 'Athlete'}</strong><small>{user.email || user.role || 'OctoFit member'}</small></div></article>)}</div> : <DataState loading={loading} error={error} emptyLabel="No users are available yet." />}
    </div>
  )
}

export default Users
