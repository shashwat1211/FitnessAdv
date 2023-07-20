import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png"
import { AiOutlineClose} from "react-icons/ai"
import { useState } from 'react';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick=()=>{
    setNav(!nav)
  }
  return (
    <div className='flex flex-col m-5 p-4 max-w-[1240px] gap-2 my-4'>
      <Link to="/">
        <div className='flex gap-2 items-center'>
          <img src={Logo} alt="logo" style={{width:"48px" , height:"48px" , margin:"0 20px"}}/>
          <h1 className='text-red-500 md:text-5xl text-3xl font-bold'>Fitness Advisor</h1>
        </div>
      </Link>
      <div className='flex gap-4 mx-10 my-6 justify-start items-center text-[#190a0a] font-semibold text-xl md:text-2xl '>
        <Link to="/" className="hover:text-red-500">Home</Link>
        {/* <a href="#exercises" style={{textDecoration:"none" , color:"#3A1212"}}>Exercises</a> */}
        <button onClick={handleClick} className='hover:text-red-500'>Fitness Index</button>
        <div className={!nav ? "fixed left-[-100%]" : 'fixed left-0 top-0 p-[50px] h-full bg-red-500 w-[60%] md:w-[40%] lg:w-[30%] text-white border-r-red-200 ease-in-out duration-700 z-40 ' }>
        <div className= 'flex flex-col items-center gap-4 my-7'>
          <AiOutlineClose className='text-4xl cursor-pointer' onClick={handleClick} />
          <h1 className='text-3xl md:text-4xl '>Fitness Index</h1>
        </div>
          <ul className="my-[70px]" onClick={handleClick}>
            <li className='border-b-2 border-red-300 my-6 w-full'><Link to="/bmi">BMI </Link></li>
            <li className='border-b-2 border-red-300 my-6 w-full'><Link to="/body-fat">Body Fat Percentage</Link></li>
            <li ><Link to="/ideal-weight">Ideal Weight</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar