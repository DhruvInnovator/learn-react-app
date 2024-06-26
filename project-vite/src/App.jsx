import './App.css'
import Card from './components/card'

function App() {
  // let myobj = {
  //   name: "Dhruv",
  //   age: 23
  // }


  return (
    <>
      <h1 className='bg-blue-900 text-green-400 rounded-xl p-4'>Tailwind</h1>
      <Card username = "Dhruv" btntext = "visit you" />
    </>
  )
}

export default App
