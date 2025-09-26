// src/admin/AdminPanel.jsx
import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../lib/supabase";
import "./admin.css";

export default function AdminPanel() {
  // -------- Productos --------
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

  // -------- Dashboard (vistas) --------
  const [daily, setDaily] = useState([]); // orders_daily
  const [topProducts, setTopProducts] = useState([]); // top_products
  const [statusBreakdown, setStatusBreakdown] = useState([]); // order_status_breakdown
  const [mErr, setMErr] = useState("");
  const [mLoading, setMLoading] = useState(false);

  const loadMetrics = useCallback(async () => {
    setMErr("");
    setMLoading(true);
    try {
      const d = await supabase
        .from("orders_daily")
        .select("*")
        .order("day", { ascending: false })
        .limit(14);
      const tp = await supabase
        .from("top_products")
        .select("*")
        .order("revenue", { ascending: false })
        .limit(8);
      const sb = await supabase
        .from("order_status_breakdown")
        .select("*")
        .order("count", { ascending: false });
      if (d.error) throw d.error;
      if (tp.error) throw tp.error;
      if (sb.error) throw sb.error;
      setDaily(d.data || []);
      setTopProducts(tp.data || []);
      setStatusBreakdown(sb.data || []);
    } catch (e) {
      console.error(e);
      setMErr(e.message || String(e));
    } finally {
      setMLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMetrics();
  }, [loadMetrics]);

  // Totales rápidos
  const totalRevenue =
    daily.reduce((acc, r) => acc + Number(r.revenue || 0), 0) || 0;
  const totalOrders =
    daily.reduce((acc, r) => acc + Number(r.orders || 0), 0) || 0;
  const totalUnits =
    daily.reduce((acc, r) => acc + Number(r.units || 0), 0) || 0;

  // -------- Registro manual (tipo Excel) --------
  const [msRows, setMsRows] = useState([]);
  const [msLoading, setMsLoading] = useState(false);
  const [msErr, setMsErr] = useState("");

  const loadManualSales = useCallback(async () => {
    setMsErr("");
    setMsLoading(true);
    try {
      const { data, error } = await supabase
        .from("manual_sales")
        .select("*")
        .order("sold_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      setMsRows(data || []);
    } catch (e) {
      setMsErr(e.message || String(e));
    } finally {
      setMsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadManualSales();
  }, [loadManualSales]);

  const addManualRow = async () => {
    const item = prompt("Producto:");
    if (!item) return;
    const qty = Number(prompt("Cantidad:", "1") || "1");
    const price = Number(prompt("Precio unitario (€):", "0") || "0");
    const customer = prompt("Cliente (opcional):") || "";
    const notes = prompt("Notas (opcional):") || "";
    const { error } = await supabase
      .from("manual_sales")
      .insert({ item, qty, unit_price: price, customer, notes });
    if (error) return alert(error.message);
    await loadManualSales();
  };

  const updateManualCell = async (id, field, value) => {
    const patch = {
      [field]:
        field === "qty" || field === "unit_price" ? Number(value) : value,
    };
    const { error } = await supabase
      .from("manual_sales")
      .update(patch)
      .eq("id", id);
    if (error) return alert(error.message);
  };

  const deleteManualRow = async (id) => {
    if (!confirm("¿Eliminar fila?")) return;
    const { error } = await supabase.from("manual_sales").delete().eq("id", id);
    if (error) return alert(error.message);
    setMsRows((r) => r.filter((x) => x.id !== id));
  };

  const exportManualCSV = () => {
    const head = [
      "sold_at",
      "customer",
      "item",
      "qty",
      "unit_price",
      "notes",
      "created_at",
    ];
    const esc = (v) => `"${String(v ?? "").replaceAll(`"`, `""`)}"`;
    const lines = msRows.map((r) =>
      [
        r.sold_at,
        r.customer,
        r.item,
        r.qty,
        r.unit_price,
        r.notes,
        r.created_at,
      ]
        .map(esc)
        .join(",")
    );
    const csv = [head.join(","), ...lines].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "manual_sales.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="admin-page">
      <div className="admin-wrap">
        {/* -------- Barra superior -------- */}
        <div className="admin-toolbar">
          <h2 className="admin-title">Panneau Admin — Produits</h2>
          <span className="admin-badge">Mochi</span>
        </div>

        <div className="admin-topbar">
          <button
            className="admin-btn admin-btn--primary big"
            onClick={addProduct}
          >
            ➕ Ajouter un Mochi
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

        {/* -------- Lista de productos -------- */}
        <div className="admin-card">
          {items.length === 0 ? (
            <div style={{ padding: 16, color: "var(--admin-muted)" }}>
              Il n’y a pas encore de produits. Appuyez{" "}
              <b>“➕ Ajouter un Mochi”</b> pour créer le premier.
            </div>
          ) : (
            items.map((p) => (
              <div key={p.id} className="admin-row">
                <img
                  className="admin-img"
                  src={p.img_src || "https://placehold.co/120x86?text=Mochi"}
                  alt={p.name}
                />
                <div className="admin-field">
                  <label>Nom</label>
                  <input
                    className="admin-input"
                    defaultValue={p.name}
                    onBlur={(e) => updateField(p.id, "name", e.target.value)}
                  />
                  <div className="admin-note">{p.id}</div>
                </div>
                <div className="admin-field">
                  <label>Prix (€)</label>
                  <input
                    className="admin-number"
                    type="number"
                    step="0.01"
                    defaultValue={p.price}
                    onBlur={(e) => updateField(p.id, "price", e.target.value)}
                  />
                </div>
                <div className="admin-field">
                  <label>Description</label>
                  <input
                    className="admin-input"
                    defaultValue={p.description || ""}
                    onBlur={(e) =>
                      updateField(p.id, "description", e.target.value)
                    }
                  />
                </div>
                <div className="admin-actions">
                  <label className="admin-note">Changer la photo</label>
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
                    Supprimer
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* -------- Dashboard -------- */}
        <div className="admin-toolbar" style={{ marginTop: 24 }}>
          <h2 className="admin-title">Dashboard</h2>
          <button className="admin-btn" onClick={loadMetrics}>
            ↻ Refresh
          </button>
        </div>

        {mErr && (
          <div className="admin-card" style={{ color: "#ff8c8c" }}>
            Error cargando métricas: {mErr}
            <div className="admin-note" style={{ marginTop: 8 }}>
              Asegúrate de crear las vistas:{" "}
              <code>orders_daily, top_products, order_status_breakdown</code>
            </div>
          </div>
        )}

        <div className="admin-grid-3">
          <div className="admin-kpi">
            <div className="admin-kpi-label">Ingresos (últimos días)</div>
            <div className="admin-kpi-value">€{totalRevenue.toFixed(2)}</div>
          </div>
          <div className="admin-kpi">
            <div className="admin-kpi-label">Pedidos</div>
            <div className="admin-kpi-value">{totalOrders}</div>
          </div>
          <div className="admin-kpi">
            <div className="admin-kpi-label">Unidades</div>
            <div className="admin-kpi-value">{totalUnits}</div>
          </div>
        </div>

        <div className="admin-grid-2">
          <div className="admin-card">
            <div className="admin-card-title">Top productos</div>
            {mLoading ? (
              <div className="admin-note">Cargando…</div>
            ) : topProducts.length === 0 ? (
              <div className="admin-note">Sin datos.</div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Unidades</th>
                    <th>Ingresos (€)</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((r) => (
                    <tr key={r.id}>
                      <td>{r.name}</td>
                      <td>{Number(r.units_sold || 0)}</td>
                      <td>{Number(r.revenue || 0).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="admin-card">
            <div className="admin-card-title">Estados de pedido</div>
            {mLoading ? (
              <div className="admin-note">Cargando…</div>
            ) : statusBreakdown.length === 0 ? (
              <div className="admin-note">Sin datos.</div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Estado</th>
                    <th>Pedidos</th>
                    <th>Ingresos (€)</th>
                  </tr>
                </thead>
                <tbody>
                  {statusBreakdown.map((r) => (
                    <tr key={r.status}>
                      <td>{r.status}</td>
                      <td>{Number(r.count || 0)}</td>
                      <td>{Number(r.revenue || 0).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-title">Pedidos por día</div>
          {mLoading ? (
            <div className="admin-note">Cargando…</div>
          ) : daily.length === 0 ? (
            <div className="admin-note">Sin datos.</div>
          ) : (
            <table className="admin-table admin-table--compact">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Pedidos</th>
                  <th>Unidades</th>
                  <th>Ingresos (€)</th>
                </tr>
              </thead>
              <tbody>
                {daily.map((r) => (
                  <tr key={r.day}>
                    <td>{new Date(r.day).toLocaleDateString()}</td>
                    <td>{Number(r.orders || 0)}</td>
                    <td>{Number(r.units || 0)}</td>
                    <td>{Number(r.revenue || 0).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* -------- Registro manual (tipo Excel) -------- */}
        <div className="admin-toolbar" style={{ marginTop: 24 }}>
          <h2 className="admin-title">Registro manual (tipo Excel)</h2>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              className="admin-btn admin-btn--primary"
              onClick={addManualRow}
            >
              ➕ Añadir fila
            </button>
            <button className="admin-btn" onClick={loadManualSales}>
              ↻ Refrescar
            </button>
            <button className="admin-btn" onClick={exportManualCSV}>
              ⬇ Export CSV
            </button>
          </div>
        </div>

        {msErr && (
          <div className="admin-card" style={{ color: "#ff8c8c" }}>
            Error: {msErr}
          </div>
        )}

        <div className="admin-card">
          {msLoading ? (
            <div className="admin-note">Cargando…</div>
          ) : msRows.length === 0 ? (
            <div className="admin-note">Sin datos. Pulsa “Añadir fila”.</div>
          ) : (
            <table className="admin-table admin-table--compact">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Cliente</th>
                  <th>Producto</th>
                  <th>Unidades</th>
                  <th>Precio (€)</th>
                  <th>Total (€)</th>
                  <th>Notas</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {msRows.map((r) => (
                  <tr key={r.id}>
                    <td>
                      <input
                        type="date"
                        defaultValue={r.sold_at?.slice(0, 10)}
                        onBlur={(e) =>
                          updateManualCell(r.id, "sold_at", e.target.value)
                        }
                        className="admin-input"
                        style={{ width: 150 }}
                      />
                    </td>
                    <td>
                      <input
                        defaultValue={r.customer || ""}
                        onBlur={(e) =>
                          updateManualCell(r.id, "customer", e.target.value)
                        }
                        className="admin-input"
                      />
                    </td>
                    <td>
                      <input
                        defaultValue={r.item}
                        onBlur={(e) =>
                          updateManualCell(r.id, "item", e.target.value)
                        }
                        className="admin-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="1"
                        min="0"
                        defaultValue={r.qty}
                        onBlur={(e) =>
                          updateManualCell(r.id, "qty", e.target.value)
                        }
                        className="admin-number"
                        style={{ width: 90 }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        defaultValue={r.unit_price}
                        onBlur={(e) =>
                          updateManualCell(r.id, "unit_price", e.target.value)
                        }
                        className="admin-number"
                        style={{ width: 110 }}
                      />
                    </td>
                    <td>
                      €
                      {(Number(r.qty || 0) * Number(r.unit_price || 0)).toFixed(
                        2
                      )}
                    </td>
                    <td>
                      <input
                        defaultValue={r.notes || ""}
                        onBlur={(e) =>
                          updateManualCell(r.id, "notes", e.target.value)
                        }
                        className="admin-input"
                      />
                    </td>
                    <td>
                      <button
                        className="admin-btn admin-btn--danger"
                        onClick={() => deleteManualRow(r.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <button className="admin-fab" onClick={addProduct} title="Añadir Mochi">
        +
      </button>
    </div>
  );
}
