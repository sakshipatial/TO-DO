import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext'


function TodoForm() {
    const [todo, setTodo] = React.useState("")
    const { addTodo } = useTodo()

    function add(e) {
        e.preventDefault()
        // agr !(todo) null nhi h toh return kro
        if (!todo) return
        addTodo({ todo, completed: false })// kry or  value  ka  name  same ho {todo:todo}  toh hm ese{todo}  jese likha  h  bese bhi likh  skte h
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // value jo  bhi  hogi todo sate me  jayegi.wiring ki h input  with state.
                onChange={(e) => setTodo(e.target.value)} // tum jo  bhi field  me doge  bo setTodo se todo me  chla jayege
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
// button pr koi  functionality add krne  ki  need  nhi  h  kyuki ye  type  submit  h  automatically  hi  submit  ho jayega.<form>  me  hmne  onSubmit lgaya h.  

export default TodoForm;