import React from 'react'
import { ButtonFooter } from './ButtonFooter'
import { FilterFooter } from './FilterFooter'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="buttonFooterWrapper">
            <ButtonFooter/>
            <div className="">
                <span>| 3 items left</span>
            </div>
        </div>
        <FilterFooter/>
    </div>
  )
}
