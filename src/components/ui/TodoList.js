import React from 'react'
import { FilteredList } from './FilteredList';
import { Header } from './Header';

export const TodoList = () => {

  return (
    <div className='container'>
        <div className='row'>
            <div className='todolist'>
                <Header/>
                <FilteredList/>
            </div>
        </div>
    </div>
  )
}
