import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'
import styles from './Form.module.css'
import { deleteData } from '../../utils/deleteData'

const Form = ({ onSubmit, fields = {} }) => {
  const { editObjectId, setIsModalOpen, setObjectives, setActivities, isTask } = useContext(CalendarContext)
  function handleDelete (e) {
    const url = isTask ? 'api/activities' : 'api/objectives'
    e.preventDefault()
    deleteData(editObjectId, url)
      .then(response => {
        if (response.success) {
          if (isTask) {
            setActivities(response.data)
          } else {
            setObjectives(response.data)
          }
          setIsModalOpen(false)
        }
      })
  }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <datalist className={styles.input} id='days'>
        <option value="Monday"></option>
        <option value="Tuesday"></option>
        <option value="Wednesday"></option>
        <option value="Thursday"></option>
        <option value="Friday"></option>
      </datalist>
      {fields.map(field => {
        return <div key={field.name}>
          <label className={styles.label} htmlFor={field.name}>{field.name}</label>
          {
            field.name === 'day'
              ? <input list='days' className={styles.input} id={field.name} type="text" name={field.name} placeholder={field.placeholder} required={field.required}/>
              : <input className={styles.input} id={field.name} type="text" name={field.name} placeholder={field.placeholder} required={field.required}/>
          }
          {field.deleteButton === true && <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>}
        </div>
      })}
      <button type='submit'>Submit</button>
    </form>
  )
}

export { Form }
