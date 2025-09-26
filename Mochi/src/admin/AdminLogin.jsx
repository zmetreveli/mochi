import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./AdminLogin.module.css";

export default function AdminLogin({ onLoggedIn }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [remember, setRemember] = useState(false);

  // Al cargar, si hay datos guardados en localStorage → rellenar
  useEffect(() => {
    const savedEmail = localStorage.getItem("admin_email");
    const savedPass = localStorage.getItem("admin_pass");
    if (savedEmail && savedPass) {
      setEmail(savedEmail);
      setPass(savedPass);
      setRemember(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: pass,
    });

    if (error) return setErr(error.message);

    // Guardar o limpiar credenciales según checkbox
    if (remember) {
      localStorage.setItem("admin_email", email);
      localStorage.setItem("admin_pass", pass);
    } else {
      localStorage.removeItem("admin_email");
      localStorage.removeItem("admin_pass");
    }

    onLoggedIn?.(data.user);
  };

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <h2>Admin — Se connecter</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className={styles.input}
        />

        {/* 👇 checkbox recordar */}
        <label className={styles.remember}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Se souvenir de mes données
        </label>

        <button type="submit" className={styles.button}>
          Entrer
        </button>
        {err && <p className={styles.error}>{err}</p>}
      </form>
    </div>
  );
}
