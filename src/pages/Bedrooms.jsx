import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import imgBedroom from '../../src/img/chambre1-3.jpg'

const BedRooms = () =>{
  return (
  <Container>
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgBedroom} />
      <Card.Body>
    <Card.Title>Chambre OR</Card.Title>
    <Card.Text>
    Son couchage, au choix soit 2 lits de 80x200 ou 1 lit de 160x200. 
    Un coin bureau et une penderie miroir.
    Exposée plein est, elle reçoit le soleil du matin par une baie de 170x200 ocultable par volet roulant.
    La chambre or donne sur un couloir fermé qui permet le cas échéant de l'assembler avec la chambre anis.
    Idéal pour un couple et deux enfants. 
    La salle d'eau est équipée d'une cabine de douche avec jets de massage et d'une vasque sur meuble carrelé. 
    les WC sont séparés de la salle d'eau.

    </Card.Text>
    <Button variant="primary">Voir les photos</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>

  )
}
export default BedRooms
