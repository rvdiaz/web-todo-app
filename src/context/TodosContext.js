import React, { useState } from 'react'
import { Modes } from '../util/modes';

export const TodoContext=React.createContext({
    todos:[]
})

export const TodoContextProvider=(props)=>{
    const [todos, settodos] = useState([
        {
            id:0,
            title:'todo app',
            completed:true
        },
        {
            id:1,
            title:'calculator',
            completed:false
        },
        {
            id:2,
            title:'BMI Calculator',
            completed:false
        }
    ]);

    const addNewTodo=(todo)=>{
        settodos([...todos,todo]);
    }

    const updateTodo=(updatedtodo)=>{
        let index=-1;
        index=todos.findIndex(todo=>todo.id==updatedtodo.id)
        let newArray=[...todos];
        if(index!=-1){
            newArray[index]=updatedtodo;
            settodos(newArray);
        }
    }

    const getActiveTodo=(mode,value)=>{
        let tod=todos;
        if(mode==Modes.search)
            tod=getSearchTodo(value);
        const activeTodos=tod.filter(todo=>!todo.completed);
        return activeTodos;
    }

    const getCompletedTodo=(mode,value)=>{
        let tod=todos;
        if(mode==Modes.search)
            tod=getSearchTodo(value);
        const activeTodos=tod.filter(todo=>todo.completed);
        return activeTodos;
    }

    const getSearchTodo=(value)=>{
        if(value=='')
            return todos;
        const searchTodos=todos.filter(todo=>todo.title.includes(value));
        return searchTodos;
    }

    return (
        <TodoContext.Provider 
            value={{
                initialTodos:todos,
                addNewTodo,
                updateTodo,
                getActiveTodo,
                getCompletedTodo,
                getSearchTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

