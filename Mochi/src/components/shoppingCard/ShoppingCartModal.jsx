import React from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";

Modal.setAppElement("#root"); // Set the root element for accessibility

export default function ShoppingCartModal({
  isOpen,
  onRequestClose,
  shoppingList,
  setShoppingList,
  restaurant,
}) {
  const removeFromCart = (productId) => {
    const updatedShoppingList = shoppingList.filter(
      (item) => item.id !== productId
    );
    setShoppingList(updatedShoppingList);
  };

  const incrementAmount = (productId) => {
    const updatedShoppingList = shoppingList.map((item) => {
      if (item.id === productId) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setShoppingList(updatedShoppingList);
  };

  const decrementAmount = (productId) => {
    const updatedShoppingList = shoppingList
      .map((item) => {
        if (item.id === productId && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    setShoppingList(updatedShoppingList);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Shopping Cart"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>Shopping Cart</h2>
      <button onClick={onRequestClose} className={styles.closeButton}>
        Close
      </button>
      {/* <div className={styles.cartContainer}>
        {shoppingList.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <span>{item.name}</span>
            <span>{item.amount}</span>
            <button onClick={() => incrementAmount(item.id)}>+</button>
            <button onClick={() => decrementAmount(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div> */}
    </Modal>
  );
}
