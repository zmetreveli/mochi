// src/admin/AdminPanel.jsx
import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../lib/supabase";
import "./admin.css";

export default function AdminPanel() {
  const [items, setItems] = useState([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setError("");
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("name");
    if (error) {
      console.error(error);
      setError(error.message);
      return;
    }
    setItems(data || []);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const updateField = async (id, field, value) => {
    setSaving(true);
    const patch = { [field]: field === "price" ? Number(value) : value };
    const { error } = await supabase
      .from("products")
      .update(patch)
      .eq("id", id);
    if (error) alert(error.message);
    setSaving(false);
  };

  const uploadImage = async (id, file) => {
    if (!file) return;
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
    const path = `${id}/${crypto.randomUUID()}.${ext}`;
    const { error: upErr } = await supabase.storage
      .from("products")
      .upload(path, file, { upsert: true });
    if (upErr) return alert(upErr.message);
    const { data: pub } = supabase.storage.from("products").getPublicUrl(path);
    await updateField(id, "img_src", pub.publicUrl);
    await load();
  };

  const addProduct = async () => {
    const name = prompt("Nombre del producto:");
    if (!name) return;
    const priceInput = prompt("Precio (€):");
    const price = Number(priceInput);
    if (Number.isNaN(price)) return alert("Precio inválido");
    const { error } = await supabase
      .from("products")
      .insert({ name, price, description: "", img_src: "" });
    if (error) return alert(error.message);
    await load();
  };

  const deleteProduct = async (id) => {
    if (!confirm("¿Eliminar este producto?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) return alert(error.message);
    await load();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  return (
    <div className="admin-page">
      <div className="admin-wrap">
        <div className="admin-toolbar">
          <h2 className="admin-title">Panel Admin — Productos</h2>
          <span className="admin-badge">Mochi</span>
        </div>

        <div className="admin-topbar">
          <button
            className="admin-btn admin-btn--primary big"
            onClick={addProduct}
          >
            ➕ Añadir Mochi
          </button>
          <div className="spacer" />
          <button className="admin-btn" onClick={signOut}>
            Salir
          </button>
        </div>

        <p className="admin-saving">{saving ? "Guardando..." : " "}</p>
        {error && (
          <p style={{ color: "#ff8c8c", marginBottom: 12 }}>Error: {error}</p>
        )}

        <div className="admin-card">
          {items.length === 0 && (
            <div style={{ padding: 16, color: "var(--admin-muted)" }}>
              No hay productos todavía. Pulsa <b>“➕ Añadir Mochi”</b> para
              crear el primero.
            </div>
          )}

          {items.map((p) => (
            <div key={p.id} className="admin-row">
              <img
                className="admin-img"
                src={p.img_src || "https://placehold.co/120x86?text=Mochi"}
                alt={p.name}
              />

              <div className="admin-field">
                <label>Nombre</label>
                <input
                  className="admin-input"
                  defaultValue={p.name}
                  onBlur={(e) => updateField(p.id, "name", e.target.value)}
                />
                <div className="admin-note">{p.id}</div>
              </div>

              <div className="admin-field">
                <label>Precio (€)</label>
                <input
                  className="admin-number"
                  type="number"
                  step="0.01"
                  defaultValue={p.price}
                  onBlur={(e) => updateField(p.id, "price", e.target.value)}
                />
              </div>

              <div className="admin-field">
                <label>Descripción</label>
                <input
                  className="admin-input"
                  defaultValue={p.description || ""}
                  onBlur={(e) =>
                    updateField(p.id, "description", e.target.value)
                  }
                />
              </div>

              <div className="admin-actions">
                <label className="admin-note">Cambiar foto</label>
                <input
                  className="admin-file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => uploadImage(p.id, e.target.files?.[0])}
                />
                <button
                  className="admin-btn admin-btn--danger"
                  onClick={() => deleteProduct(p.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="admin-fab" onClick={addProduct} title="Añadir Mochi">
        +
      </button>
    </div>
  );
}
