import React, { useContext } from 'react'
import { InputSearchContext } from '../../context/InputSearchContext';
import { InputValueContext } from '../../context/InputAdderContext';
import { ModeInputContext } from '../../context/ModeInputContext';
import { TodoContext } from '../../context/TodosContext'
import { Modes } from '../../util/modes';

export const ButtonFooter = () => {
  const {initialTodos,addNewTodo}=useContext(TodoContext);
  const {inputValue,handleInputChange}=useContext(InputValueContext);
  const {mode,handleChangeMode}=useContext(ModeInputContext);
  const {handleChangeSearch}=useContext(InputSearchContext);

  const handlerAddTodo=()=>{
    if(mode==Modes.add){
      if(inputValue!=''){
        addNewTodo({
          id:initialTodos.length+1,
          title:inputValue,
          completed:false
        })
        handleInputChange('');
      }
    }else {
      handleChangeMode(Modes.add);
      handleChangeSearch('');
    }
  }

  const handlerSearchTodo=()=>{
    if(mode!=Modes.search){
      handleChangeMode(Modes.search);
    }
  }

  return (
    <div className="buttonFooterWrapper">
        <a 
          title="Add-new"
          className={mode==Modes.add ? "button add" : "button add inactive"}
          onClick={handlerAddTodo}
            >
        </a>
        <a
          title="Search"
          className={mode==Modes.search ? "button search" : "button search inactive"}
          onClick={handlerSearchTodo}
        >   
        </a>
    </div>
  )
}
