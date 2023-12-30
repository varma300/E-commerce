import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-dark py-5  ">
    <Container>
    <hr className="my-0"/>
      <Row className='pt-5'>

        <Col md={6}>
        
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum elit eget massa dapibus, nec commodo sapien fermentum.
          </p>
        </Col>
        <Col md={3}>
        
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 1234 Main St, City, State ZIP</li>
          </ul>
        </Col>
        <Col md={3}>
        
          <h4>Follow Us</h4>
          <ul className="list-unstyled">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>   
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer