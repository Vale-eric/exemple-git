import React from 'react'
import { Nav, Container, Row }  from 'react-bootstrap'

const MenuNav = () =>{
  return (
    <Container>
      <Row>
      <Nav activeKey="/home" className="flex-column">
      <Nav.Link href="#home">Acceuil</Nav.Link>
      <Nav.Link href="#link">Nos chambres</Nav.Link>
      <Nav.Link href="#link">La piscine</Nav.Link>
      <Nav.Link href="#link">Notre table</Nav.Link>
      <Nav.Link href="#link">Randonnées</Nav.Link>
      <Nav.Link href="#link">Plan d'accès</Nav.Link>
      <Nav.Link href="#link">Politique</Nav.Link>
      <Nav.Link href="#link">Nos tarifs et formules</Nav.Link>
      <Nav.Link href="#link">Actualités</Nav.Link>
      <Nav.Link href="#link">Disponibilités</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
      <Nav.Link href="#link">Réservations</Nav.Link>
    </Nav>
    </Row>
    </Container>
  )
}

export default MenuNav