import React, { useCallback, useContext, useEffect, useState } from 'react'
import { InputSearchContext } from '../../context/InputSearchContext';
import { FilterDisplayContext } from '../../context/FilterDisplayContext';
import { TodoContext } from '../../context/TodosContext';
import { filtersObject } from '../../util/filters';
import { TodoItem } from './TodoItem';
import { ModeInputContext } from '../../context/ModeInputContext';
import { Modes } from '../../util/modes';

export const FilteredList = () => {
  const {initialTodos,getActiveTodo,getCompletedTodo,getSearchTodo}=useContext(TodoContext);
  const {filterType}=useContext(FilterDisplayContext);
  const {valueSearch}=useContext(InputSearchContext);
  const {mode}=useContext(ModeInputContext);
  const [todos, settodos] = useState([]);

  const filterList=useCallback(()=>{
    let displayProducts='';
    switch (filterType) {
      case filtersObject.completed:
        displayProducts=getCompletedTodo(mode,valueSearch);
        break;
      case filtersObject.active:
        displayProducts=getActiveTodo(mode,valueSearch);
        break;
      case filtersObject.search:
        displayProducts=getSearchTodo(valueSearch);
        break;
      default:
        displayProducts=((mode!=Modes.search) ? initialTodos : getSearchTodo(valueSearch))
    }
    settodos(displayProducts);
  },[mode,filterType,initialTodos,valueSearch])

   useEffect(() => { 
    filterList();
   }, [filterList]) 
  
  return (
    <ul className='list'>
        {
        todos.length > 0
        ? todos.map((value)=>(
          <TodoItem 
            key={value.id}
            todo={value}
            />
        ))
        :
        <div className="no-products-wrapper">
          <p className="no-products-title">Anything to display</p>
        </div>
    }
    </ul>
  )
}
