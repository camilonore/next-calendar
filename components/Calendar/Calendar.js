import styles from './Calendar.module.css'
import glassmorphism from '../../styles/Glassmorphism.module.css'
import Day from '../Day/Day'

const Calendar = () => {
  return (
    <section className={glassmorphism.main}>
      <h2>Weekly Planner</h2>
      <p>Week from March 15 to 19</p>
      <div className={styles.week}>
        <Day day={'Monday'}/>
        <Day day={'Tuesday'}/>
        <Day day={'Wednesday'}/>
        <Day day={'Thursday'}/>
        <Day day={'Friday'}/>
      </div>
    </section>
  )
}

export default Calendar
