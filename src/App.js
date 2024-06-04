import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header.jsx";
import Products from "./templates/products/products.jsx";
import ClientResources from "./templates/client-resources/client-resources.jsx";
import RiskManagement from "./templates/risk-management/riskManagement.jsx";
import Contact from "./templates/contact/contact.jsx";
import About from "./templates/about/about.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Products />} />
        <Route path="/client-resources" element={<ClientResources />} />
        <Route path="/risk-management" element={<RiskManagement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
