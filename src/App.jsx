import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from "./pages/About"
import Advisers from "./pages/Advisers"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import Mission from "./pages/Mission"
import Navbar from "./pages/Navbar"
import Roadmap from "./pages/Roadmap"
import Team from "./pages/Team"
import Partners from "./pages/Partners"
import Support from "./pages/Support"
import Contributors from './pages/Contributors';
import ErrorPage from './pages/ErrorPage';
import Careers from './pages/Careers';

import StickyActionButton from "./components/common/StickyActionButton"
import ScrollToAnchor from './components/ScrollToAnchor';
import AnnouncementBanner from './components/navbar/AnnouncementBanner';

const NavbarWrapper = () => {
  return (
    <div>
      <ScrollToAnchor />
      <header className="sticky top-0 z-50 bg-black">
        <AnnouncementBanner/>
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <Contact />
      </footer>
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: (
          <>
            <main className="relative overflow-hidden">
              <Hero upperQuote={'"Universe is the limit. Mars - a milestone."'}
                headlineTrans={'hero.home.headline'} headlineColor={'text-primary'}
                staticTrans={'hero.home.infoStatic'} animatedTrans={'hero.home.typedArr'} />
              <About />
              <Mission />
              <Roadmap />
              <Team />
              <Advisers />
              <Partners />
              <Support />
            </main>
            <StickyActionButton actionLink="#support" />
          </>)
      },
      {
        path: "careers",
        element: <Careers />
      },
      {
        path: "contributors",
        element: <Contributors/>
      }
    ],
    errorElement: <ErrorPage/>
  }
]);

function App() {

  return (
    <div className="text-white">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
