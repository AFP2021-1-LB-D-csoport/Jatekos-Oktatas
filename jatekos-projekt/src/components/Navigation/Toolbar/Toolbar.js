import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const toolbar = () => (
  <header>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/games">Játékos Oktatás</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/games">Játékok</Nav.Link>
        <Nav.Link href="/highscores">Rekordok</Nav.Link>
        <Nav.Link href="/about">Az iskoláról</Nav.Link>
        <Nav.Link href="/myprofile">Profilom</Nav.Link>
      </Nav>
    </Navbar>
  </header>
);

export default toolbar;
