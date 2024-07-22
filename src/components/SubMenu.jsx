
import React, { useEffect, useRef } from "react";
import { useGlobalState } from "../context/ApiContext";
import sublinks from "../data/data";

const SubMenu = () => {
    const { location,toggleSubMenu,onePageLinks } = useGlobalState();
    const menu = useRef(null);

   
    useEffect(() => {
        if (menu.current && location) {
            const { left, bottom } = location;
            menu.current.style.left = `${left}px`; // Make sure to add 'px' for left and top positions
            menu.current.style.top = `${bottom}px`;   // Make sure to add 'px' for left and top positions
        }
    }, [location]);

    return (
        <div className="bg-white border-solid">
            {toggleSubMenu && <div ref={menu} className="absolute bg-white translate-all rounded-md border border-solid border-indigo-400 rounded=md duration-500  ">
            {
                onePageLinks?.links?.map((link,index)=>{
                    return <p className="my-3 cursor-pointer px-2 hover:bg-indigo-400 transition-all duration-400 hover:text-white    font-thin text-lg hover:indent-1 ">{link.label}</p>
                })
            }
        </div>}
        </div>
    );
};

export default SubMenu;
