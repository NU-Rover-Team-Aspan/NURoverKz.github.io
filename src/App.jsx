import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

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
import StickyActionButton from "./components/common/StickyActionButton"

import ErrorPage from './views/ErrorPage';
import Careers from './views/Careers';
import ScrollToAnchor from './components/ScrollToAnchor';

const NavbarWrapper = () => {
  return (
    <div>
      <ScrollToAnchor />
      <header className="sticky top-0 z-50 bg-black">
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
