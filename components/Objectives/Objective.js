import Image from 'next/image'

const Objective = ({ icon, text }) => {
  return (
    <div>
      <Image width={15} height={15} src="https://iconoir.com/source/icons/archery.svg"/>
      <p>{text}</p>
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
