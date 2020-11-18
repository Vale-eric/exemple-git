import React from 'react'
import './footer.css'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container >
      <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /><span> copyright 2020</span>
    </Container>
  )
}

export default Footer 