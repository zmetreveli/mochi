import React from "react";
import styles from "./styles.module.css";
import comboMochi from "../../assets/img/comboMochi.jpeg";
import mochiChocolate from "../../assets/img/mochiChocolate.jpg";

const Blog = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.opening}>
        <div className={styles.box1}>
          <img className={styles.image} src={comboMochi} alt="Combo Mochi" />
        </div>
        <div className={styles.box2}>
          <h1 className={styles.h1}>
            Mochi, un dessert japonais qui triomphe en Occident
          </h1>
          <p className={styles.p}>
            Les mochis, le dessert par excellence du Japon, sont des petites
            boules au goût délicieux offrant une grande variété de textures.
            Cependant, la valeur potentielle de ce dessert est surtout
            culturelle, car il est présent dans l'histoire japonaise depuis de
            nombreuses décennies et a été préservé jusqu'à nos jours.
            Traditionnellement, les mochis sont très consommés […]
          </p>
        </div>
      </div>
      <article className={styles.article}>
        <p className={styles.p}>
          Les mochis, le dessert par excellence du Japon, sont des petites
          boules au goût délicieux offrant de nombreuses possibilités de
          textures différentes. Pourtant, la valeur potentielle de ce dessert
          est avant tout culturelle, car il est présent dans l'histoire
          japonaise depuis de nombreuses décennies et a été préservé jusqu'à nos
          jours.
        </p>
        <p className={styles.p}>
          Traditionnellement, les mochis sont très consommés par les Japonais
          lors des fêtes de fin d'année, car ils croient que ces délices
          apportent chance, prospérité et bonheur pour la nouvelle année. C'est
          une tradition que les Japonais ont maintenue pendant des siècles. Le
          mochi est un aliment assez intéressant, avec différents types, mais
          une chose reste constante : la délicieuse base de riz, qui est
          préparée pendant de nombreuses heures.
        </p>
        <p className={styles.p}>
          Il n'existe pas de garniture standard pour les mochis, cela dépend
          toujours des goûts de chacun. Il existe des mochis qui se mangent dans
          une soupe avec des légumes, d'autres qui sont parfaits pour être
          dégustés comme en-cas, et les plus remarquables sont ceux qui
          contiennent une garniture de glace, sans aucun doute un dessert
          délicieux et parfait pour toutes les occasions.
        </p>
        <h2>Comment sont fabriqués les mochis ?</h2>
        <div className={styles.boxBlock}>
          <p className={styles.p}>
            Sa préparation est une technique qui demande beaucoup d'heures, de
            pratique et de patience. Pour préparer un mochi, il faut d'abord
            préparer le riz gluant en le faisant tremper. La préparation du riz
            prend environ 2 à 3 heures. Après le trempage, il est cuit à la
            vapeur, de l'eau est ajoutée et on commence à le pétrir. Une fois
            pétrie, cette pâte est mélangée avec de l'amidon, et c'est à ce
            moment que l'on peut commencer à la façonner. L'objectif est de
            créer de petites boules remplies de garniture et de les pétrir
            jusqu'à obtenir une boule parfaite. C'est un processus délicat qui
            nécessite beaucoup de patience. La discipline requise pour le faire
            fait sans aucun doute du mochi un dessert authentique et délicieux.
          </p>
        </div>
        <p>
          <img
            className={styles.imageArticle}
            src={mochiChocolate}
            alt="Mochi Chocolate"
          />
        </p>
        <p className={styles.p}>
          La préparation de ces délicieuses boules est très caractéristique. La
          garniture dépend toujours de nos goûts, mais sans aucun doute, l'une
          des garnitures qui a réussi à être l'association parfaite pour les
          mochis est la glace. Cette combinaison est devenue la plus populaire
          en gastronomie. C'est pourquoi les mochis sont souvent associés
          davantage à un dessert qu'à un complément pour les soupes ou un
          en-cas. La fusion avec la glace a donné une infinité d'opportunités et
          de saveurs à ce dessert si original, conçu pour être dégusté après un
          bon repas. Parmi les types de mochis existants, la variante glacée
          profite des inclinations des consommateurs vers les desserts aux
          saveurs naturelles. Cette innovation a certainement fait des mochis
          l'un des desserts les plus populaires en gastronomie.
        </p>
        <p className={styles.p}>
          De nos jours, le mochi est un dessert populaire tout au long de
          l'année. Nous avons apprécié l'histoire et la signification de ce
          petit délice. Sa préparation est sans aucun doute spéciale, ce qui
          rend ce plat encore plus exquis. Par conséquent, la popularité du
          mochi n'est pas un mystère : une petite boule molle, colorée et
          savoureuse attire sans aucun doute l'attention sur le marché de la
          gastronomie. Étant donné qu'il peut être consommé en version salée et
          sucrée, cela fait de cette nourriture un délice flexible qui s'adapte
          aux goûts de chacun. Sans aucun doute, les mochis vont bien au-delà
          d'une simple boule farcie. Le mochi sera toujours lié à la famille, à
          l'amour, à la tradition et aux bons vœux pour tous ceux qui en
          profitent.
        </p>

        <div className={styles.book}>
          <img
            className={styles.img}
            src="https://www.insidehook.com/wp-content/uploads/2016/06/Masaharu-Morimoto-e1464978023471-1.jpg?fit=1425%2C1995"
          />
          <div className={styles.cover}>
            <p className={styles.mochiSecret}>Mochi Master</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
