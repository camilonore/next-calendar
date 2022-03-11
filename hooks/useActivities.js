import { useState, useEffect, useContext } from 'react'
import { CalendarContext } from '../Context/CalendarContext'

function useActivities () {
  const { activities, setActivities } = useContext(CalendarContext)
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
  return { activities, loading }
}

export { useActivities }
