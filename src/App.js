import React, { useState } from "react";
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
import { ProtectedRoute, GuestRoute } from './components/ProtectedRoute'; // adjust path
import LibraryPage from './routes/Library';
import { Toaster } from 'sonner';
import WaiverModal from './components/Waivers/Waiver';
import TermsModal from './components/Waivers/Terms';
import CancellationModal from './components/Waivers/Cancellation';
function App() {
  const [openModal, setOpenModal] = useState(null); // null or 'waiver', 'privacy', 'cancellation'

  const openModalByName = (name) => setOpenModal(name);
  const closeModal = () => setOpenModal(null);
  return (
    <div >
     <Toaster richColors position="top-center"/>
      <Navbar/>
      <AnimatePresence>
      <ScrollToTop />
      <Routes>
        
        <Route path='/' element= {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/services" element= {<Services />} />
        <Route path="/signup" element= {<GuestRoute> <SignUp openModal={openModalByName} /> </GuestRoute>} />
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
      <Footer openModal={openModalByName}/>
      {openModal === 'waiver' && <WaiverModal onClose={closeModal} />}
      {openModal === 'terms' && <TermsModal onClose={closeModal} />}
      {openModal === 'cancellation' && <CancellationModal onClose={closeModal} />}
    </div>
  );
}

export default App;
