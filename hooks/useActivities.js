import { useState, useEffect } from 'react'

function useActivities () {
  const [activities, setActivities] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch('api/activities')
      .then((res) => res.json())
      .then((data) => {
        setActivities(data.data)
        setLoading(false)
      })
  }, [])
  return { activities, setActivities, loading }
}

export { useActivities }
