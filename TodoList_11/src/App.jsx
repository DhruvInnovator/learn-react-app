
import { useEffect } from 'react';
import './App.css'
import { TodoProvider } from './context';
import TodoItem from './components/TodoItem';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev)=>[{id: Date.now(),...todo}, ...prev])
   }
  const updateTodo = (id, newTodo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? newTodo : prevTodo)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id? {...prevTodo, completed:!prevTodo.completed}:prevTodo)))
  }
  useEffect(()=>{
    const todos = JSON.parse = JSON.parse(localStorage.getItem("todos")) 
    (todos && todos.length > 0 ? setTodos(todos) : setTodos([]))
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  

  return (
    <TodoProvider value={{
      todos,setTodos,addTodo,updateTodo,deleteTodo,toggleComplete
    }}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
        <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
        <div className="mb-4">
          <Todoform />
        </div>
        <div className="flex flex-wrap gap-y-3">
            
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
        </div>
    </div>
    </div>
    </TodoProvider>
  )
}

export default App
