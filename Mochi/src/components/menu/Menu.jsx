import styles from "./styles.module.css";
import React, { useState } from "react";
import mochi from "../../assets/img/m2.jpeg";
import mochi9 from "../../assets/img/m9.jpeg";
import mochiCocolate from "../../assets/img/mochiChocolate.jpg";
import ShoppingCartModal from "../shoppingCard/ShoppingCartModal";

export default function ProductList({
  productName,
  productDescription,
  productPrice,
  productImg,
  setShoppingList,
  shoppingList,
  product,
  restaurant,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addToCart = () => {
    if (shoppingList.find((e) => e.id === product._id)) {
      const ProductIndex = shoppingList.findIndex((e) => e.id === product._id);
      const updatedShoppingList = [...shoppingList];
      updatedShoppingList[ProductIndex].ammount += 1;
      setShoppingList(updatedShoppingList);
    } else {
      setShoppingList([
        ...shoppingList,
        { shop: restaurant._id, id: product._id, ammount: 1 },
      ]);
    }
  };

  return (
    <div className={styles.flexiBox}>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img
            className={styles.productImg}
            src="https://telemaki.com/130777-square_home_default/mochi-artesano-de-chocolate-blanco.jpg"
          />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi artesano</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img
            className={styles.productImg}
            src="https://telemaki.com/130964-square_home_default/mochi-artesano-de-te-verde.jpg"
          />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img
            className={styles.productImg}
            src="	https://telemaki.com/130968-square_home_default/combo-de-mochis-artesanos-3u.jpg"
          />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Combo</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img className={styles.productImg} src={mochi} />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img className={styles.productImg} src={mochiCocolate} />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img className={styles.productImg} src={mochi9} />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img
            className={styles.productImg}
            src="https://telemaki.com/130777-square_home_default/mochi-artesano-de-chocolate-blanco.jpg"
          />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img
            className={styles.productImg}
            src="https://telemaki.com/130777-square_home_default/mochi-artesano-de-chocolate-blanco.jpg"
          />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img
            className={styles.productImg}
            src="https://telemaki.com/130777-square_home_default/mochi-artesano-de-chocolate-blanco.jpg"
          />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img
            className={styles.productImg}
            src="https://telemaki.com/130777-square_home_default/mochi-artesano-de-chocolate-blanco.jpg"
          />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img
            className={styles.productImg}
            src="https://telemaki.com/130777-square_home_default/mochi-artesano-de-chocolate-blanco.jpg"
          />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={addToCart} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.upperContainer}>
          <img
            className={styles.productImg}
            src="https://telemaki.com/130777-square_home_default/mochi-artesano-de-chocolate-blanco.jpg"
          />
          <div className={styles.textContainer}>
            <h5 className={styles.hedder}>Mochi</h5>
            <p className={styles.description}>mochi de chocolate</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <aside>{productPrice}</aside>
          <button onClick={openModal} className={styles.addToCart}>
            +
          </button>
        </div>
      </div>
      <ShoppingCartModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
        restaurant={restaurant}
      />
    </div>
  );
}
