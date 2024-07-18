// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("black");

  return (
   <div className='w-full h-screen duration-500' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-gray-500 px-3 py-2 rounded-lg'>
        <button onClick={() => setColor("red")} className='bg-red-800 outline-none px-4 py-1 rounded-lg text-black shadow-lg' style={{backgroundColor: "red"}}>RED</button>
        <button onClick={() => setColor("blue")} className='bg-blue-800 outline-none px-4 py-1 rounded-lg text-black shadow-lg' style={{backgroundColor: "blue"}}>BLUE</button>
        <button onClick={() => setColor("green")} className='bg-green-800 outline-none px-4 py-1 rounded-lg text-black shadow-lg' style={{backgroundColor: "green"}}>GREEN</button>
        <button onClick={() => setColor("yellow")} className='bg-yellow-800 outline-none px-4 py-1 rounded-lg text-black shadow-lg' style={{backgroundColor: "yellow"}}>YELLOW</button>
        <button onClick={() => setColor("purple")} className='bg-purple-800 outline-none px-4 py-1 rounded-lg text-black shadow-lg' style={{backgroundColor: "purple"}}>PURPLE</button>
        <button onClick={() => setColor("orange")} className='bg-orange-800 outline-none px-4 py-1 rounded-lg text-black shadow-lg' style={{backgroundColor: "orange"}}>ORANGE</button>
        <button onClick={() => setColor("pink")} className='bg-pink-950 outline-none px-4 py-1 rounded-lg text-black shadow-lg' style={{backgroundColor: "pink"}}>PINK</button>
        <button onClick={() => setColor("black")} className='bg-black-800 outline-none px-4 py-1 rounded-lg text-white shadow-lg' style={{backgroundColor: "black"}}>BLACK</button>
       </div>
    </div>
   </div>
  )
}

export default App
