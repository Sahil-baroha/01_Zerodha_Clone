// import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/landing_page/home/HomePage";
import SignUp from "./components/landing_page/signup/SignUp";
import AboutPage from "./components/landing_page/about/AboutPage";
import ProductPage from "./components/landing_page/products/ProductPage";
import PricingPage from "./components/landing_page/pricing/PricingPage";
import SupportPage from "./components/landing_page/support/SupportPage";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/404_Notfound";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
