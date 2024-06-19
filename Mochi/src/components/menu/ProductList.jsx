import React, { useState } from "react";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products, setShoppingList, shoppingList }) => {
  const addToCart = (product) => {
    if (shoppingList.find((e) => e.id === product.id)) {
      const updatedShoppingList = shoppingList.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setShoppingList(updatedShoppingList);
    } else {
      setShoppingList([...shoppingList, { ...product, amount: 1 }]);
    }
  };

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
