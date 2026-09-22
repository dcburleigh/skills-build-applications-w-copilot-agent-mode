import { useEffect, useState } from 'react'
import { fetchCollection } from '../lib/api.js'

export function useCollection(resource) {
  const [state, setState] = useState({ data: [], loading: true, error: '' })

  useEffect(() => {
    let active = true
    fetchCollection(resource)
      .then((data) => active && setState({ data, loading: false, error: '' }))
      .catch((error) => active && setState({ data: [], loading: false, error: error.message }))
    return () => { active = false }
  }, [resource])

  return state
}