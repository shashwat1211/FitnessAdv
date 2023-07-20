import React ,{useEffect ,useState} from 'react'
import { Pagination } from '@mui/material'
import ExerciseCard from './ExerciseCard';
import { exerciseOptions , fetchData } from "../utilities/fetchData";
const Exercises = ({exercises , setExercises , bodyPart}) => {
  const [currentPage ,setCurrentPage] = useState(1);
  const exercisesPerPage=9;
  const indexOfLastExercise = currentPage *exercisesPerPage;
  const indexOfFirstExercise =indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
  const paginate = (e,value)=>{
    setCurrentPage(value) ; 
    window.scrollTo({top:1800,behavior:"smooth"})
  }

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      let exerciseData = [];
      if(bodyPart === "all"){
        exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      }else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exerciseData)
    }
    fetchExercisesData();
  },[bodyPart,setExercises])


  return (
    <div className='mt-[50px] lg:mt-[110p] p-20px' id="exercises">
      <h1 className='mb-[45px] text-[28px] m-5'>
        Results
      </h1>
      <div className='flex flex-wrap justify-center gap-[50px] lg:[110px]'>
        {currentExercises.map((exercise , index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </div>
      <div className='mt-[70px] lg:mt-[114px] flex items-center justify-center'>
        {exercises.length > 9 &&(
          <Pagination color="standard" shape='rounded' count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage} onChange={paginate} size='large'

          />
        )

        }
      </div>
    </div>
  )
}

export default Exercises

