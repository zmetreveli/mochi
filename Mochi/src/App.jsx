import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import Blog from "./components/blog/Blog";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Modal from "react-modal";
import { supabase } from "./lib/supabase";
import AdminGate from "./admin/AdminGate";

// 👇 nuevo
import { CartProvider } from "./components/context/CartContext";

Modal.setAppElement("#root");

function App() {
  useEffect(() => {
    (async () => {
      const hasUrl = !!import.meta.env.VITE_SUPABASE_URL;
      const hasKey = !!import.meta.env.VITE_SUPABASE_ANON_KEY;
      const { data, error } = await supabase.auth.getSession();
      console.log("✅ Supabase conectado:", {
        env_url_presente: hasUrl,
        env_key_presente: hasKey,
        error,
        session: data?.session
          ? "existe"
          : "no hay sesión (normal en este punto)",
      });
    })();
  }, []);

  return (
    <BrowserRouter>
      {/* 👇 ahora todo tiene acceso al carrito */}
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminGate />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
