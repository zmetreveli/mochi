import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import Blog from "./components/blog/Blog";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cloudinary from "./components/pricing/Cloudinary";
import { Navigate } from "react-router-dom";
// import PricingBoard from "./components/pricing/PricingBoard";
// import "antd/dist/antd.css";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Asegúrate de que "root" es el ID del div en tu HTML principal

// *------modificacion -----------
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Cloudinary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
