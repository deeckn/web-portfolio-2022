import React, { useState } from 'react';
import Navbar from './Pages/Components/Navbar';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <main className={`${darkMode && 'dark'} overflow-hidden`}>
      <BrowserRouter>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path='/' element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </main >
  );
}

export default App;
