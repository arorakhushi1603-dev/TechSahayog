import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Volunteer from "./pages/Volunteer";
import Member from "./pages/Member";
import Donation from "./pages/Donation";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/member" element={<Member />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;