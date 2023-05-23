import React from 'react'
import { texts } from '../../assets/text/text'
import { InputBox } from './InputBox'

export const Header = () => {
  return (
    <div class="header">
        <h1>{texts.HEADER_TEXT}</h1>
        <InputBox/>
    </div>
  )
}
