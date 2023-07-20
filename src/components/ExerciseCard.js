
import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card hover:scale-90 duration-300 bg-white p-5 rounded-2xl max-w-[350px]" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <div className='flex'>
      <button className='ml-[21px] p-2 text-[#fff] bg-[#ffa9a9] text-[14px] capitalize rounded-md'>
        {exercise.bodyPart}
      </button>
      <button className='ml-[21px] p-2 text-[#fff] bg-[#FCC757] text-[14px] capitalize rounded-md' >
        {exercise.target}
      </button>
    </div>
    <h1 className='font-bold ml-[21px] text-[20px] lg:text-[24px] mt-[10px] pb-[10px] capitalize' >
      {exercise.name}
    </h1>
  </Link>
);

export default ExerciseCard;