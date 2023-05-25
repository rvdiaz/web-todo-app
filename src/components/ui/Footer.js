import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodosContext'
import { ButtonFooter } from './ButtonFooter'
import { FilterFooter } from './FilterFooter'

export const Footer = () => {
  const {initialTodos}=useContext(TodoContext);
  return (
    <div className='footer'>
        <div className="buttonFooterWrapper">
            <ButtonFooter/>
            <div className="">
                <span>{initialTodos.length} items left</span>
            </div>
        </div>
        <FilterFooter/>
    </div>
  )
}
