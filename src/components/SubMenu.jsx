
import React, { useEffect, useRef } from "react";
import { useGlobalState } from "../context/ApiContext";
import sublinks from "../data/data";

const SubMenu = () => {
    const { location,toggleSubMenu,onePageLinks } = useGlobalState();
    const menu = useRef(null);

    const{links}=onePageLinks
   
    useEffect(() => {
        if (menu.current && location) {
            const { left, bottom } = location;
            menu.current.style.left = `${left}px`; // Make sure to add 'px' for left and top positions
            menu.current.style.top = `${bottom}px`;   // Make sure to add 'px' for left and top positions
        }
    }, [location]);

    return (
        <div>
            {toggleSubMenu && <div ref={menu} className="absolute translate-all rounded=md duration-500  border-2 border-indigo-300 border-solid">
            {
                links.map((link,index)=>{
                    return <p className="p-4 font-medium text-lg hover:indent-1 bg-indigo-300">{link.label}</p>
                })
            }
        </div>}
        </div>
    );
};

export default SubMenu;
