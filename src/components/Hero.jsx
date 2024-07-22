import { useGlobalState } from "../context/ApiContext"



const Hero = () => {
    const{closeSubMenu}=useGlobalState()

  return (
    <div onMouseEnter={()=> closeSubMenu()} className="w-full h-screen bg-yellow-200">Hero</div>
  )
}

export default Hero