import React from "react";
import styles from "./styles.module.css";
import { deleteProduct } from "../../utils/api";
import ModifyProductModal from "./ModifyModal";
import { useState } from "react";
function PricingBoard({
  productName,
  productDescription,
  productPrice,
  productImg,
}) {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  return (
    <div className={styles.mainBox}>
      <div>
        <h1>DashBoard</h1>
        <div>
          <div
            onClick={() => {
              setIsModifyModalOpen(true);
            }}
          >
            <div className={styles.upperContainer}>
              <img
                className={styles.productImg}
                // src={producto.img || productImg}
                alt=""
              />
              <div className={styles.textContainer}>
                <h5>{productName}</h5>
                <p className={styles.description}>{productDescription}</p>
              </div>
            </div>
            <div className={styles.bottomContainer}>
              <aside>{productPrice}</aside>
            </div>
          </div>
          <button
            onClick={() => {
              deleteProduct(producto._id);
            }}
            className={styles.deleteIcon}
          >
            {/* <img className={styles.deleteIcon} src={deleteIcon} alt="" /> */}
          </button>
        </div>
        <ModifyProductModal
          restaurante={restaurante}
          isModifyModalOpen={isModifyModalOpen}
          setIsModifyModalOpen={setIsModifyModalOpen}
          producto={producto}
        />
      </div>
    </div>
  );
}

export default PricingBoard;
