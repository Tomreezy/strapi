
import React, { useEffect, useRef } from "react";
import { useGlobalState } from "../context/ApiContext";
import sublinks from "../data/data";

const SubMenu = () => {
    const { location } = useGlobalState();
    const menu = useRef(null);

    useEffect(() => {
        if (menu.current && location) {
            const { center, bottom } = location;
            menu.current.style.left = `${center}px`; // Make sure to add 'px' for left and top positions
            menu.current.style.top = `${bottom}px`;   // Make sure to add 'px' for left and top positions
        }
    }, [location]);

    return (
        <div ref={menu} className="absolute translate-all duration-500 top-0 left-0 border-2 border-indigo-300 border-solid">
            the menu
        </div>
    );
};

export default SubMenu;
