import styles from './EditButton.module.css'
import Image from 'next/image'

const EditButton = ({ onClick }) => {
  return (
   <button className={styles.button} onClick={onClick}>
      <Image src={'/edit-pencil.svg'} width={30} height={30}/>
    </button>
  )
}

export { EditButton }
