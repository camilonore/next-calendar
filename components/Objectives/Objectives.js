import { useObjectives } from '../../hooks/useObjectives'
import glassmorphism from '../../styles/Glassmorphism.module.css'
import Objective from './Objective'

const Objectives = () => {
  const { objectives, loading } = useObjectives()
  return (
    <section className={glassmorphism.main}>
      <h2>Objectives</h2>
      <p>What I want to achieve:</p>
      {loading
        ? <p>Getting objectives..</p>
        : objectives.map(data => {
          return <Objective key={data._id} objectId={data._id} objective={data.objective}/>
        })}
    </section>
  )
}

export default Objectives
