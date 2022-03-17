import styles from './Modal.module.css'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'
import { Form } from '../Form/Form'
import { activityFields, editActivityFields, objectiveFields, editObjectiveFields } from '../../utils/formFields'
import { usePOST } from '../../hooks/usePOST'
import { usePATCH } from '../../hooks/usePATCH'

// TODO: refactor

const Modal = () => {
  const {
    setIsModalOpen,
    isModalOpen,
    isActivity,
    editMode,
    setObjectives,
    setActivities,
    editObjectId
  } = useContext(CalendarContext)

  function handleActivitySubmit (event) {
    event.preventDefault()
    usePOST({ event, fields: activityFields, isActivity })
      .then(response => {
        if (response.success) {
          setIsModalOpen(false)
          setActivities(prev => {
            return [...prev, response.data]
          })
        }
      })
  }
  function handleActivityUpdate (event) {
    event.preventDefault()
    usePATCH({ event, fields: editActivityFields, isActivity, editObjectId })
      .then(response => {
        if (response.success) {
          setIsModalOpen(false)
          setActivities(response.data)
        }
      })
  }
  function handleObjectiveSubmit (event) {
    event.preventDefault()
    usePOST({ event, fields: objectiveFields, isActivity })
      .then(response => {
        if (response.success) {
          setIsModalOpen(false)
          setObjectives(prev => {
            return [...prev, response.data]
          })
        }
      })
  }
  function handleObjectiveUpdate (event) {
    event.preventDefault()
    usePATCH({ event, fields: editObjectiveFields, isActivity, editObjectId })
      .then(response => {
        if (response.success) {
          setIsModalOpen(false)
          setObjectives(response.data)
        }
      })
  }

  return (
    <section className={styles.modal} style={{ display: isModalOpen ? 'flex' : 'none' }}>
      {isActivity && editMode && <Form onSubmit={handleActivityUpdate} fields={editActivityFields}/>}
      {!isActivity && editMode && <Form onSubmit={handleObjectiveUpdate} fields={editObjectiveFields}/>}
      {isActivity && !editMode && <Form onSubmit={handleActivitySubmit} fields={activityFields}/>}
      {!isActivity && !editMode && <Form onSubmit={handleObjectiveSubmit} fields={objectiveFields}/>}
    </section>
  )
}

export default Modal
