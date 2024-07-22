import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SubMenu from "./components/SubMenu"


const App = () => {
  return (
    <div className="h-screen w-screen">
    <NavBar />
    <SubMenu />
    <Hero />
    </div>
  )
}

export default App