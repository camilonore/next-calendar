import styles from './Modal.module.css'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'
import { Form } from '../Form/Form'
import { taskFields, objectiveFields, editTaskFields, editObjectiveFields } from '../../utils/formFields'
import { usePOST } from '../../hooks/usePOST'

const Modal = () => {
  const {
    setIsModalOpen,
    isModalOpen,
    isTask,
    editMode,
    setObjectives,
    setActivities
  } = useContext(CalendarContext)

  function handleTaskSubmit (event) {
    event.preventDefault()
    usePOST({ event, fields: taskFields, isTask })
      .then(response => {
        if (response.success) {
          setIsModalOpen(false)
          setActivities(prev => {
            return [...prev, response.data]
          })
        }
      })
  }
  function handleObjectiveSubmit (event) {
    event.preventDefault()
    usePOST({ event, fields: objectiveFields, isTask })
      .then(response => {
        if (response.success) {
          setIsModalOpen(false)
          setObjectives(prev => {
            return [...prev, response.data]
          })
        }
      })
  }

  return (
    <section className={styles.modal} style={{ display: isModalOpen ? 'flex' : 'none' }}>
      {isTask && editMode && <Form onSubmit={handleTaskSubmit} fields={editTaskFields}/>}
      {!isTask && editMode && <Form onSubmit={handleObjectiveSubmit} fields={editObjectiveFields}/>}
      {isTask && !editMode && <Form onSubmit={handleTaskSubmit} fields={taskFields}/>}
      {!isTask && !editMode && <Form onSubmit={handleObjectiveSubmit} fields={objectiveFields}/>}
    </section>
  )
}

export default Modal
