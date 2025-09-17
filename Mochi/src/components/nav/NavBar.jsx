import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logoFinal from "../../assets/logo/logoFinal.png";
import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";

function NavBar() {
  const [shoppingList, setShoppingList] = useState([]);
  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false);

  // 👇 controla el estado abierto/cerrado del menú
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();

  const handleOpenModal = () => setIsShoppingCartModalOpen(true);
  const handleCloseModal = () => setIsShoppingCartModalOpen(false);

  const goAdmin = (e) => {
    e.preventDefault();
    navigate("/admin");
    setExpanded(false); // 👈 cerrar menú tras ir a admin
  };

  // done

  return (
    <Navbar
      className={`${styles.navbar}`}
      expand="lg"
      collapseOnSelect
      expanded={expanded} // 👈 controlado
      onToggle={(next) => setExpanded(next)} // 👈 sincroniza con el toggle
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
            {/* antes tenías ml-auto; en BS5 es ms-auto */}
            <Nav.Link
              as={Link}
              to="/blog"
              className={styles.navLink}
              onClick={() => setExpanded(false)} // 👈 cerrar al click
            >
              Blog
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
              onClick={goAdmin} // navega + cierra
              className={styles.navLink}
              style={{ opacity: 0.6, marginLeft: "auto" }}
              title="Admin"
            >
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div>
          <svg
            onClick={handleOpenModal}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={styles.icon}
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          {isShoppingCartModalOpen && (
            <>
              <div className={styles.backdrop} onClick={handleCloseModal}></div>
              <ShoppingCartModal
                items={shoppingList}
                onClose={handleCloseModal}
              />
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
