// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  let [counter, setCounter] = useState(0)
  const addvalue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    if (counter === 10) {
      alert('counter is 10')
    }
  }
  const subvalue = () => {
    setCounter(counter - 1)
    if (counter === 0) {
      alert('counter is 0')
    }
  }


  return (
    <>
      <h1 classNameName='bg-blue-900 text-green-400 rounded-xl p-4'>Tailwind</h1>
      <Card username = "Dhruv" btntext = "visit you" />
      <h1>counter :{counter}</h1>
      <br />
      <button onClick={addvalue}>add value : {counter}</button>
      <button onClick={subvalue}>remove value : {counter}</button>
    </>
  )
}

export default App
