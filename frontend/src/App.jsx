import React from 'react'
import NavBar from './Components/NavBar.jsx';
import { Routes,Route  } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import ProductPage from './Pages/ProductPage.jsx';
const App = () => {
  return (
    <div className='min-h-screen bg-base-100 transition-colors duration-300'>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} /> 
      </Routes>
    </div>
  );
}

export default App
