import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import ProductList from "./ProductList";
import styles from "./Menu.module.css";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  const mapRows = (rows = []) =>
    rows.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      price: Number(p.price),
      imgSrc:
        typeof p.img_src === "string" && /^https?:\/\//.test(p.img_src)
          ? p.img_src
          : "https://placehold.co/600x400?text=Mochi", // fallback robusto
    }));

  const load = useCallback(async () => {
    setStatus("loading");
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("name");
    if (error) {
      console.error("Supabase error:", error);
      setStatus("error");
      return;
    }
    setProducts(mapRows(data || []));
    setStatus("ok");
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    const channel = supabase
      .channel("realtime-products")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        () => load()
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [load]);

  if (status === "loading")
    return <p style={{ padding: 16 }}>Cargando mochi…</p>;
  if (status === "error")
    return (
      <p style={{ padding: 16, color: "crimson" }}>
        No se pudieron cargar los productos.
      </p>
    );

  return (
    <div className={styles.menuPage}>
      <div className={styles.inner}>
        <ProductList
          products={products}
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
      </div>
    </div>
  );
}
