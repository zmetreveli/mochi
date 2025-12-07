import React from "react";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";
import { useCart } from "../../components/context/CartContext";

const ProductList = ({ products }) => {
  const { add } = useCart();
  const addToCart = (product) => add(product);

  return (
    <div className={styles.productList}>
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          priority={idx < 2}
        />
      ))}
    </div>
  );
};

export default ProductList;
