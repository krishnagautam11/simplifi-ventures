// import './App.css';
import '../src/styles/base.css';
import '../src/styles/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/composed-components/Header';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Footer } from './components/composed-components/Footer'
import { Studio } from './pages/Studio';
import { Contact } from './pages/Contact';
import { JoinUs } from './pages/JoinUs';
import { Resources } from './pages/Resources';





function App() {
    return (
        <BrowserRouter>
            <Header />
            <main >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/studio" element={<Studio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/join" element={<JoinUs />} />
                     <Route path="/resources" element={<Resources />} />
                   
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
export default App;