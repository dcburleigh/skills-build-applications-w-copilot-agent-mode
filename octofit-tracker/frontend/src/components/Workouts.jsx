import { DataState } from './DataStates.jsx'
import { useCollection } from './useCollection.js'

function Workouts() {
  const { data, loading, error } = useCollection('workouts')

  return (
    <div className="resource-page"><div className="page-heading"><span className="section-kicker">Built for momentum</span><h2>Workouts</h2><p>Choose a challenge that meets you where you are today.</p></div>
      {data.length > 0 ? <div className="workout-list">{data.map((workout, index) => <article className="workout-row" key={workout._id || workout.id || index}><span className="workout-type">{workout.type || 'TRAIN'}</span><div><h3>{workout.name || workout.title || 'Focused workout'}</h3><p>{workout.description || 'A balanced session for steady progress.'}</p></div><span className="workout-duration">{workout.duration ? `${workout.duration} min` : 'Open'}</span></article>)}</div> : <DataState loading={loading} error={error} emptyLabel="Workout suggestions will appear here." />}
    </div>
  )
}

export default Workouts
