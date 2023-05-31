import React, { useContext } from 'react'
import { useEffect } from 'react';
import { InputValueContext } from '../../context/InputAdderContext';
import { InputSearchContext } from '../../context/InputSearchContext';
import { ModeInputContext } from '../../context/ModeInputContext';
import { TodoContext } from '../../context/TodosContext';
import { Modes } from '../../util/modes';

export const KeyPressTrigger = (props) => {
    const {initialTodos,addNewTodo}=useContext(TodoContext);
    const {inputValue,handleInputChange}=useContext(InputValueContext);
    const {mode,handleChangeMode}=useContext(ModeInputContext);
    const {handleChangeSearch}=useContext(InputSearchContext);

    const handleKesPress=(event)=>{
        const { keyCode } = event;
        if(keyCode==13){
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
    }

    useEffect(() => {
      document.addEventListener('keydown',handleKesPress);
     
      return () => {
        document.removeEventListener('keydown',handleKesPress);
      }
    });
    
  return (
    <div>{props.children}</div>
  )
}
