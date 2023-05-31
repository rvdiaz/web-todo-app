import React from 'react'
import { TodoList } from '../ui/TodoList'
import { KeyPressTrigger } from './KeyPressTrigger'

export const App = () => {
  return (
    <KeyPressTrigger>
      <TodoList/>
    </KeyPressTrigger>
  )
}
