import React from 'react'

export const FilterFooter = () => {
  return (
    <div className="filterFooterWrapper">
        <a type="button" className='footer-filter active'>All</a>
        <a type="button" className='footer-filter'>Active</a>
        <a type="button" className='footer-filter'>Completed</a>
    </div>
  )
}
