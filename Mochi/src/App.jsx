// import "./App.css";
// import Footer from "./components/footer/Footer";
// import NavBar from "./components/nav/NavBar";
// import Blog from "./components/blog/Blog";
// import Menu from "./components/menu/Menu";
// import Contact from "./components/contact/Contact";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Cloudinary from "./components/pricing/Cloudinary";
// import { Navigate } from "react-router-dom";
// // import PricingBoard from "./components/pricing/PricingBoard";
// // import "antd/dist/antd.css";
// import Modal from "react-modal";

// Modal.setAppElement("#root"); // Asegúrate de que "root" es el ID del div en tu HTML principal

// // *------modificacion -----------
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Navigate to="/blog" replace />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/pricing" element={<Cloudinary />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// App.jsx
import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import Blog from "./components/blog/Blog";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// import Cloudinary from "./components/pricing/Cloudinary";
import Modal from "react-modal";

// 🔴 Añadido: Supabase client
import { supabase } from "./lib/supabase";
import AdminGate from "./admin/AdminGate";

Modal.setAppElement("#root"); // Asegúrate de que "root" es el ID del div en tu HTML principal

function App() {
  useEffect(() => {
    (async () => {
      // Verifica que las variables de entorno lleguen al front
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
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/pricing" element={<Cloudinary />} /> */}

          {/* 🔐 Panel admin */}
          <Route path="/admin" element={<AdminGate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
