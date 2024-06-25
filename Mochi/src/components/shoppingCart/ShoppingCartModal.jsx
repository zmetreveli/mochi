import React from "react";
import styles from "./styles.module.css";

const ShoppingCartModal = ({ items, onClose }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <h2>Tu Carrito</h2>
        {items.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}

        <button className={styles.button} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
