import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [currentPage, setCurrentPage] = useState('home')

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <main className={`${darkMode ? 'dark' : null} overflow-hidden`}>
            <BrowserRouter>
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <Routes>
                    <Route path='/' element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/about' element={<About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main >
    );
}

export default App;
