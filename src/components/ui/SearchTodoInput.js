import React, { useContext } from 'react'
import { InputSearchContext } from '../../context/InputSearchContext';
import { FilterDisplayContext } from '../../context/FilterDisplayContext';
import { filtersObject } from '../../util/filters';


export const SearchTodoInput = () => {
    const {valueSearch,handleChangeSearch}=useContext(InputSearchContext);
    const {changehandlerType}=useContext(FilterDisplayContext);

    const handlerValue=(e)=>{
      e.preventDefault();
      handleChangeSearch(e.target.value);
      changehandlerType(filtersObject.search);
    }

    return (
      <input 
        className='form-control'
        type='text' 
        placeholder="Search todo"
        value={valueSearch}
        onChange={handlerValue}
        />
    )
}
