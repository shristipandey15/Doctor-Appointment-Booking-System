import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Myprofile from "./pages/Myprofile";
import Login from "./pages/Login";
import MyAppoinment from "./pages/MyAppoinment";
import Appointmnet from "./pages/Appointmnet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/myappointment" element={<MyAppoinment />} />
        <Route path="/appointment/:docId" element={<Appointmnet />} />
      </Routes>
     <Footer />
    </div>
  );
};

export default App;
