import React, { useState } from 'react'
import { CheckBox } from './CheckBox';

export const TodoItem = (props) => {
    const {title,completed}=props;
    const [checked, setchecked] = useState(completed);
  return (
    <li
        className='todoitem-wrapper'    
    >
        <label 
            className='todoitem-title'>
            <CheckBox 
                checked={checked} 
                setchecked={setchecked}/>
            {title}
        </label>
    </li>
  )
}
