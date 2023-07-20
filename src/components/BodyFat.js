import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fitnessOptions } from '../utilities/fetchData';
import { fetchData } from '../utilities/fetchData';
import 'react-toastify/dist/ReactToastify.css';
import Result from './Result';
const BodyFat = () => {
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [neck, setNeck] = useState("");
    const [waist, setWaist] = useState("");
    const [hip, setHip] = useState("");
    const [bodyFat, setBodyFat] = useState({});
    const [check, setCheck] = useState(false);

    const labelStyle = "font-semibold text-[22px] md:text-xl"
    const handleClick = async (e) => {
        setBodyFat({})
        e.preventDefault();
        if (height === "" || weight === "" || waist === "" || age === "" || hip === "" || neck === "") {
            setCheck(false);
            return (
                toast.error("All fields are required")
            );
        }
        if (age < 0 || age > 80) {
            toast.error("Age should be less than 80")
            return
        }
        if (height < 130 || height > 230) {
            toast.error("Height should be between 130cm and 230cm")
            return
        }
        if (weight < 40 || weight > 160) {
            toast.error("Weight should be between 40kg and 160kg")
            return
        }
        if (neck < 20 || neck > 80) {
            toast.error("Neck should be between 20cm and 80cm")
            return
        }
        if (waist < 40 || waist > 130) {
            toast.error("Waist should be between 40cm and 130cm")
            return
        }
        if (hip < 40 || hip > 130) {
            toast.error("Hip should be between 40cm and 130cm")
            return
        }
        const url = `https://fitness-calculator.p.rapidapi.com/bodyfat/?age=${age}&height=${height}&weight=${weight}&gender=${gender}&neck=${neck}&waist=${waist}&hip=${hip}`
        const data = await fetchData(url, fitnessOptions)
        const item = data.data;
        setBodyFat(item)
        setGender("male");
        setWeight("")
        setAge("");
        setWaist("")
        setNeck("");
        setHip("")
        setCheck(true);
        setHeight("");
        // window.scrollTo({
        //     top: document.body.scrollHeight - 56,
        //     behavior: "smooth"
        // })
    }
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-[60px] lg:mb-[150px] md:mb-[138px]'>
            <form className='flex flex-col gap-4 mx-10'>
                <h1 className='text-center text-red-500 font-bold text-2xl md:text-3xl my-3'>Find your Body Fat Percent</h1>
            <div className='flex flex-row mx-auto'>
                <div className='flex flex-col justify-between items-center mx-2'>
                    <label htmlFor="age" className={labelStyle} >Age</label>
                    <label htmlFor="gender" className={labelStyle}>Gender</label>
                    <label htmlFor="weight" className={labelStyle} >Weight</label>
                    <label htmlFor="height" className={labelStyle}>Height</label>
                    <label htmlFor="neck" className={labelStyle}>Neck</label>
                    <label htmlFor="neck" className={labelStyle}>Waist</label>
                    <label htmlFor="waist" className={labelStyle} >Hip</label>
                    
                </div>
                <div className='flex flex-col gap-3'>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300" required />
                        <select value={gender} onChange={(e) => setGender(e.target.value.toLowerCase())} className="rounded border-red-500 border-[1.7px] p-2 text-[16px] w-[197px] hover:scale-110 duration-300">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight in kg" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300" required />
                        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height in cm" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300 " required />
                    <input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} placeholder="Neck in cm" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300" required />
                    <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} placeholder="Waist in cm" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300" required />
                    <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} placeholder="Hip in cm" className="rounded border-[1.7px] p-2 border-red-500 hover:scale-110 duration-300" required />
                </div>
            </div>
                <button className="bg-red-500 text-white p-2 rounded-lg text-[20px] hover:bg-red-600 shadow-md" onClick={handleClick}>
                    Get Body Fat
                </button>


            </form>
            <div className='mt-[-40px]'>
                <ToastContainer theme='dark' autoClose={2000} className="text-[20px]  text-red-500 text-bold text-center " />
            </div>
            <div className={!check ? "hidden" : "block ease-in duration-300"} >
                <h1 className='text-center text-red-500 font-bold text-[22px] md:text-[30px] my-3'>Results</h1>
                <div className='text-center my-4'>
                    <Result data={bodyFat}/>
                </div>
            </div>
        </div>
    )
}

export default BodyFat