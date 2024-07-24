import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./templates/home/home.jsx";
import Products from "./pages/products/products.jsx";
import ClientResources from "./pages/client-resources/client-resources.jsx";
import RiskManagement from "./pages/risk-management/riskManagement.jsx";
import Contact from "./pages/contact/contact.jsx";
import About from "./pages/about/about.jsx";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import { useEffect } from "react";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat:400,700,900", "Playfair Display:400,700,900"],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/client-resources" element={<ClientResources />} />
        <Route path="/risk-management" element={<RiskManagement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
