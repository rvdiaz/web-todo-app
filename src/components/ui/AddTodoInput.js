import React, { useContext } from 'react'
import { InputValueContext } from '../../context/InputValueContext';

export const AddTodoInput = () => {
  const {inputValue,handleInputChange}=useContext(InputValueContext);

  const handlerChange=(e)=>{
    e.preventDefault();
    handleInputChange(e.target.value);
  }

  return (
    <input 
      className='form-control'
      type='text' 
      placeholder="Add new"
      value={inputValue}
      onChange={handlerChange}
    />
  )
}
