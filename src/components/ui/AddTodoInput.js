import React, { useState } from 'react'
import { TodoInput } from './TodoInput';

export const AddTodoInput = () => {
    const [value, setvalue] = useState('');
  return (
    <TodoInput
        placeholder="Add New"
        valueInput={value}
        handlerInput={setvalue}
    />
  )
}
