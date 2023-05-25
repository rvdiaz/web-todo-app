import React, { useState } from 'react'

export const SearchTodoInput = () => {
    const [value, setvalue] = useState('');

    const handlerValue=(e)=>{
      e.preventDefault();
      setvalue(value);
    }

    return (
      <input 
        className='form-control'
        type='text' 
        placeholder="Search todo"
        value={value}
        onChange={handlerValue}
        />
    )
}
