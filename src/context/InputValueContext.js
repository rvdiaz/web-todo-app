import { createContext, useState } from "react";

export const InputValueContext=createContext({
    inputValue:''
})

export const InputValueProvider=(props)=>{
    const [inputValue, setinputValue] = useState('');

   const handleInputChange=(newValue)=>{
        setinputValue(newValue);
   }

    return (
        <InputValueContext.Provider value={{
            inputValue,
            handleInputChange
        }}>
            {props.children}
        </InputValueContext.Provider>
    )
}