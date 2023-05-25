import { createContext, useState } from "react";

export const InputSearchContext=createContext({
    inputValue:''
})

export const InputSearchProvider=(props)=>{
    const [valueSearch, setvalueSearch] = useState('');

    const handleChangeSearch=(newValue)=>{
        setvalueSearch(newValue);
    }

    return (
        <InputSearchContext.Provider value={{
            valueSearch,
            handleChangeSearch
        }}>
            {props.children}
        </InputSearchContext.Provider>
    )
}