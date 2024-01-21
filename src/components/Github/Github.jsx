// import { response } from 'express';
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    //method2
    const data = useLoaderData();

    //method1  
    // const [data,setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/dhaval079')
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     })    
    // }, []);

  return (
    <div className='bg-gray-500'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt='image' width={300} height={200}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
  const response = await fetch('https://api.github.com/users/dhaval079')
  return response.json()
}