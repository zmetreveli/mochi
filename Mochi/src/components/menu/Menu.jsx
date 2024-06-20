import React, { useState } from "react";
// import styles from "./styles.module.css";
import ProductList from "./ProductList";
// import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
const Menu = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false);
  const products = [
    {
      id: 1,
      name: "Mochi artesano de chocolate",
      description: "Delicioso mochi de chocolate artesanal",
      price: 10.99,
      imgSrc: "https://www.muyjapones.com/wp-content/uploads/2020/03/Mochi.jpg",
    },
    {
      id: 2,
      name: "Mochi artesanal de fresa deliciosa",
      description: "Mochi artesanal relleno de fresa algunas cositas mas",
      price: 12.99,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1700590072727-c98504929014?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Mochi artesanal de té verde",
      description: "Mochi de té verde con relleno dulce",
      price: 11.49,
      imgSrc:
        "https://media.istockphoto.com/id/608000958/es/foto/plato-dulce-con-guinda-verde.jpg?s=1024x1024&w=is&k=20&c=QItVv7O7YQHyBvvNwNiqK3rEscp_ORFR2sUelqoApIs=",
    },
    {
      id: 4,
      name: "Mochi de sakura",
      description: "Mochi de flor de cerezo tradicional japonés",
      price: 9.99,
      imgSrc:
        "https://cdn.pixabay.com/photo/2017/03/02/06/02/sakuramochi-2110491_1280.jpg",
    },
    {
      id: 5,
      name: "Mochi de festival chino",
      description: "Tradicional mochi del festival chino",
      price: 13.99,
      imgSrc:
        "https://media.istockphoto.com/id/1470199971/es/foto/comida-del-festival-qingming-chino.jpg?s=1024x1024&w=is&k=20&c=80I_vratWz2k5NYBH_VQ1VJF8ukHa1R7Nt9acwJ7reY=",
    },
    {
      id: 6,
      name: "Mochi multicolor",
      description: "Mochi japonés multicolor con helado",
      price: 14.99,
      imgSrc:
        "https://media.istockphoto.com/id/1158085114/es/foto/mochi-de-helado-japon%C3%A9s-multicolor-en-masa-de-arroz-y-flores-de-jazm%C3%ADn-sobre-un-fondo-azul-de.jpg?s=1024x1024&w=is&k=20&c=iL_MvtNNGgfuy2cY-fM1DlMeA-fMd1TZ0PjLkYPNy9s=",
    },
    {
      id: 7,
      name: "Mochi de chocolate blanco",
      description: "Mochi artesanal de chocolate blanco",
      price: 11.99,
      imgSrc:
        "https://telemaki.com/130777-square_home_default/mochi-artesano-de-chocolate-blanco.jpg",
    },
    {
      id: 8,
      name: "Mochi de té verde premium",
      description: "Mochi de té verde premium",
      price: 15.99,
      imgSrc:
        "https://cdn.pixabay.com/photo/2024/01/23/20/31/kashiwa-8528206_1280.png",
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
