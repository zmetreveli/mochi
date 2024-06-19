import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.productImg}
        src={product.imgSrc}
        alt={product.name}
      />
      <div className={styles.info}>
        <h5 className={styles.name}>{product.name}</h5>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.bottom}>
          <span className={styles.price}>${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className={styles.addToCart}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
