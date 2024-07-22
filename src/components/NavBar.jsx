import { useState } from "react"
import { useGlobalState } from "../context/ApiContext"
import sublinks from "../data/data"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MobileMenu from "./MobileMenu"




const pages=sublinks.map(item=> item.page)

const NavBar = () => {
    const[hoverIndex,setHoverIndex]=useState(null)
    const[openMenu,setOpenMenu]=useState(false) 
    const{setLocation,openSubmenu}=useGlobalState() 

    function targetButton(e){
      const nodeTarget=e.target
      const dimensions = nodeTarget?.getBoundingClientRect()
      const bottom = dimensions.bottom+5
      const left = dimensions.left
      setLocation({left,bottom})
      openSubmenu()
      
    }



  return (
    <div>
    <header>
      <section className="max-w-5xl p-4 font-serif font-semibold mx-auto flex justify-between items-center">
        <p className="text-3xl cursor-pointer  ">LOGO<span className="text-indigo-600">USE</span></p>
        <div className=" hidden sm:flex space-x-4">
          {pages.map((page,index)=>{
           
            return <p onMouseLeave={()=>setHoverIndex(null)} onMouseOver={targetButton} onMouseEnter={()=>setHoverIndex(index)} className=" relative cursor-pointer" key={index}>{page} <div className={`${hoverIndex ===index ?"absolute bottom-0 left-0 h-[2px] w-full  bg-indigo-400 animate-line rounded-md":"bg-transparent"}`}></div></p>
          })}
        </div>
        <div className="sm:flex hidden">
          <p  className=""><span className="cursor-pointer bg-indigo-600 rounded-md text-white transform hover:translate-x-1 p-2">sign In</span> <span className="text-indigo-600 ">/</span> <span className="text-indigo-600 cursor-pointer" >sign Up</span></p>
        </div>

        <div className="sm:hidden">
          {openMenu ?<FontAwesomeIcon onClick={()=> setOpenMenu(false)} className="text-4xl cursor-pointer rotate-90 transition-all" icon={faBars} /> : <FontAwesomeIcon onClick={()=> setOpenMenu(true)} className="text-4xl cursor-pointer transition-all" icon={faBars} />}
        </div>
        
      </section>
    </header>
          {openMenu && <MobileMenu pages={pages} openMenu={openMenu} sublinks={sublinks}/>}
          </div>
  )
}

export default NavBar