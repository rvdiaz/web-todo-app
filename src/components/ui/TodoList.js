import React from 'react'
import { FilteredList } from './FilteredList';
import { Footer } from './Footer';
import { Header } from './Header';

export const TodoList = () => {

  return (
    <div className='container'>
        <div className='row'>
            <div className='todolist'>
                <Header/>
                <FilteredList/>
                <Footer/>
            </div>
        </div>
    </div>
  )
}
