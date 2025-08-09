import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./routes/Services";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import FAQ from "./routes/FAQ";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from './ScrollToTop';
import 'intl-tel-input/build/css/intlTelInput.css';
import ProtectedRoute from './components/ProtectedRoute'; // adjust path
import LibraryPage from './routes/Library';

function App() {
  return (
    <div >
     
      <Navbar/>
      <AnimatePresence>
      <ScrollToTop />
      <Routes>
        
        <Route path='/' element= {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/services" element= {<Services />} />
        <Route path="/signup" element= {<SignUp />} />
        <Route path="/faqs" element= {<FAQ />} />
        <Route path="/login" element= {<Login />} />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <LibraryPage />
            </ProtectedRoute>
          }
        />

      </Routes>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
