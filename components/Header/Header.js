import Image from 'next/image'
import styles from './Header.module.css'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'

const Header = () => {
  const { setIsModalOpen, editMode, setEditMode, setIsTask } = useContext(CalendarContext)
  const handleEdit = () => {
    setEditMode(prev => !prev)
  }
  const handleNewTask = () => {
    setIsTask(true)
    setIsModalOpen(prev => !prev)
  }
  const handleObjective = () => {
    setIsTask(false)
    setIsModalOpen(prev => !prev)
  }

  return (
    <header className={styles.header}>
      <button disabled ={editMode && true} className={styles.button} onClick={handleNewTask}>
        <Image src={'/add.svg'} width={20} height={20}/>
        <p>New Task</p>
      </button>
      <button disabled ={editMode && true} className={styles.button} onClick={handleObjective}>
        <Image src={'/medal.svg'} width={20} height={20}/>
        <p>New Objective</p>
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
    </header>
  )
}

export default Header
