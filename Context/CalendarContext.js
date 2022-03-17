import { createContext, useState } from 'react'

const CalendarContext = createContext({})

function CalendarProvider ({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isActivity, setIsActivity] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editObjectId, setEditObjectId] = useState('')
  const [objectives, setObjectives] = useState([])
  const [activities, setActivities] = useState([])
  return (
  <CalendarContext.Provider value={{
    isModalOpen,
    setIsModalOpen,
    isActivity,
    setIsActivity,
    editMode,
    setEditMode,
    objectives,
    setObjectives,
    activities,
    setActivities,
    editObjectId,
    setEditObjectId
  }}>
    {children}
  </CalendarContext.Provider>
  )
}

export { CalendarContext, CalendarProvider }
