import Image from 'next/image'
import { EditButton } from '../EditButton/EditButton'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'

const Objective = ({ objective }) => {
  const { editMode, setIsTask, setIsModalOpen } = useContext(CalendarContext)
  const handleEdit = () => {
    setIsTask(false)
    setIsModalOpen(prev => !prev)
  }
  return (
    <div>
      <Image width={15} height={15} src="https://iconoir.com/source/icons/archery.svg"/>
      <p>{objective}</p>
      {editMode ? <EditButton onClick={handleEdit}/> : ''}
      <style jsx>{`
        img {
          height: 15px;
        }
        div{
          display:flex;
          align-items: center;
          gap:8px;
        }
      `}</style>
    </div>
  )
}

export default Objective
