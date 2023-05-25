import { createContext, useState } from "react";
import { Modes } from "../util/modes";

export const ModeInputContext=createContext({
    initialMode:''
})

export const ModeInputProvider=(props)=>{
    const {add}=Modes;
    const [mode, setmode] = useState(add);

    const handleChangeMode=(newMode)=>{
        setmode(newMode);
    }

    return (
        <ModeInputContext.Provider value={{
            mode,
            handleChangeMode
        }}>
            {props.children}
        </ModeInputContext.Provider>
    )
}
 