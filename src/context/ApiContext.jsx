import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const GlobalContext=createContext(null)


export const GlobalState = ({children})=>{
    const[location,setLocation]=useState({})

    return <GlobalContext.Provider value={{setLocation,location}} >
        {children}
    </GlobalContext.Provider>
}

export const  useGlobalState = ()=>{
    return useContext(GlobalContext)
}