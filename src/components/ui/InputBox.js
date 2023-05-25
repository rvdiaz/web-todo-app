import React, { useContext } from 'react'
import { ModeInputContext } from '../../context/ModeInputContext'
import { Modes } from '../../util/modes';
import { AddTodoInput } from './AddTodoInput'
import { SearchTodoInput } from './SearchTodoInput'

export const InputBox = () => {
  const {add}=Modes;
  const {mode}=useContext(ModeInputContext);
 
  return (
    <div className="inputWrapper">
      {mode == add 
      ? <AddTodoInput/>
      : <SearchTodoInput/>
    }
    </div>
  )
}
