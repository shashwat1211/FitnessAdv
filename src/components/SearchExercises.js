import React ,{useState, useEffect} from 'react'
import { exerciseOptions  , fetchData } from '../utilities/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar'
const SearchExercises = ({setExercises , bodyPart , setBodyPart}) => {
  const [search , setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async()=>{
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList" , exerciseOptions);
      setBodyParts(["all" , ...bodyPartsData])
    }
    fetchExercisesData();
  }, [])
  


  const handleSearch = async()=>{
    if(search){
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises" , exerciseOptions);
      
      const searched = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
      );

      setSearch("");
      setExercises(searched) 
      window.location.href = "#exercises" 
    }
  }
  return (
    <div className='flex flex-col items-center justify-center p-[20px]' >
      <h1 className='text-center text-[30px] md:text-[42px] text-black-700 font-bold mb-[55px]'>
         Exercises You <br /> Should Know
      </h1>
      <div className='mb-[72px] relative'>
        <input 
          type='text' 
          placeholder='Search Exercises' 
          onChange={(e)=>setSearch(e.target.value.toLowerCase())} 
          value={search} 
          className='rounded-md h-[56px] w-350px lg:w-[700px] md:[500px] px-2 text-[22px]'
          />
        <button className="search-btn bg-red-500 hover:bg-red-600 text-white h-[56px] px-4 w-[90px] lg:w-[150px] text-[22px]" 
        onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="relative w-[100%] p-[20px]">
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </div>
    </div>
  );
};

export default SearchExercises