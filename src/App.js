import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import ContactUs from './components/pages/contactUs';
import Blog from './components/pages/Blog';
import Download from './components/pages/Download';
import Product from './components/pages/Product';
import AboutUs from './components/pages/aboutUs';
import AllInOne from './components/pages/allInOne';
import HighVoltage from './components/pages/highVoltage';
import Language from './components/pages/language';
import TwoURackmount from './components/pages/2URackmount';
import SingleProduct from './components/pages/singleproduct';
import Solution from './components/pages/Solution';
import SolarESSCS from './components/pages/SolarESSCS';
import Solution2 from './components/pages/Solution2';
import Solution3 from './components/pages/Solution3';
import Footer from './components/footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Download' element={<Download />} />
        <Route path='/Product/:id' element={<Product />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/allInOne' element={<AllInOne />} />
        <Route path='/highVoltage' element={<HighVoltage />} />
        <Route path='/language' element={<Language />} />
        <Route path='/Solutions' element={<Solution />} />
        <Route path='/Solution/:id' element={<SolarESSCS />} />
        <Route path='/Solution2' element={<Solution2 />} />
        <Route path='/Solution3' element={<Solution3 />} />
        <Route path='/SingleProduct/:id' element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
