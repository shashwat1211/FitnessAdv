

export const exerciseOptions ={
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
export const youtubeOptions ={
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "b3be51e872mshd1e7e851cffa058p1a82abjsnaee79e21aea1",
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};
export const fitnessOptions = {
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
}


export const fetchData = async (url , options)=>{
    const response = await fetch(url , options);
    const data = await response.json()
    return data
    
    
}

