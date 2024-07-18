import { useEffect } from 'react'
import { useState } from 'react'


export default function CurrencyConverter() {

    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(data)

    
  return (
    <div>
      <h1>hello
      </h1>
    </div>
  )
}
