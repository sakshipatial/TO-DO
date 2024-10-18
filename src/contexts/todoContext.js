import {createContext , useContext } from 'react'

export const todoContext=createContext({
todos:[
    {
        id:1,
        todo:"to do message",
        complete:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id , todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});

export const TodoProvider=todoContext.Provider;

export const useTodo=()=>{
    return (
        useContext(todoContext)
    )
}

// whenever we  use  useContext() hme use  context dena  pdega ki hm kis  context ke  bare me bat kr rhe  He.


