import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import sublinks from "../data/data";

const GlobalContext=createContext(null)


export const GlobalState = ({children})=>{
    const[location,setLocation]=useState({})
    const[toggleSubMenu,setToggleSubMenu]=useState(false)

    const[onePageLinks,setOnePageLinks]=useState({links:[],page:""})

    function openSubmenu(){
        setToggleSubMenu(true)
    }

    function closeSubMenu(){
        setToggleSubMenu(false)
    }

    function handleData(loc,locate){
        setLocation(locate)
        console.log(loc)
        console.log(sublinks)

        const oneObject = sublinks.find(item => item.page === loc.trim() );
        setOnePageLinks(oneObject)
    }
    return <GlobalContext.Provider value={{onePageLinks,setLocation,handleData,location,closeSubMenu,openSubmenu,toggleSubMenu}} >
        {children}
    </GlobalContext.Provider>
}

export const  useGlobalState = ()=>{
    return useContext(GlobalContext)
}