import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/logo/logo.avif";

function NavBar() {
  return (
    <Navbar className={`${styles.navbar}`} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="80"
            height="110"
            className="d-inline-block align-top"
            alt="Mochi"
          />
          <span className={styles.brandName}></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/blog" className={styles.navLink}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className={styles.navLink}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" className={styles.navLink}>
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
