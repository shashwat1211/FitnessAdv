import React from 'react'

const Result = ({data}) => {
  return (
    <>
        {Object.keys(data).map((key) => { return <div key={key} className='text-semibold text-xl capitalize'>{key} : {data[key]}</div>; })} 
    </>
  )
}

export default Result