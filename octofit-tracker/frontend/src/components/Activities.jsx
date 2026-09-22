import { DataState } from './DataStates.jsx'
import { useCollection } from './useCollection.js'

function Activities() {
  const { data, loading, error } = useCollection('activities')

  return (
    <ResourcePage eyebrow="Movement log" title="Activities" description="Every session, distance, and hard-earned minute in one place.">
      {data.length > 0 ? <div className="data-list">{data.map((activity, index) => <article className="data-row" key={activity._id || activity.id || index}><span className="row-index">{String(index + 1).padStart(2, '0')}</span><strong>{activity.name || activity.type || 'Training session'}</strong><span>{activity.duration ? `${activity.duration} min` : activity.distance || 'Logged activity'}</span><span className="row-meta">{activity.date || activity.createdAt || 'Today'}</span></article>)}</div> : <DataState loading={loading} error={error} emptyLabel="No activities logged yet." />}
    </ResourcePage>
  )
}

function ResourcePage({ eyebrow, title, description, children }) {
  return <div className="resource-page"><div className="page-heading"><span className="section-kicker">{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>{children}</div>
}

export default Activities
