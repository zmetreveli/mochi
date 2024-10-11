// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";
// import logo from "../../assets/logo/logo.avif";
// import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";

// function NavBar() {
//   const [shoppingList, setShoppingList] = useState([]);
//   const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsShoppingCartModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsShoppingCartModalOpen(false);
//   };

//   return (
//     <Navbar className={`${styles.navbar}`} expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <img src={logo} width="80" height="110" alt="Mochi" />
//           <span className={styles.brandName}></span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/blog" className={styles.navLink}>
//               Blog
//             </Nav.Link>
//             <Nav.Link as={Link} to="/menu" className={styles.navLink}>
//               Menu
//             </Nav.Link>
//             <Nav.Link as={Link} to="/pricing" className={styles.navLink}>
//               Pricing
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contact" className={styles.navLink}>
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//         <div>
//           <svg
//             onClick={handleOpenModal}
//             xmlns="http://www.w3.org/2000/svg"
//             width="36"
//             height="36"
//             fill="currentColor"
//             viewBox="0 0 16 16"
//             className={styles.icon}
//           >
//             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
//           </svg>
//           {isShoppingCartModalOpen && (
//             <>
//               <div className={styles.backdrop} onClick={handleCloseModal}></div>
//               <ShoppingCartModal
//                 items={shoppingList}
//                 onClose={handleCloseModal}
//               />
//             </>
//           )}
//         </div>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/logo/logo.png";
import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
import PinCodeModal from "../nav/PinCodeModal"; // Importa el nuevo modal

function NavBar() {
  const [shoppingList, setShoppingList] = useState([]);
  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const navigate = useNavigate(); // Para redirigir

  const handleOpenModal = () => {
    setIsShoppingCartModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsShoppingCartModalOpen(false);
  };

  const handlePricingClick = (e) => {
    e.preventDefault(); // Evitar redireccionamiento inmediato
    setIsPinModalOpen(true); // Mostrar el modal del PIN
  };

  const handlePinSubmit = () => {
    setIsPinModalOpen(false); // Cerrar el modal
    navigate("/pricing"); // Redirigir a la página de precios
  };

  return (
    <Navbar className={`${styles.navbar}`} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/blog">
          <img src={logo} width="80" height="110" alt="Mochi" />
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
            <Nav.Link
              href="/pricing"
              onClick={handlePricingClick}
              className={styles.navLink}
            >
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>
              Contact
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
      <PinCodeModal
        show={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        onSubmit={handlePinSubmit}
      />
    </Navbar>
  );
}

export default NavBar;
