import React, { useState } from 'react'
import { FilteredList } from './FilteredList';
import Footer from './Footer';
import Header from './Header';

export const TodoList = () => {
  const [value, setvalue] = useState("second");
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
