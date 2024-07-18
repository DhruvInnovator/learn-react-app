import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(8) 
  const[password, setPassword] = useState('') 
  const[numberAllowed, setNumberAllowed] = useState(false) 
  const[charAllowed, setCharAllowed] = useState(true)
  const numberRef = useRef()
  const generatePassword = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'
          if(numberAllowed) str += "0123456789"
          if(charAllowed) str += "!@#$%^&*()_+"
      for(let i = 0; i <= length; i++){
          let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
      charAllowed ? setCharAllowed(true) : setCharAllowed(false)
      numberAllowed ? setNumberAllowed(true) : setNumberAllowed(true)
      
    }
    setPassword(pass)
  }, 
    [length,setPassword,charAllowed,numberAllowed]) 
    const copyToClipboard = useCallback(()=>{
       window.navigator.clipboard.writeText(password)
       alert('Password copied to clipboard')
    },[password])

  useEffect(()=>{
    generatePassword()
  },[length, charAllowed, numberAllowed, generatePassword])

  return (
    <div className="w-auto max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-600">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className=" flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={numberRef}
      />
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={copyToClipboard}
      >
        copy
      </button>
      </div>
    <div className=' flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={50}
        className='cursor-pointer'
        value={length}
        onChange={(e)=>setLength(e.target.value)}
        />
        <label htmlFor=''>Length = {length}</label>
      </div>
      <div className='flex item-center gap-x-2'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=> {
          setNumberAllowed((prev) => !prev); 
        }}
        />
        <label htmlFor="numberInput">numbers</label>
      </div>
      <div className='flex item center gap-x-2'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=> {
          setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="charInput">special characters</label>
      </div>
    </div>
  </div>  
  )
}

export default App
