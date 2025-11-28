import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, addToCart, priority = false }) => {
  return (
    <div className={styles.card}>
      <img
        src={product.imgSrc}
        alt={product.name}
        className={styles.image}
        loading={priority ? "eager" : "lazy"}
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/600x400?text=Mochi";
        }}
      />

      <div className={styles.info}>
        <h5 className={styles.name}>{product.name}</h5>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.bottom}>
          <span className={styles.price}>€{product.price.toFixed(2)}</span>
          <button
            type="button"
            className={styles.addToCart}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            aria-label={`Añadir ${product.name} al carrito`}
            title="Añadir al carrito"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
