// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import ProductList from "./ProductList";
// // import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
// import IMG_0 from "../../assets/img/IMG_0.png";
// import IMG_2 from "../../assets/img/IMG_2.png";
// import IMG_3 from "../../assets/img/IMG_3.png";
// import IMG_4 from "../../assets/img/IMG_4.png";
// import IMG_5 from "../../assets/img/IMG_5.png";
// import IMG_6 from "../../assets/img/IMG_6.png";
// import IMG_7 from "../../assets/img/IMG_7.png";
// import IMG_8 from "../../assets/img/IMG_8.png";
// import IMG_9 from "../../assets/img/IMG_9.png";
// import IMG_10 from "../../assets/img/IMG_10.png";
// import IMG_11 from "../../assets/img/IMG_11.png";
// import IMG_12 from "../../assets/img/IMG_12.png";
// import IMG_13 from "../../assets/img/IMG_13.png";
// import IMG_14 from "../../assets/img/IMG_14.png";

// const Menu = () => {
//   const [shoppingList, setShoppingList] = useState([]);
//   // const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false);
//   const [cart, setCart] = useState([]);
//   const products = [
//     {
//       id: 0,
//       name: "Tiramisu",
//       description: "Mochi de té verde premium",
//       price: 3.5,
//       imgSrc: IMG_0,
//     },
//     {
//       id: 2,
//       name: "Speculoos",
//       description: "Mochi de té verde con relleno dulce",
//       price: 3.0,
//       imgSrc: IMG_2,
//     },
//     {
//       id: 3,
//       name: "Mangue aux fruit de passion",
//       description: "Tradicional mochi del festival chino",
//       price: 3.0,
//       imgSrc: IMG_3,
//     },
//     {
//       id: 4,
//       name: "Pina colada",
//       description: "Mochi japonés multicolor con helado",
//       price: 3.0,
//       imgSrc: IMG_4,
//     },
//     {
//       id: 14,
//       name: "Milkshake aux framboiss",
//       description: "Mochi de té verde premium",
//       price: 3.0,
//       imgSrc: IMG_14,
//     },
//     {
//       id: 5,
//       name: "Grosseilles rouges",
//       description: "Mochi artesanal de chocolate blanco",
//       price: 3.0,
//       imgSrc: IMG_5,
//     },
//     {
//       id: 6,
//       name: "Banane a pate de noisette",
//       description: "Mochi de té verde premium",
//       price: 3.0,
//       imgSrc: IMG_6,
//     },
//     {
//       id: 7,
//       name: "Ferrero",
//       description: "Delicioso mochi de chocolate artesanal",
//       price: 3.5,
//       imgSrc: IMG_7,
//     },
//     {
//       id: 8,
//       name: "Raffaello",
//       description: "Mochi artesanal relleno de fresa algunas cositas mas",
//       price: 3.5,
//       imgSrc: IMG_8,
//     },
//     {
//       id: 9,
//       name: "Mangue aux fraises",
//       description: "Mochi de té verde con relleno dulce",
//       price: 3.0,
//       imgSrc: IMG_9,
//     },
//     {
//       id: 10,
//       name: "Fraise a la manthe",
//       description: "Mochi de flor de cerezo tradicional japonés",
//       price: 3.0,
//       imgSrc: IMG_10,
//     },
//     {
//       id: 11,
//       name: "Oreo",
//       description: "Tradicional mochi del festival chino",
//       price: 3.0,
//       imgSrc: IMG_11,
//     },
//     {
//       id: 12,
//       name: "Mangue a la vanille",
//       description: "Mochi japonés multicolor con helado",
//       price: 3.0,
//       imgSrc: IMG_12,
//     },
//     {
//       id: 13,
//       name: "Milkshake aux fraises",
//       description: "Mochi artesanal de chocolate blanco",
//       price: 3.0,
//       imgSrc: IMG_13,
//     },
//   ];
//   // const handleOpenModal = () => {
//   //   setIsShoppingCartModalOpen(true);
//   // };

//   // const handleCloseModal = () => {
//   //   setIsShoppingCartModalOpen(false);
//   // };
//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };
//   return (
//     <div>
//       <ProductList
//         className={styles.mainBox}
//         products={products}
//         shoppingList={shoppingList}
//         setShoppingList={setShoppingList}
//       />

//       {/* <button onClick={handleOpenModal}>Ver Carrito</button>
//       {isShoppingCartModalOpen && (
//         <>
//           <div className={styles.backdrop} onClick={handleCloseModal}></div>
//           <ShoppingCartModal items={shoppingList} onClose={handleCloseModal} />
//         </>
//       )} */}
//     </div>
//   );
// };
// export default Menu;

// src/components/menu/Menu.jsx

import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../../lib/supabase"; // ajusta la ruta si cambia
import ProductList from "./ProductList";

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
      imgSrc: p.img_src || "https://via.placeholder.com/600x400?text=Mochi", // fallback
    }));

  // Carga inicial y recargas
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

  // Carga inicial
  useEffect(() => {
    load();
  }, [load]);

  // Realtime: escucha INSERT/UPDATE/DELETE y recarga
  useEffect(() => {
    const channel = supabase
      .channel("realtime-products")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        (_payload) => {
          // console.log("📡 Cambio detectado:", _payload);
          load(); // simple y robusto
        }
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
    <div style={{ padding: 16 }}>
      <ProductList
        products={products}
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
    </div>
  );
}
