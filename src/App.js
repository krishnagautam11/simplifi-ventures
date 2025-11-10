// import './App.css';
import "../src/styles/base.css";
import "../src/styles/style.css";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  ScrollingAnimation(".reveal", 120, false);
  return (
   <AppProvider>
     <BrowserRouter>
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
    </BrowserRouter>
   </AppProvider>
  );
}
export default App;
