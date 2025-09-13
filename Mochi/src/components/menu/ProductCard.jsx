import React from "react";
import styles from "./ProductCard.module.css";
// import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";

const handleWhatsAppClick = () => {
  const phoneNumber = "+33753777557";
  const message = "Bonjour, je voudrais passer une commande.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappLink, "_blank");
};

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
          <span className={styles.price}>€{product.price.toFixed(2)}</span>
          {/* <button
            onClick={() => handleWhatsAppClick(product)}
            className={styles.addToCart}
          >
            +
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
