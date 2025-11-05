// import './App.css';
import '../src/styles/base.css';
import '../src/styles/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/composed-components/Header';
import { Home } from './pages/Home'
import {Footer} from './components/composed-components/Footer'




function App() {
    return (
        <BrowserRouter>
            <Header />
            <main >
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}
export default App;