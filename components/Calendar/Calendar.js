import styles from '../../styles/Calendar.module.css'
import glassmorphism from '../../styles/Glassmorphism.module.css'
import Card from '../Card/Card'

const Calendar = () => {
  return (
    <section className={glassmorphism.main}>
      <h2>Weekly Planner</h2>
      <p>Week from March 15 to 19</p>
      <div className={styles.week}>
        <p>Monday</p>
        <div className={styles.monday}>
          <Card type={'Ejercicio'} hour={'7:00am'} description={'Brazos'} />
        </div>
        <p>Tuesday</p>
        <div className={styles.tuesday}>
          <Card type={'Ejercicio'} hour={'7:00am'} description={'Brazos'} />
        </div>
        <p>Wednesday</p>
        <div className={styles.wednesday}>
          <Card type={'Ejercicio'} hour={'7:00am'} description={'Brazos'} />
        </div>
        <p>Thursday</p>
        <div className={styles.thursday}>
          <Card type={'Ejercicio'} hour={'7:00am'} description={'Brazos'} />
        </div>
        <p>Friday</p>
        <div className={styles.friday}>
          <Card type={'Ejercicio'} hour={'7:00am'} description={'Brazos'} />
        </div>
      </div>
    </section>
  )
}

export default Calendar
