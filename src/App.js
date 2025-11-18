import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "../src/styles/base.css";
import "../src/styles/style.css";
import "react-loading-skeleton/dist/skeleton.css";


import { AppProvider } from "./context/AppContext";
import { Header } from "./components/composed-components/Header";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { Footer } from "./components/composed-components/Footer";
import { Studio } from "./pages/Studio";
import { Contact } from "./pages/Contact";
import { JoinUs } from "./pages/JoinUs";
import { Resources } from "./pages/Resources";
import { Career } from "./pages/Career";
import { ScrollingAnimation } from "./components/composed-components/ScrollingAnimation";
import { ScrollToTopButton } from "./components/atomic-components/ScrollToTopBtn";
import { Loader } from "./components/atomic-components/Loader";
// import lax from 'lax.js';

const RouteLoaderWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Loader /> : children;
};




function App() {


  ScrollingAnimation(".reveal", 120, false);

  // useEffect(() => {
  //   // Initialize lax.js globally when the app mounts
  //   lax.init();

  //   // Add a scroll driver. This is typically done once for scroll-based animations.
  //   lax.addDriver('scrollY', function () {
  //     return window.scrollY;
  //   });

  //   // Optional: handle window resize for responsive animations
  //   function handleResize() {
  //     lax.update();
  //   }
  //   window.addEventListener('resize', handleResize);
  //   handleResize(); // initial call

  //   // Cleanup global lax.js drivers/listeners on unmount if necessary for a single-page app structure
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [])

  return (
    <AppProvider>
      <BrowserRouter>
        <RouteLoaderWrapper>

          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<JoinUs />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </main>

          <Footer />
          <ScrollToTopButton />

        </RouteLoaderWrapper>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
