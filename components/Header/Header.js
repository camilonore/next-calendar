import Image from 'next/image'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.button}>
        <Image src={'https://iconoir.com/source/icons/add-circled-outline.svg'} width={20} height={20}/>
        <p>New Task</p>
      </button>
      <button className={styles.button}>
        <Image src={'https://iconoir.com/source/icons/page-edit.svg'} width={20} height={20}/>
        <p>Edit Task</p>
      </button>
      <button className={styles.button}>
        <Image src={'https://iconoir.com/source/icons/medal.svg'} width={20} height={20}/>
        <p>New Objectve</p>
      </button>
      <button className={styles.button}>
        <Image src={'https://iconoir.com/source/icons/shield-check.svg'} width={20} height={20}/>
        <p>Edit Objectve</p>
      </button>
    </header>
  )
}

export default Header
