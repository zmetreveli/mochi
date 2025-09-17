import React from "react";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products, setShoppingList, shoppingList }) => {
  const addToCart = (product) => {
    if (shoppingList.find((e) => e.id === product.id)) {
      const updated = shoppingList.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setShoppingList(updated);
    } else {
      setShoppingList([...shoppingList, { ...product, amount: 1 }]);
    }
  };

  return (
    <div className={styles.productList}>
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          priority={idx < 2} // ⬅️ 1–2 primeras con alta prioridad
        />
      ))}
    </div>
  );
};

export default ProductList;
