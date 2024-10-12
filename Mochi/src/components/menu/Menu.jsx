import React, { useState } from "react";
import styles from "./styles.module.css";
import ProductList from "./ProductList";
import IMG_0 from "../../assets/img/IMG_0.png";
import IMG_1 from "../../assets/img/IMG_1.png";
import IMG_2 from "../../assets/img/IMG_2.png";
import IMG_3 from "../../assets/img/IMG_3.png";
import IMG_4 from "../../assets/img/IMG_4.png";
import IMG_5 from "../../assets/img/IMG_5.png";
import IMG_6 from "../../assets/img/IMG_6.png";
import IMG_7 from "../../assets/img/IMG_7.png";
import IMG_8 from "../../assets/img/IMG_8.png";
import IMG_9 from "../../assets/img/IMG_9.png";
import IMG_10 from "../../assets/img/IMG_10.png";
import IMG_11 from "../../assets/img/IMG_11.png";
import IMG_12 from "../../assets/img/IMG_12.png";
import IMG_13 from "../../assets/img/IMG_13.png";
import IMG_14 from "../../assets/img/IMG_14.png";

// import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
const Menu = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false);
  const products = [
    {
      id: 2,
      name: "Mochi artesanal de fresa deliciosa",
      description: "Mochi artesanal relleno de fresa algunas cositas mas",
      price: 12.99,
      imgSrc: IMG_0,
    },
    {
      id: 3,
      name: "Mochi artesanal de té verde",
      description: "Mochi de té verde con relleno dulce",
      price: 11.49,
      imgSrc: IMG_1,
    },
    {
      id: 14,
      name: "Mochi de festival chino",
      description: "Tradicional mochi del festival chino",
      price: 13.99,
      imgSrc: IMG_3,
    },
    {
      id: 6,
      name: "Mochi multicolor",
      description: "Mochi japonés multicolor con helado",
      price: 14.99,
      imgSrc: IMG_4,
    },
    {
      id: 7,
      name: "Mochi de chocolate blanco",
      description: "Mochi artesanal de chocolate blanco",
      price: 11.99,
      imgSrc: IMG_5,
    },
    {
      id: 8,
      name: "Mochi de té verde premium",
      description: "Mochi de té verde premium",
      price: 15.99,
      imgSrc: IMG_6,
    },
    {
      id: 1,
      name: "Mochi artesano de chocolate",
      description: "Delicioso mochi de chocolate artesanal",
      price: 10.99,
      imgSrc: IMG_7,
    },
    {
      id: 2,
      name: "Mochi artesanal de fresa deliciosa",
      description: "Mochi artesanal relleno de fresa algunas cositas mas",
      price: 12.99,
      imgSrc: IMG_8,
    },
    {
      id: 3,
      name: "Mochi artesanal de té verde",
      description: "Mochi de té verde con relleno dulce",
      price: 11.49,
      imgSrc: IMG_9,
    },
    {
      id: 4,
      name: "Mochi de sakura",
      description: "Mochi de flor de cerezo tradicional japonés",
      price: 9.99,
      imgSrc: IMG_10,
    },
    {
      id: 5,
      name: "Mochi de festival chino",
      description: "Tradicional mochi del festival chino",
      price: 13.99,
      imgSrc: IMG_11,
    },
    {
      id: 6,
      name: "Mochi multicolor",
      description: "Mochi japonés multicolor con helado",
      price: 14.99,
      imgSrc: IMG_12,
    },
    {
      id: 7,
      name: "Mochi de chocolate blanco",
      description: "Mochi artesanal de chocolate blanco",
      price: 11.99,
      imgSrc: IMG_13,
    },
    {
      id: 8,
      name: "Mochi de té verde premium",
      description: "Mochi de té verde premium",
      price: 15.99,
      imgSrc: IMG_5,
    },
  ];
  const handleOpenModal = () => {
    setIsShoppingCartModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsShoppingCartModalOpen(false);
  };

  return (
    <div>
      <ProductList
        className={styles.mainBox}
        products={products}
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />

      {/* <button onClick={handleOpenModal}>Ver Carrito</button>
      {isShoppingCartModalOpen && (
        <>
          <div className={styles.backdrop} onClick={handleCloseModal}></div>
          <ShoppingCartModal items={shoppingList} onClose={handleCloseModal} />
        </>
      )} */}
    </div>
  );
};
export default Menu;
