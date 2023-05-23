import React from 'react'
import { getAll } from '../../services/todo';
import { TodoItem } from './TodoItem';

export const FilteredList = () => {
    const todos=getAll();
  return (
    <ul className='list'>
        {todos.map((value)=>(
            <TodoItem title={value.title} completed={value.completed}/>
        ))}
    </ul>
  )
}
