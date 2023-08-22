import About from "./components/About"
import Advisers from "./components/Advisers"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Mission from "./components/Mission"
import Navbar from "./components/Navbar"
import Roadmap from "./components/Roadmap"
import Team from "./components/Team"
import AnnouncementBanner from "./components/sub/AnnouncementBanner"

function App() {

  return (
    <div className="text-white">
      <AnnouncementBanner/>
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
      </main>
      <footer>
        <Contact/>
      </footer>
    </div>
  )
}

export default App
