import { height } from "@fortawesome/free-brands-svg-icons/fa42Group"
import { useRef } from "react"
import { useEffect } from "react"


const MobileMenu = ({pages,sublinks,openMenu}) => {
    const lenghtToggler=useRef(null)
    const setHeight=useRef(null)
    useEffect(()=>{
        const height = openMenu ? lenghtToggler.current.scrollHeight : 0;
        setHeight.current.style.height = `${height}px`;
    },[openMenu])

  return (
    <section>
        <div ref={setHeight} className="overflow-hidden border border-indigo-300 border-solid px-4 transition-height duration-500 ease-in-out "   >
            <div ref={lenghtToggler} className="transition-all duration-700">
            {sublinks.map((page,index)=>{
                return (
                   
                <p className="text-2xl py-1 font-thin ">{page.page}</p>
                )
            })}
            </div>
        </div>
    </section>
  )
}

export default MobileMenu