import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logoFinal from "../../assets/logo/logoFinal.png";
import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
import { useCart } from "../context/CartContext"; // carrito global

function NavBar() {
  const { items } = useCart(); // mismos items en toda la app
  const totalItems = items.reduce((acc, it) => acc + it.amount, 0);

  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false); // controla el menú móvil
  const navigate = useNavigate();

  const handleOpenModal = () => setIsShoppingCartModalOpen(true);
  const handleCloseModal = () => setIsShoppingCartModalOpen(false);

  const goAdmin = (e) => {
    e.preventDefault();
    navigate("/admin");
    setExpanded(false); // cerrar menú tras navegar
  };

  return (
    <Navbar
      className={`${styles.navbar}`}
      expand="lg"
      expanded={expanded}
      onToggle={(next) => setExpanded(next)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/blog" onClick={() => setExpanded(false)}>
          <img src={logoFinal} width="120" height="120" alt="Mochi" />
          <span className={styles.brandName}></span>
        </Navbar.Brand>

        <Navbar.Toggle
          className={styles.toggle}
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/blog"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/recettes"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Recettes
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/menu"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>

            {/* 🔐 Admin (discreto) */}
            <Nav.Link
              href="/admin"
              onClick={goAdmin}
              className={styles.navLink}
              style={{ opacity: 0.6, marginLeft: "auto" }}
              title="Admin"
            >
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Icono de carrito + badge de cantidad */}
        <div className={styles.cartWrapper}>
          <svg
            onClick={handleOpenModal}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={styles.icon}
            role="button"
            aria-label="Abrir carrito"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>

          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}

          {isShoppingCartModalOpen && (
            <>
              <div className={styles.backdrop} onClick={handleCloseModal}></div>
              {/* Si tu modal ya lee del contexto, no hace falta pasar items */}
              <ShoppingCartModal onClose={handleCloseModal} />
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
