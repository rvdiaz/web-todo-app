import React, { useContext, useState } from 'react'
import { FilterDisplayContext } from '../../context/FilterDisplayContext';
import { filterObjectArray } from '../../util/filters';

export const FilterFooter = () => {
  const [active, setactive] = useState(0);
  const {changehandlerType}=useContext(FilterDisplayContext);

  const handlerFilter=(e)=>{
    setactive(e.target.getAttribute('data-active'));
    const filter=e.target.innerText;
    changehandlerType(filter);
  }

  return (
    <div className="filterFooterWrapper">
        {filterObjectArray.map((filter,index)=>(
          <a 
            type="button" 
            className={active==index ? 'footer-filter active' : 'footer-filter'}
            onClick={handlerFilter}
            key={index}
            data-active={index}
            >
            {filter}
          </a>
        ))}
    </div>
  )
}
