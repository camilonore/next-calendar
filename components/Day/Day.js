import { useActivities } from '../../hooks/useActivities'
import Card from '../Card/Card'
import styles from '../Calendar/Calendar.module.css'

const Day = ({ day }) => {
  const { activities, loading } = useActivities()
  const dailyTasks = activities.filter(activity => activity.day === day)
  return (
    <>
    <p>{day}</p>
    <div className={styles[day]}>
      {
        loading
          ? <p>Loading...</p>
          : dailyTasks.map(task => {
            return <Card key={task._id} objectId={task._id} type={task.type} hour={task.hour} description={task.description} />
          })
      }
    </div>
    </>
  )
}

export default Day
