import React from 'react'
import { Navbar, Form, FormControl, Button, Container, Row, Col }  from 'react-bootstrap'

const myNavBar = () =>{
  return (
  <Container>
  <Row>
    <Col>
      <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">Les Lauriers de Cantenay</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="justify-content-end">
      </Navbar.Collapse>
  
 
    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  
</Navbar>
</Col>
</Row>
</Container>

  )
}
export default myNavBar
