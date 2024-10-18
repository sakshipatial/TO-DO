import { useState , useEffect } from 'react'
import {TodoProvider , useTodo} from './contexts/todoContext'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos]=useState([])
  const addTodo=(todo)=>{
   setTodos((prev)=>[...prev,{id:Date.now(),...todo}]) 
  }
  const updateTodo=(id ,todo )=>{
     setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id ? todo:prevtodo)))
  }
  const deleteTodo=(id)=>{
      setTodos((prev)=>prev.filter((todo)=>(todo.id !== id)))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id===id ?{...todo,completed:!todo.completed}:todo))  }
  
  useEffect(
  ()=>{
    const todos=JSON.parse((localStorage.getItem("todos")))
    // at the  end  of  the  day todos ek array hi  h jisko hmne  preserve krbaya h JSON.parse() use kr ke.
    if(todos && todos.length>0){
      setTodos(todos)
    }
  }
  ,[])
   
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
}
,[todos])

  return(
    <TodoProvider value={{todos , addTodo,updateTodo,deleteTodo,toggleComplete }}>
    
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>(
                            <div key={todo.id} className="w-full">
                              <TodoItem todo={todo}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
  </TodoProvider>
  )
  
}

export default App
// jb  hm {} ye lete h  tb hme  return krna pdta  h.
// jb hm () ye lete h  toh ye khud  ko  auto return kr  leta h.
// jb bhi  hm  react me  loop lgate h  to  hme key  dena  hota  h with  unique  value.key  nhi  dege  toh performance  bhut  degrade ho  jata h.
