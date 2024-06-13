import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import comboMochi from "../../assets/img/comboMochi.jpeg";
import mochiChocolate from "../../assets/img/mochiChocolate.jpg";
import styles from "./styles.module.css";

const products = [
  {
    image: comboMochi,
    title: "Combo de mochis artesanos",
    description: "1 mochi de cheesecake 1 mochi de te verde 1 mochi...",
    price: "15,00",
  },
  {
    image: mochiChocolate,
    title: "Mochi artesano de chocolate",
    description: "Mochi artesanal con exquisito sabor a chocolate.",
    price: "5,20",
  },
  {
    image: mochiChocolate,
    title: "Mochi artesano de chocolate",
    description: "Mochi artesanal con exquisito sabor a chocolate.",
    price: "5,20",
  },
  {
    image: mochiChocolate,
    title: "Mochi artesano de chocolate",
    description: "Mochi artesanal con exquisito sabor a chocolate.",
    price: "5,20",
  },
  {
    image: mochiChocolate,
    title: "Mochi artesano de chocolate",
    description: "Mochi artesanal con exquisito sabor a chocolate.",
    price: "5,20",
  },
  {
    image: mochiChocolate,
    title: "Mochi artesano de chocolate",
    description: "Mochi artesanal con exquisito sabor a chocolate.",
    price: "5,20",
  },
  {
    image: mochiChocolate,
    title: "Mochi artesano de chocolate",
    description: "Mochi artesanal con exquisito sabor a chocolate.",
    price: "5,20",
  },
  {
    image: mochiChocolate,
    title: "Mochi artesano de chocolate",
    description: "Mochi artesanal con exquisito sabor a chocolate.",
    price: "5,20",
  },
];

const ProductList = () => {
  return (
    <Container className={styles.mainContainer}>
      <Row>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
