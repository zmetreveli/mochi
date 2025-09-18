import React from "react";
import styles from "./Recettes.module.css";
import mochiCafe from "../../assets/img/mochiCafe.jpg";
import mochiThe from "../../assets/img/mochiThe.webp";
import mochiDessert from "../../assets/img/mochiDessert.jpg";

export default function Recettes() {
  return (
    <div className={styles.recettesPage}>
      <h1 className={styles.principal}>
        Recettes et conseils pour savourer vos mochis
      </h1>
      <p className={styles.intro}>
        Le <strong>mochi glacé</strong> peut se déguster de mille façons : en
        dessert raffiné, en pause gourmande ou même en accord avec une boisson.
        Voici quelques idées simples pour profiter pleinement de vos mochis.
      </p>

      {/* Recette 1 */}
      <article className={`${styles.recette} ${styles.recetteGrid}`}>
        <img
          src={mochiThe}
          alt="Mochi glacé accompagné de thé vert"
          className={styles.imageGrid}
        />
        <div className={styles.textBlock}>
          <h2>Mochi et thé vert japonais</h2>
          <p>
            Accompagnez vos mochis glacés d’un thé matcha ou sencha chaud. Le
            contraste entre la fraîcheur du mochi et la chaleur du thé crée une
            harmonie parfaite, comme au Japon.
          </p>
        </div>
      </article>

      {/* Recette 2 */}
      <article className={styles.recette}>
        <h2>Mochi et café gourmand</h2>
        <img src={mochiCafe} alt="Mochi glacé servi avec un café" />
        <p>
          Servez vos mochis avec un expresso ou un cappuccino, comme alternative
          originale au biscuit. Le mochi vanille ou chocolat se marie
          parfaitement avec le café.
        </p>
      </article>

      {/* Recette 3 */}
      <article className={styles.recette}>
        <h2>Mochi en dessert d’assiette</h2>
        <img src={mochiDessert} alt="Assiette dessert avec mochi glacé" />
        <p>
          Disposez vos mochis sur une assiette avec des fruits frais (fraises,
          mangue, kiwi) et un coulis (framboise ou chocolat). Une présentation
          élégante pour surprendre vos invités.
        </p>
      </article>
    </div>
  );
}
