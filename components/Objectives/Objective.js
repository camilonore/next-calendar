import Image from 'next/image'
import { EditButton } from '../EditButton/EditButton'
import { useContext } from 'react'
import { CalendarContext } from '../../Context/CalendarContext'

const Objective = ({ objective, objectId }) => {
  const { editMode, setIsActivity, setIsModalOpen, setEditObjectId } = useContext(CalendarContext)
  const handleEdit = () => {
    setIsActivity(false)
    setIsModalOpen(prev => !prev)
    setEditObjectId(objectId)
  }
  return (
    <div>
      <Image width={15} height={15} src="/check.svg"/>
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
