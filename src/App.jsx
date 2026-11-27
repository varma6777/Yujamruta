import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";
import ScrollToTop from "./components/ScrollToTop";
import CartDrawer from "./components/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";

// Five separate pages
import Home from "./pages/Home";
import About from "./pages/About";
import Yoga from "./pages/Yoga";
import Registration from "./pages/Registration";
import Honey from "./pages/Honey";
import BuyHoney from "./pages/BuyHoney";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-cream selection:bg-honey/30 selection:text-forest">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/yoga" element={<Yoga />} />
                <Route path="/yoga-registration" element={<Registration />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/honey" element={<Honey />} />
                <Route path="/buy-honey" element={<BuyHoney />} />
                <Route path="/buy" element={<BuyHoney />} />
                <Route path="/contact" element={<Contact />} />
                {/* Fallback route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <CartDrawer />
            <WhatsAppFloating />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}
