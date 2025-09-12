import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

const ADMIN_EMAIL =
  import.meta.env.VITE_ADMIN_EMAIL || "metreveli.zura.2014@gmail.com";

export default function AdminGate() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState(null);

  // 🔒 Al entrar en /admin, cerrar sesión siempre para obligar a login
  useEffect(() => {
    (async () => {
      await supabase.auth.signOut();
      setReady(true);
    })();
  }, []);

  // Escucha cambios de auth
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) return <p style={{ padding: 16 }}>Cargando…</p>;

  // Si no hay usuario: pide login
  if (!user) return <AdminLogin onLoggedIn={() => {}} />;

  // Usuario logueado pero no es el admin permitido
  if (user.email !== ADMIN_EMAIL) {
    return (
      <div style={{ padding: 16 }}>
        <p>No tienes permisos para acceder.</p>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            location.reload();
          }}
        >
          Salir
        </button>
      </div>
    );
  }

  // Admin válido
  return <AdminPanel />;
}
