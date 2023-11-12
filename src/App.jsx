import About from "./views/About"
import Advisers from "./views/Advisers"
import Contact from "./views/Contact"
import Hero from "./views/Hero"
import Mission from "./views/Mission"
import Navbar from "./views/Navbar"
import Roadmap from "./views/Roadmap"
import Team from "./views/Team"
import Partners from "./views/Partners"
import Support from "./views/Support"

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
        <Support/>
      </main>
      <footer>
        <Contact/>
      </footer>
    </div>
  )
}

export default App
