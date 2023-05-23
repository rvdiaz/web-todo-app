import React from 'react'

export const CheckBox = (props) => {
    const {check,setchecked}=props;

    const handleChange=(e)=>{
        const {checked}=e.target;
        setchecked(checked);
    }

  return (
    <input 
        type='checkbox' 
        checked={check} 
        onChange={handleChange}/>
  )
}
