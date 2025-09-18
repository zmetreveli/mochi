import React from "react";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";
import { useCart } from "../../components/context/CartContext"; // asegúrate de la ruta correcta

const ProductList = ({ products }) => {
  const { add } = useCart(); // 👈 ahora dentro del componente
  const addToCart = (product) => add(product);

  return (
    <div className={styles.productList}>
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          priority={idx < 2} // 1–2 primeras con prioridad
        />
      ))}
    </div>
  );
};

export default ProductList;
