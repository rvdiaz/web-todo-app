import React from 'react'
import { getAll } from '../../services/todo'
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const todos=getAll();
  return (
    <div className='container'>
        <div className='row'>
            <ul className='todolist'>
                {todos.map((value)=>(
                    <TodoItem title={value.title} completed={value.completed}/>
                ))}
            </ul>
        </div>
    </div>
  )
}
