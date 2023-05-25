import React from 'react'
import { texts } from '../../assets/text/text'
import { InputBox } from './InputBox'

const Header = () => {
  return (
    <div className="header">
        <h1>{texts.HEADER_TEXT}</h1>
        <InputBox/>
    </div>
  )
}

export default React.memo(Header);