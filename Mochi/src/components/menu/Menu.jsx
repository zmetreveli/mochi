import React, { useEffect, useState, useCallback, useRef } from "react";
import { supabase } from "../../lib/supabase";
import ProductList from "./ProductList";
import styles from "./Menu.module.css";

const FALLBACK_IMG = "https://placehold.co/600x400?text=Mochi";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error
  const [errorMsg, setErrorMsg] = useState("");
  const isMounted = useRef(true);

  const mapRows = (rows = []) =>
    rows.map((p) => ({
      id: p.id,
      name: p.name ?? "",
      description: p.description ?? "",
      price: Number(p.price ?? 0),
      imgSrc:
        typeof p.img_src === "string" && /^https?:\/\//.test(p.img_src)
          ? p.img_src
          : FALLBACK_IMG,
    }));

  const load = useCallback(async () => {
    setStatus("loading");
    setErrorMsg("");

    const { data, error } = await supabase
      .from("products")
      .select("id,name,description,price,img_src") // solo columnas necesarias
      .order("name", { ascending: true })
      .range(0, 49); // defensivo (50 max)

    if (!isMounted.current) return;

    if (error) {
      console.error("Supabase error:", error);
      setErrorMsg(error.message || "No se pudo cargar el menú.");
      setStatus("error");
      return;
    }

    setProducts(mapRows(data || []));
    setStatus("ok");
  }, []);

  useEffect(() => {
    isMounted.current = true;
    load();
    return () => {
      isMounted.current = false;
    };
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

  if (status === "loading") {
    // justo antes del return
    console.log("🍡 Productos que llegan al menú:", products);

    return (
      <div className={styles.menuPage}>
        <div className={styles.inner}>
          <p style={{ padding: 16 }}>Cargando mochi…</p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={styles.menuPage}>
        <div className={styles.inner}>
          <p style={{ padding: 16, color: "crimson" }}>
            No se pudieron cargar los productos.
            {errorMsg ? ` (${errorMsg})` : ""}
          </p>
        </div>
      </div>
    );
  }

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
