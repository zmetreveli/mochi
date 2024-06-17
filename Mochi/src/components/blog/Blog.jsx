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
            Mochi, un postre japonés que triunfa en occidente
          </h1>
          <p>
            Los Mochis, el postre por excelencia de Japón, son bolitas que
            tienen un sabor delicioso y ofrecen muchas posibilidades de texturas
            diferentes. Aún así, el potencial valor de este postre es cultural
            ya que lleva muchos lustros presente en la historia nipona y se ha
            preservado hasta nuestros días. Tradicionalmente, los mochis son muy
            consumidos […]
          </p>
        </div>
      </div>
      <article className={styles.article}>
        <p>
          Los Mochis, el postre por excelencia de Japón, son bolitas que tienen
          un sabor delicioso y ofrecen muchos posibilidades de texturas
          diferentes. Aún así el potencial valor de este postre es cultural ya
          que lleva muchos lustros presente en la história nipona y se ha
          preservado hasta nuestros dias.
        </p>
        <p>
          Tradicionalmente, los mochis son muy consumidos por los japoneses en
          las fiestas de fin de año, porque tienen la creencia que estos
          manjares dan buena suerte, prosperidad y felicidad de cara al nuevo
          año, siendo una tradición que los japoneses han mantenido durante
          siglos. El Mochi es un alimento bastante interesante, existen
          distintos tipos, pero una cosa que se mantiene constante, es la
          deliciosa base de arroz la cual se prepara durante muchas horas.
        </p>
        <p>
          No existe un relleno de mochis estándard, siempre depende del gusto de
          cada uno. Existen mochis que se comen en sopa con verduras, otros que
          son perfectos para disfrutar como refrigerios y los más destacados son
          los que contienen relleno de helado, sin duda un postre delicioso y
          perfecto para cualquier ocasión.
        </p>
        <h2>¿Cómo se hacen los mochis?</h2>
        <div className={styles.boxBlock}>
          <p>
            Su preparación es una técnica que lleva muchas horas, práctica y
            paciencia, para preparar un mochi uno debe preparar el arroz
            glutinoso mojándolo. Preparar el arroz lleva aproximadamente de 2 a
            3 horas, después de su remojo, se cocina al vapor, se agrega agua y
            comienza a amasar, una vez amasada esta masa se une al almidón, y
            aquí se puede comenzar a moldear, el objetivo es crear pequeñas
            bolas recubiertas de relleno y moler hasta obtener una bola
            perfecta. Es un proceso que es delicado y requiere mucha paciencia,
            la disciplina requerida para hacerlo sin duda hacen del mochi un
            postre auténtico y delicioso.
          </p>
        </div>
        <p>
          <img
            className={styles.imageArticle}
            src={mochiChocolate}
            alt="Mochi Chocolate"
          />
        </p>
        <p>
          La preparación de estas deliciosas bolas es muy característico, el
          relleno depende siempre de nuestros gustos, pero desde luego, uno de
          los rellenos que ha conseguido ser la unión perfecta para los mochis,
          es el helado, está combinación ha logrado ser las más popular en la
          gastronomía, es por eso que los mochis suelen asociarse más a un
          postre que a un complemento para sopas o un bocadillo, la fusión con
          el helado a dado un sin fin de oportunidades y sabores a este postre
          tan original, está hecho para ser degustado después de una buena
          comida. Entre los tipos de mochis existentes, la variante de helado
          aprovecha las inclinaciones de los consumidores hacia los postres
          llenos de sabor natural, ciertamente, esta innovación ha hecho que los
          mochis alcancen la cúspide de los postres populares en la gastronomía.
        </p>
        <p>
          Hoy en día, el mochi es un postre popular durante todo el año. Hemos
          valorado la historia y el significado de este pequeño manjar, su
          preparación sin duda es especial, algo que hace aún más exquisito este
          plato, por lo tanto la popularidad del mochi no es ningún misterio,
          una pequeña bola blanda, colorida y sabrosa, es algo que sin duda
          llama la atención en el mercado de la gastronomía, teniendo en cuenta
          que puede ser consumida en salado y dulce, hace de esta comida un
          manjar flexible que se adapta a los gustos de cada uno, sin duda, los
          mochis van más allá que una simple bola con relleno, el mochi siempre
          estará ligado a la familia, el amor, la tradición y los buenos deseos
          para todos aquellos que los disfrutan.
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
