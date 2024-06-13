import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import styles from "./styles.module.css";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className={styles.mainBox}>
      <Col md={6} lg={4}>
        <Card className="bg-dark">
          <Card.Img variant="top" src={image} />
          <Card.Body className={styles.cardBody}>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="flex-grow-1">{description}</Card.Text>

            <div className="d-flex justify-content-between align-items-center">
              <span className="price">{price} €</span>
              <Button variant="custom" className={styles.btnCostom}>
                Read more
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ProductCard;
