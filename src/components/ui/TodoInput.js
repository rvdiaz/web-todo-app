import React from 'react'

export const TodoInput = (props) => {
    const {placeholder,valueInput,handlerInput}=props;

    const handler=(e)=>{
        e.preventDefault();
        handlerInput(e.target.value);
    }

  return (
    <input 
        className='form-control'
        type='text' 
        placeholder={placeholder}
        value={valueInput}
        onChange={handler}
        />
  )
}
