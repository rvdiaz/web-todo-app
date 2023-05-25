import { createContext, useState } from "react";
import { filtersObject } from "../util/filters";

export const FilterDisplayContext=createContext({
    filterType:''
})

export const FilterDisplayProvider=(props)=>{
    const [filterType, setfilterDisplay] = useState(filtersObject.all);

    const changehandlerType=(newType)=>{
        setfilterDisplay(newType);
    }

    return (
        <FilterDisplayContext.Provider value={{
            filterType,
            changehandlerType
        }}>
            {props.children}
        </FilterDisplayContext.Provider>
    )
}