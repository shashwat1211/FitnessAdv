
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { useState } from "react"
const Home = () => {
  const [exercises,setExercises] = useState([]);
  const [bodyPart , setBodyPart] = useState("all")
  return (
    <div>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </div>
  )
}

export default Home