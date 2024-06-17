import { useState } from "react";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import Blog from "./components/blog/Blog";
import Menu from "./components/menu/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
