import styles from './Modal.module.css'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'
import { Form } from '../Form/Form'
import { taskFields, objectiveFields } from '../../utils/formFields'
import { useSubmit } from '../../hooks/useSubmit'

const Modal = () => {
  const {
    setIsModalOpen,
    isModalOpen,
    isTask,
    setObjectives,
    setActivities
  } = useContext(CalendarContext)

  function handleTaskSubmit (event) {
    event.preventDefault()
    useSubmit({ event, fields: taskFields, isTask })
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
    useSubmit({ event, fields: objectiveFields, isTask })
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
      {isTask
        ? <Form onSubmit={handleTaskSubmit} fields={taskFields}/>
        : <Form onSubmit={handleObjectiveSubmit} fields={objectiveFields}/>
      }
    </section>
  )
}

export default Modal
