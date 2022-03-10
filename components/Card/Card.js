import styles from './Card.module.css'
import Image from 'next/image'

const Card = ({ type, hour, description }) => {
  return (
    <div className={styles.card}>
      <button className={styles.button}>
        <Image src={'https://iconoir.com/source/icons/edit-pencil.svg'} width={30} height={30}/>
      </button>
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
