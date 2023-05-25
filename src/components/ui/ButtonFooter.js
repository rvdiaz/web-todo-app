import React, { useContext } from 'react'
import { InputValueContext } from '../../context/InputValueContext';
import { TodoContext } from '../../context/TodosContext'

export const ButtonFooter = () => {
  const {initialTodos,addNewTodo}=useContext(TodoContext);
  const {inputValue,handleInputChange}=useContext(InputValueContext);

  const handlerAddTodo=()=>{
    if(inputValue!='')
      addNewTodo({
        id:initialTodos.length+1,
        title:inputValue,
        completed:false
      })
      handleInputChange('');
  }

  return (
    <div className="buttonFooterWrapper">
        <a 
            title="Add-new"
            className="button add"
            onClick={handlerAddTodo}
            >
        </a>
        <a
            title="Search"
            className="button search"
        >   
        </a>
    </div>
  )
}
