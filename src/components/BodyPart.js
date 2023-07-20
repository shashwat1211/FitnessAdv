import React from 'react'
import Icon from '../assets/icons/gym.png'
const BodyPart = ({item , setBodyPart , bodyPart}) => {
  return (
    <div
      className='flex flex-col bodyPart-card items-center justify-center bg-[#fff] w-[250px] h-[250px] gap-[47px] rounded-xl hover:scale-90 duration-300 cursor-pointer'
      onClick={()=>{
        setBodyPart(item)
        window.scrollTo({top:1800 ,left:100,behavior:"smooth"})
      }}
      >
      <div className='flex flex-col justify-center items-center'>
        <img src={Icon} alt="dumbbell" style={{width:"50px" , height:"50px"}}/>
        <h1 className="text-[24px] capitalize font-semibold">{item}</h1>
      </div>
    </div>
  )
}

export default BodyPart