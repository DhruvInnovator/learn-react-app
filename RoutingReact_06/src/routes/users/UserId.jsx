// import React from 'react'
import { useParams } from 'react-router-dom';
import {useState,useEffect} from "react"

export default function UserId() {
    const { userId } = useParams();
    const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res=>res.json())
    .then(data=>setData(data))
  }, [userId]);

    console.log(data)
  return (
      <div className='max-w-md'>
        <a href="#" className="group relative block bg-black">
  

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

              <p className="text-xl font-bold text-white sm:text-2xl">{data.name}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
                              Phone: {data.phone} <br />
                              Website: {data.website}
        </p>
      </div>
    </div>
  </div>
</a>
      </div>
  )
}
