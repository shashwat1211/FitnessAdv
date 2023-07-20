import React ,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'

import {exerciseOptions ,youtubeOptions, fetchData} from "../utilities/fetchData"
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

    };

    fetchExercisesData();
  }, [id]);
  
  return (
    <div>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideo exerciseVideo = {exerciseVideos} name={exerciseDetail.name} />
    </div>
  )
}

export default ExerciseDetail