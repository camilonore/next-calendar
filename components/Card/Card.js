import styles from './Card.module.css'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'
import { EditButton } from '../EditButton/EditButton'

const Card = ({ objectId, type, hour, description }) => {
  const { editMode, setIsTask, setIsModalOpen, setEditObjectId } = useContext(CalendarContext)
  const handleEdit = () => {
    setIsTask(true)
    setIsModalOpen(prev => !prev)
    setEditObjectId(objectId)
  }
  return (
    <div className={styles.card}>
      <div className={styles.editButton}>
        {editMode ? <EditButton onClick={handleEdit}/> : ''}
      </div>
      <section className={styles.type}>
        <p>{type}</p>
      </section>
      <section className={styles.details}>
        <h4 className={styles.hour}>{hour}</h4>
        <p className={styles.description}>{description}</p>
      </section>
    </div>
  )
}

export default Card
