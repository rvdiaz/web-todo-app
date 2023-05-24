import React from 'react'

export const CheckBox = (props) => {
    const {checked,updateTodo}=props;

    const handleChange=(e)=>{
        const {checked}=e.target;
        updateTodo(checked);
    }

  return (
    <input 
        type='checkbox' 
        checked={checked} 
        onChange={handleChange}/>
  )
}
