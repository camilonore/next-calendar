import styles from '../../styles/Card.module.css'

const Card = ({ type, hour, description }) => {
  return (
    <div className={styles.card}>
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
