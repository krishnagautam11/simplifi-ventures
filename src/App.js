// import './App.css';
import '../src/styles/base.css';
import '../src/styles/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/composed-components/Header';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Footer } from './components/composed-components/Footer'
import { Studio } from './pages/Studio';





function App() {
    return (
        <BrowserRouter>
            <Header />
            <main >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/studio" element={<Studio />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
export default App;