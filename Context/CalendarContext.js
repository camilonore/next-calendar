import { createContext, useState } from 'react'

const CalendarContext = createContext({})

function CalendarProvider ({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTask, setIsTask] = useState(false)
  const [editMode, setEditMode] = useState(false)
  return (
  <CalendarContext.Provider value={{
    isModalOpen,
    setIsModalOpen,
    isTask,
    setIsTask,
    editMode,
    setEditMode
  }}>
    {children}
  </CalendarContext.Provider>
  )
}

export { CalendarContext, CalendarProvider }
