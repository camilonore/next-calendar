import { useState, useEffect, useContext } from 'react'
import { CalendarContext } from '../Context/CalendarContext'

function useObjectives () {
  const { objectives, setObjectives } = useContext(CalendarContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch('api/objectives')
      .then((res) => res.json())
      .then((data) => {
        setObjectives(data.data)
        setLoading(false)
      })
  }, [])
  return { objectives, loading }
}

export { useObjectives }
