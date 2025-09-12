import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./AdminLogin.module.css";

export default function AdminLogin({ onLoggedIn }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: pass,
    });
    if (error) return setErr(error.message);
    onLoggedIn?.(data.user);
  };

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <h2>Admin — Iniciar sesión</h2>
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
        <button type="submit" className={styles.button}>
          Entrar
        </button>
        {err && <p className={styles.error}>{err}</p>}
      </form>
    </div>
  );
}
