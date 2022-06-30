import React, { useContext } from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import { DarkModeContext } from './Context/DarkModeContext';
import { CurrentPageProvider } from './Context/CurrentPageContext';

const App: React.FC = () => {
    const { darkMode } = useContext(DarkModeContext)

    return (
        <main className={`${darkMode ? 'dark' : null} overflow-hidden`}>
            <CurrentPageProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CurrentPageProvider>
        </main >
    );
}

export default App;
