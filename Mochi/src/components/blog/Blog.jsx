import React from "react";
import styles from "./styles.module.css";
import comboMochi from "../../assets/img/comboMochi.jpeg";
import mochiChocolate from "../../assets/img/mochiChocolate.jpg";
import mochiMatcha from "../../assets/img/mochiMatcha.jpg";
import mochiMangue from "../../assets/img/mochiMangue.webp";
import mochiVanille from "../../assets/img/mochiVanille.jpg"; // 👈 añade esta imagen si la tienes

const Blog = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.opening}>
        <div className={styles.box1}>
          <img
            className={styles.image}
            src={comboMochi}
            alt="Mochi glacé artisanal - assortiment"
          />
        </div>
        <div className={styles.box2}>
          {/* ✅ H1 principal SEO */}
          <h1 className={styles.h1}>
            Mochis glacés et desserts japonais artisanaux en France
          </h1>
          <p className={styles.p}>
            Les <strong>mochis</strong>, le dessert par excellence du Japon,
            sont des petites boules au goût délicieux offrant une grande variété
            de textures. Cependant, la valeur potentielle de ce dessert est
            surtout culturelle, car il est présent dans l&apos;histoire
            japonaise depuis de nombreuses décennies et a été préservé
            jusqu&apos;à nos jours. Traditionnellement, les mochis sont très
            consommés […]
          </p>
        </div>
      </div>

      {/* ✅ Premier article */}
      <article className={styles.article}>
        <h2 className={styles.h2}>
          Pourquoi le mochi glacé est le dessert japonais préféré en France
        </h2>
        <p className={styles.p}>
          Les <strong>mochis glacés</strong> sont devenus en quelques années
          l’un des <em>desserts japonais</em> les plus populaires en France.
          Leur texture unique et leurs saveurs variées séduisent aussi bien les
          gourmands curieux que les amateurs de cuisine asiatique.
        </p>
        <p className={styles.p}>
          Chez <strong>MochiDS</strong>, nous proposons une sélection artisanale
          avec des saveurs comme <strong>matcha</strong>,{" "}
          <strong>vanille</strong>
          et <strong>mangue passion</strong>. Grâce à notre service de{" "}
          <strong>livraison en France</strong>, vous pouvez commander vos mochis
          préférés directement en ligne.
        </p>
        <p>
          <img
            className={styles.imageArticle}
            src={mochiChocolate}
            alt="Mochi glacé au chocolat artisanal"
          />
        </p>
      </article>

      {/* ✅ Deuxième article */}
      <article className={styles.article}>
        <h2 className={styles.h2}>
          Mochi matcha : la saveur préférée en France
        </h2>
        <p className={styles.p}>
          Parmi toutes les variétés, le <strong>mochi au thé matcha</strong> est
          celui qui rencontre le plus grand succès en France. Son goût subtil et
          légèrement amer séduit les amateurs de <em>desserts japonais</em> à la
          recherche d&apos;authenticité.
        </p>
        <p className={styles.p}>
          Le matcha est une poudre de thé vert d&apos;origine japonaise, réputée
          pour ses bienfaits antioxydants. Combiné à la douceur d&apos;un mochi
          glacé, il crée une harmonie parfaite entre fraîcheur et tradition.
        </p>
        <p>
          <img
            className={styles.imageArticle}
            src={mochiMatcha}
            alt="Mochi glacé au thé matcha artisanal"
          />
        </p>
        <p className={styles.p}>
          Ce parfum est aujourd&apos;hui le plus demandé par nos clients en
          France. Que ce soit pour une dégustation après un repas ou comme
          gourmandise de l&apos;après-midi, le <strong>mochi matcha</strong> est
          devenu un incontournable.
        </p>
      </article>

      {/* ✅ Troisième article */}
      <article className={styles.article}>
        <h2 className={styles.h2}>
          Mochi mangue passion : exotisme et fraîcheur
        </h2>
        <p className={styles.p}>
          Le <strong>mochi mangue passion</strong> est la rencontre parfaite
          entre l&apos;onctuosité de la glace et la fraîcheur des fruits
          exotiques. Son goût sucré et acidulé séduit ceux qui recherchent une
          alternative plus audacieuse aux saveurs classiques.
        </p>
        <p className={styles.p}>
          La mangue apporte une douceur tropicale tandis que le fruit de la
          passion offre une touche acidulée et rafraîchissante. Ensemble, ils
          créent un <em>dessert japonais glacé</em> qui évoque l&apos;été et le
          voyage.
        </p>
        <p>
          <img
            className={styles.imageArticle}
            src={mochiMangue}
            alt="Mochi glacé mangue passion artisanal"
          />
        </p>
        <p className={styles.p}>
          Ce parfum est idéal pour surprendre vos invités ou simplement pour
          profiter d&apos;un moment gourmand et dépaysant. Chez{" "}
          <strong>MochiDS</strong>, le <strong>mochi mangue passion</strong>
          fait partie de nos best-sellers en France.
        </p>
      </article>

      {/* ✅ Quatrième article */}
      <article className={styles.article}>
        <h2 className={styles.h2}>Mochi vanille : la douceur intemporelle</h2>
        <p className={styles.p}>
          Le <strong>mochi vanille</strong> séduit par sa simplicité et son goût
          délicat. C&apos;est une saveur intemporelle qui plaît aussi bien aux
          enfants qu&apos;aux adultes, parfaite pour découvrir le{" "}
          <em>mochi glacé</em> pour la première fois.
        </p>
        <p className={styles.p}>
          Doux et crémeux, il incarne l&apos;équilibre parfait entre tradition
          japonaise et plaisir universel. Le <strong>mochi à la vanille</strong>
          reste un choix sûr pour toutes les occasions.
        </p>
        <p>
          <img
            className={styles.imageArticle}
            src={mochiVanille}
            alt="Mochi glacé vanille artisanal"
          />
        </p>
        <p className={styles.p}>
          Chez <strong>MochiDS</strong>, nous considérons le{" "}
          <strong>mochi vanille</strong> comme une base essentielle de notre
          collection, un classique indémodable qui ne déçoit jamais.
        </p>
      </article>
    </div>
  );
};

export default Blog;
