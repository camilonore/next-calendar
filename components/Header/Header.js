import Image from 'next/image'
import styles from './Header.module.css'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'

const Header = () => {
  const { setIsModalOpen, setEditMode, setIsTask, editMode } = useContext(CalendarContext)
  const handleEdit = () => {
    setEditMode(prev => !prev)
  }
  const handleNewTask = () => {
    setIsModalOpen(prev => !prev)
    setIsTask(true)
  }
  const handleObjective = () => {
    setIsTask(false)
    setIsModalOpen(prev => !prev)
  }

  return (
    <header className={styles.header}>
      <button className={styles.button} onClick={handleNewTask}>
        <Image src={'https://iconoir.com/source/icons/add-circled-outline.svg'} width={20} height={20}/>
        <p>New Task</p>
      </button>
      <button className={styles.button} onClick={handleEdit}>
      {editMode
        ? <>
        <Image src={'https://iconoir.com/source/icons/cancel.svg'} width={20} height={20}/>
        <p>Close edit mode</p>
        </>
        : <>
        <Image src={'https://iconoir.com/source/icons/page-edit.svg'} width={20} height={20}/>
        <p>Edit Task/Objective</p>
        </>}
      </button>
      <button className={styles.button} onClick={handleObjective}>
        <Image src={'https://iconoir.com/source/icons/medal.svg'} width={20} height={20}/>
        <p>New Objective</p>
      </button>
    </header>
  )
}

export default Header
