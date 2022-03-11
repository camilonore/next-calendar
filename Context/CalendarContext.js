import { createContext, useState } from 'react'

const CalendarContext = createContext({})

function CalendarProvider ({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTask, setIsTask] = useState(false)
  const [isNewTask, setIsNewTask] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [objectives, setObjectives] = useState([])
  const [activities, setActivities] = useState([])
  return (
  <CalendarContext.Provider value={{
    isModalOpen,
    setIsModalOpen,
    isTask,
    setIsTask,
    isNewTask,
    setIsNewTask,
    editMode,
    setEditMode,
    objectives,
    setObjectives,
    activities,
    setActivities
  }}>
    {children}
  </CalendarContext.Provider>
  )
}

export { CalendarContext, CalendarProvider }
