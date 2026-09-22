export function DataState({ loading, error, emptyLabel }) {
  if (loading) return <div className="data-state">Loading live data...</div>
  if (error) return <div className="data-state error-state">{error}</div>
  return <div className="data-state">{emptyLabel}</div>
}
