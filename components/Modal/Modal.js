import styles from './Modal.module.css'

const Modal = ({ isTask = false, isOpen = false }) => {
  return (
    <section className={styles.modal} style={{ display: isOpen ? 'flex' : 'none' }}>
      <form className={styles.form}>
        {isTask
          ? <>
          <label htmlFor='type'>Type</label>
          <input id='type' type="text" placeholder='Gym'/>
          <label htmlFor='Hour'>Hour</label>
          <input id='Hour' type="text" placeholder='9:00am'/>
          <label htmlFor='description'>Description</label>
          <input id='description' type="text" placeholder='Arms and Back'/>
        </>
          : <>
          <label htmlFor='description'>Description</label>
          <input id='description' type="text" placeholder='Read more'/>
        </>
        }
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Modal
