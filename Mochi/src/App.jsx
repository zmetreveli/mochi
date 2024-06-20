import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import Blog from "./components/blog/Blog";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import "antd/dist/antd.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
