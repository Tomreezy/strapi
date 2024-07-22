import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const GlobalContext=createContext(null)


export const GlobalState = ({children})=>{
    const[location,setLocation]=useState({})
    const[toggleSubMenu,setToggleSubMenu]=useState(false)

    function openSubmenu(){
        setToggleSubMenu(true)
    }

    function closeSubMenu(){
        setToggleSubMenu(false)
    }

    return <GlobalContext.Provider value={{setLocation,location,closeSubMenu,openSubmenu,toggleSubMenu}} >
        {children}
    </GlobalContext.Provider>
}

export const  useGlobalState = ()=>{
    return useContext(GlobalContext)
}