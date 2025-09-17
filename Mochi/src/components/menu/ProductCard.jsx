import React from "react";
import styles from "./ProductCard.module.css";
import ImgOpt from "../../components/ImgOpt";

const ProductCard = ({ product, addToCart, priority = false }) => {
  return (
    <div className={styles.card}>
      <ImgOpt
        src={product.imgSrc}
        alt={product.name}
        fixed={true} // todas las cards con misma proporción (4:3)
        priority={priority} // las primeras pintan antes
        // sizes por defecto ya sirve; ajusta si tu grid es distinto
      />
      <div className={styles.info}>
        <h5 className={styles.name}>{product.name}</h5>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.bottom}>
          <span className={styles.price}>€{product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
