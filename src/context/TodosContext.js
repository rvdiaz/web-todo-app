import React, { useState } from 'react'

export const TodoContext=React.createContext({
    todos:[]
})

export const TodoContextProvider=(props)=>{
    const [todos, settodos] = useState([
        {
            id:0,
            title:'learn javascript',
            completed:false
        },
        {
            id:1,
            title:'learn react',
            completed:false
        },
        {
            id:2,
            title:'learn react hooks',
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

    const getActiveTodo=()=>{
        const activeTodos=todos.filter(todo=>!todo.completed);
        return activeTodos;
    }

    const getCompletedTodo=()=>{
        const activeTodos=todos.filter(todo=>todo.completed);
        return activeTodos;
    }

    return (
        <TodoContext.Provider 
            value={{
                initialTodos:todos,
                addNewTodo,
                updateTodo,
                getActiveTodo,
                getCompletedTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

