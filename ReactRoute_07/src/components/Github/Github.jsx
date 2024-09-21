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
    <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
    <div className="p-6 bg-orange-600">
      <div className="flex items-center">
        <img
          className="w-24 h-24 border-4 border-white rounded-full"
          src={data.avatar_url}
          alt="Profile"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-white">{data.name}</h2>
          <p className="text-white opacity-90">@{data.login}</p>
          <p className="mt-1 text-white">{data.location}</p>
        </div>
      </div>
    </div>
    <div className="p-6">
      <p className="mb-2 font-semibold text-orange-600">Bio</p>
      <p className="text-gray-700">{data.bio}</p>
      <div className="mt-4">
        <a
          href={data.html_url}
          className="font-semibold text-orange-600 hover:text-orange-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800">{data.followers}</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800">{data.following}</p>
          <p className="text-gray-500">Following</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800">{data.public_repos}</p>
          <p className="text-gray-500">Repositories</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800">{data.public_gists}</p>
          <p className="text-gray-500">Gists</p>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-500">Member since: {new Date(data.created_at).toLocaleDateString()}</p>
        <p className="text-gray-500">Last updated: {new Date(data.updated_at).toLocaleDateString()}</p>
      </div>
    </div>
  </div>
)
}

export default Github

// export const gitHubInfoLoader = async()=>{
//    const reponse = await fetch('https://api.github.com/users/DhruvInnovator')
//    return reponse.json()
// }
