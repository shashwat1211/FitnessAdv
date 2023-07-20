
import React, { useState } from 'react'
import { fetchData , fitnessOptions } from '../utilities/fetchData';
import {ToastContainer , toast } from "react-toastify"
import Result from './Result';
const IdealWeight = () => {
  const [gender , setGender] = useState("male");
  const [height ,setHeight] = useState("");
  const [idealWeight , setIdealWeight] = useState([]);
  const [check , setCheck] = useState(false);
  const handleClick=async(e)=>{
    setIdealWeight([])
    e.preventDefault();
    if(height === ""){
      setCheck(false);
      return;
    }
    if(height < 130 || height > 200){
      
        toast.error("Height should be between 130cm and 200cm")
        setHeight("")
        return
    }
    const url = `https://fitness-calculator.p.rapidapi.com/idealweight/?gender=${gender}&height=${height}`
    const data = await fetchData(url,fitnessOptions )
    const item = data.data;
    setIdealWeight(item)
    setGender("male");
    setCheck(true);
    setHeight("");

  }
  return (
    <div className='flex flex-col h-screen md:flex-row justify-center items-start gap-[60px] lg:mb-[150px] md:mb-[138px]'>
      <form className='flex flex-col gap-4 mx-10'>
        <h1 className='text-center text-red-500 font-bold text-2xl md:text-3xl my-3'>Find your Ideal Weight</h1>
        <div className='flex'>
          <div className='flex flex-col justify-evenly'>
            <label htmlFor="gender" className="font-semibold text-[18px] md:text-xl mx-[10px]">Gender</label>
            <label htmlFor="height" className="font-semibold text-[18px] md:text-xl mx-[10px]" >Height</label>
          </div>
          <div className='flex flex-col gap-2'>
            <select value={gender} onChange={(e) => setGender(e.target.value.toLowerCase())} className="rounded border-red-600 border-[1.7px] p-2 text-[16px] w-[195px] hover:scale-110 duration-300">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height in cm" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300" required/>
          </div>
        </div>
          <button className="bg-red-500 text-white p-2 shadow-md rounded-lg text-[20px] hover:bg-red-600" onClick={handleClick}>
          Get Ideal Weight
          </button>
      </form>

      <div className='mt-[-40px]'>
        <ToastContainer theme='dark' autoClose={2000} className="text-[20px]  text-red-500 text-bold text-center " />
      </div>

      <div className={!check ? "hidden" :"block ease-in duration-300"} >
        <h1 className='text-center text-red-500 font-bold text-[22px] md:text-[30px] my-3'>Results</h1>
          <div className='text-center my-4'>
            <Result data ={idealWeight} /> 
          </div>
      </div>
    </div>
  )
}

export default IdealWeight