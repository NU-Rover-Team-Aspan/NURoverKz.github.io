import About from "./components/About"
import Advisers from "./components/Advisers"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Mission from "./components/Mission"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"
import Roadmap from "./components/Roadmap"
import Team from "./components/Team"

function App() {

  return (
    <div className="text-white">
      <header className="sticky top-0 z-50 bg-black">
        <Navbar/>
      </header>
      <main className="relative">
        <Hero/>
        <About/>
        <Mission/>
        <Roadmap/>
        <Team/>
        <Advisers/>
        <Partners/>
      </main>
      <footer>
        <Contact/>
      </footer>
    </div>
  )
}

export default App
