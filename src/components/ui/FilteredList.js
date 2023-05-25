import React, { useContext } from 'react'
import { FilterDisplayContext } from '../../context/TodoDisplayContext';
import { TodoContext } from '../../context/TodosContext';
import { filtersObject } from '../../util/filters';
import { TodoItem } from './TodoItem';

export const FilteredList = () => {
  const {initialTodos,getActiveTodo,getCompletedTodo}=useContext(TodoContext);
  const {filterType}=useContext(FilterDisplayContext);
  
  let displayProducts='';

  switch (filterType) {
    case filtersObject.completed:
      displayProducts=getCompletedTodo()
      break;
    case filtersObject.active:
      displayProducts=getActiveTodo()
      break;
    default:
      displayProducts=initialTodos
  }
 
  return (
    <ul className='list'>
        {
        displayProducts.length > 0
        ? displayProducts.map((value)=>(
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
