import Image from 'next/image'
import styles from './Header.module.css'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'

const Header = () => {
  const { setIsModalOpen, setEditMode, setIsTask, editMode, setIsNewTask } = useContext(CalendarContext)
  const handleEdit = () => {
    setEditMode(prev => !prev)
    setIsNewTask(false)
  }
  const handleNewTask = () => {
    setIsModalOpen(prev => !prev)
    setIsTask(true)
    setIsNewTask(true)
  }
  const handleObjective = () => {
    setIsTask(false)
    setIsModalOpen(prev => !prev)
  }

  return (
    <header className={styles.header}>
      <button className={styles.button} onClick={handleNewTask}>
        <Image src={'/add.svg'} width={20} height={20}/>
        <p>New Task</p>
      </button>
      <button className={styles.button} onClick={handleEdit}>
      {editMode
        ? <>
        <Image src={'/cancel.svg'} width={20} height={20}/>
        <p>Exit Edit Mode</p>
        </>
        : <>
        <Image src={'/page-edit.svg'} width={20} height={20}/>
        <p>Edit Task/Objective</p>
        </>}
      </button>
      <button className={styles.button} onClick={handleObjective}>
        <Image src={'/medal.svg'} width={20} height={20}/>
        <p>New Objective</p>
      </button>
    </header>
  )
}

export default Header
