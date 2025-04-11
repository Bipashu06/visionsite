import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/home";
import About from "./about";
import ContactUs from "./contactus";
import Products from "./products";
import Services from './services'
import Career from "./career";
import ScrollToTop from './scrollToTop';
import Projects from "./projects";
function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/about" element={<About/>} />

        <Route path="/contact" element={<ContactUs/>} />

        <Route path="/products" element={<Products/>} />

        <Route path="/services" element={<Services/>} />

        <Route path="/career" element={<Career/>} />

        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router> 
    </>
  );
}

export default App
