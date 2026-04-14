import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Fashion from "./pages/Fashion";
import FashionDetails from "./pages/FashionDetails";

const App = () => {
  return (
    <div className="h-screen bg-black text-white ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fashion" element={<Fashion />}></Route>

        {/* Dynamic routing */}
        <Route path="/fashion/:id" element={<FashionDetails />}></Route>

        <Route path="/product" element={<Product />}>
          {/* Nested routes for Product */}
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kid" element={<Kids />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
