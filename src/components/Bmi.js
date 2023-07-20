import React from 'react'
import { useState } from 'react';
import { ToastContainer , toast } from 'react-toastify';
import { fitnessOptions } from '../utilities/fetchData';
import { fetchData } from '../utilities/fetchData';
import 'react-toastify/dist/ReactToastify.css';
import Result from './Result';
const Bmi = () => {
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState({});
    const [check, setCheck] = useState(false);
    const handleClick = async (e) => {
        setBmi({})
        e.preventDefault();
        if (height === "" || weight==="" || age==="") {
            setCheck(false);
            return(
                toast.error("All fields are required")
            );
        }
        if (age < 0 || age > 80) {

            toast.error("Age should be less than 80")
            setHeight("")
            setAge("")
            setWeight("")
            return
        }
        if (height < 130 || height > 230) {

            toast.error("Height should be between 130cm and 230cm")
            setHeight("")
            setAge("")
            setWeight("")
            return
        }
        if (weight < 40 || weight > 160) {

            toast.error("Weight should be between 40kg and 160kg")
            setHeight("")
            setAge("")
            setWeight("")
            return
        }
        if (height < 130 || height > 230) {

            toast.error("Height should be between 130cm and 230cm")
            setHeight("")
            setAge("")
            setWeight("")
            return
        }
        const url = `https://fitness-calculator.p.rapidapi.com/bmi/?age=${age}&height=${height}&weight=${weight}`
        const data = await fetchData(url, fitnessOptions)
        const item = data.data;
        setBmi(item)
        setAge("");
        setWeight("")
        setCheck(true);
        setHeight("");
    }
    return (
        <div className='flex flex-col md:flex-row justify-center items-start gap-[60px] lg:mb-[150px] md:mb-[138px] h-screen'>
            <form className='flex flex-col gap-4 mx-10'>
                <h1 className='text-center text-red-500 font-bold text-2xl md:text-3xl my-3'>Find your Body Mass Index</h1>
            <div className='flex mx-auto'>
                <div className='flex flex-col justify-evenly items-center mx-3'>
                    <label htmlFor="age" className="font-semibold text-[18px] md:text-xl" >Age</label>
                    <label htmlFor="weight" className="font-semibold text-[18px] md:text-xl" >Weight</label>
                    <label htmlFor="height" className="font-semibold text-[18px] md:text-xl" >Height</label>
                    
                </div>
                <div className='flex flex-col gap-2'>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300" required />
                        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight in kg" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300" required />
                        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height in cm" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300" required />
                </div>
            </div>
                <button className="bg-red-500 text-white p-2 rounded-lg text-[20px] shadow-md hover:bg-red-600" onClick={handleClick}>
                    Get BMI
                </button>
                

            </form>
            <div className='mt-[-40px]'>
                <ToastContainer theme='dark' autoClose={2000} className="text-[20px]  text-red-500 text-bold text-center " />
            </div>
            <div className={!check ? "hidden" : "block ease-in duration-300"} >
                <h1 className='text-center text-red-500 font-bold text-[22px] md:text-[30px] my-3'>Results</h1>
                <div className='text-center my-4' id="result">
                    <Result data={bmi}/>
                </div>
            </div>
        </div>
  )
}

export default Bmi