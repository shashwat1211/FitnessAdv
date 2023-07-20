import React from 'react'

const ExerciseVideo = ({exerciseVideo , name}) => {
    if (!exerciseVideo?.length) return <div className='text-red-500 text-2xl m-4 text-center font-bold'>Loading.... </div>
  return (
    <div className='flex flex-col h-full w-max-[1000px] mt-[100px] '>
        <h1 className='text-3xl font-bold m-6 capitalize'>Watch {name} Exercise Videos</h1>
        <div className='flex flex-col md:flex-row  gap-6 mx-auto'>
            {exerciseVideo?.slice(0,3).map((item,index)=>(
                <a key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel="noreferrer" className='hover:scale-110 duration-300 m-2 shadow-lg shadow-black'>
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} className='rounded-lg' />
                </a>
            ))}
        </div>
        
    </div>
  )
}

export default ExerciseVideo