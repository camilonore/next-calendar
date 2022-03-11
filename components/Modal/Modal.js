import styles from './Modal.module.css'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'
import { postData } from '../../utils/postData'

const Modal = () => {
  const { setIsModalOpen, isModalOpen, isTask, setObjectives } = useContext(CalendarContext)

  async function handleSubmit (e) {
    e.preventDefault()
    const body = {}
    let url = ''

    if (isTask) {
      body.day = e.target.day.value
      body.type = e.target.type.value
      body.hour = e.target.hour.value
      body.description = e.target.description.value
      url = 'api/activities'
    } else {
      body.objective = e.target.objective.value
      url = 'api/objectives'
    }
    const response = await postData(url, body)
    if (response.success) {
      setIsModalOpen(false)
      if (isTask) setObjectives(prev => [...prev, response.data])
    }
  }

  return (
    <section className={styles.modal} style={{ display: isModalOpen ? 'flex' : 'none' }}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {isTask
          ? <>
          <label htmlFor='day'>Day</label>
          <input id='day' type="text" name='day' placeholder='Monday'/>
          <label htmlFor='type'>Type</label>
          <input id='type' type="text" name='type' placeholder='Gym'/>
          <label htmlFor='Hour'>Hour</label>
          <input id='Hour' type="text" name='hour' placeholder='9:00am'/>
          <label htmlFor='description'>Description</label>
          <input id='description' type="text" placeholder='Arms and Back'/>
        </>
          : <>
          <label htmlFor='description'>Objective</label>
          <input id='description' type="text" name='objective' placeholder='Read more'/>
        </>
        }
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Modal
