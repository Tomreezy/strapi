
import React, { useEffect, useRef } from "react";
import { useGlobalState } from "../context/ApiContext";
import sublinks from "../data/data";

const SubMenu = () => {
    const { location,toggleSubMenu } = useGlobalState();
    const menu = useRef(null);

    useEffect(() => {
        if (menu.current && location) {
            const { left, bottom } = location;
            menu.current.style.left = `${left}px`; // Make sure to add 'px' for left and top positions
            menu.current.style.top = `${bottom}px`;   // Make sure to add 'px' for left and top positions
        }
    }, [location]);

    return (
        <div>
            {toggleSubMenu && <div ref={menu} className="absolute translate-all duration-500  border-2 border-indigo-300 border-solid">
            the menu
        </div>}
        </div>
    );
};

export default SubMenu;
