// import React from 'react'

import { useEffect,useState } from "react"
// import { useLoaderData } from "react-router-dom"

function Github() {
    // method 1: bye using useLoaderData() hook
    // const data = useLoaderData() 


    //method 2: by using useState() hook
    const [data,setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/DhruvInnovator')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
  return (
    <div className='text-center m-4 bg-primary-foregorund p-4 text-3xl'>
        <div className="text-2xl font-serif flex gap-3">
         {/* Github Followers :{ data.followers}
         Github Following :{ data.following} */}
         Github Public Repos :{ data.public_repos}
        </div>
      <img src={data.avatar_url} alt="git" width={300} className="flex item-center"/>
      <h1 className="text-center">----My github profile
      </h1>
    </div>
  )
}

export default Github

// export const gitHubInfoLoader = async()=>{
//    const reponse = await fetch('https://api.github.com/users/DhruvInnovator')
//    return reponse.json()
// }
