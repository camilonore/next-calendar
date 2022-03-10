import glassmorphism from '../../styles/Glassmorphism.module.css'
import Objective from './Objective'

const Objectives = () => {
  return (
    <section className={glassmorphism.main}>
      <h2>Objectives</h2>
      <p>What I want to achieve:</p>
      <Objective icon={''} text='Leer más'/>
      <Objective icon={''} text='Leer más'/>
      <Objective icon={''} text='Leer más'/>
      <Objective icon={''} text='Leer más'/>
    </section>
  )
}

export default Objectives
