import styles from './Calendar.module.css'
import glassmorphism from '../../styles/Glassmorphism.module.css'
import Card from '../Card/Card'
import { useActivities } from '../../hooks/useActivities'

// TODO: refactor
const Calendar = () => {
  const { activities, loading } = useActivities()
  return (
    <section className={glassmorphism.main}>
      <h2>Weekly Planner</h2>
      <p>Week from March 15 to 19</p>
      <div className={styles.week}>
        <p>Monday</p>
        <div className={styles.monday}>
          {
            loading
              ? <p>Loading...</p>
              : activities.filter(activity => {
                return activity.day === 'Monday'
              }).map(task => {
                return <Card key={task._id} type={task.type} hour={task.hour} description={task.description} />
              })
          }
        </div>
        <p>Tuesday</p>
        <div className={styles.tuesday}>
          {
            loading
              ? <p>Loading...</p>
              : activities.filter(activity => {
                return activity.day === 'Tuesday'
              }).map(task => {
                return <Card key={task._id} type={task.type} hour={task.hour} description={task.description} />
              })
          }
        </div>
        <p>Wednesday</p>
        <div className={styles.wednesday}>
          {
            loading
              ? <p>Loading...</p>
              : activities.filter(activity => {
                return activity.day === 'Wednesday'
              }).map(task => {
                return <Card key={task._id} type={task.type} hour={task.hour} description={task.description} />
              })
          }
        </div>
        <p>Thursday</p>
        <div className={styles.thursday}>
          {
            loading
              ? <p>Loading...</p>
              : activities.filter(activity => {
                return activity.day === 'Thursday'
              }).map(task => {
                return <Card key={task._id} type={task.type} hour={task.hour} description={task.description} />
              })
          }
        </div>
        <p>Friday</p>
        <div className={styles.friday}>
          {
            loading
              ? <p>Loading...</p>
              : activities.filter(activity => {
                return activity.day === 'Friday'
              }).map(task => {
                return <Card key={task._id} type={task.type} hour={task.hour} description={task.description} />
              })
          }
        </div>
      </div>
    </section>
  )
}

export default Calendar
