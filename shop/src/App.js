
// import Button from '@restart/ui/esm/Button';
import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Lee-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background">
        <h1 style={{ color: 'forestgreen' }}>20% Season Off</h1>
        <p style={{ color: 'cornsilk' }}>
          취미로 재밌게 공부하는 프론트
        </p>
        <p>
          <Button variant="success">자세히보기</Button>
        </p>
      </div>

      <Container>
        <Row>
          {
            shoes.map(function (data, idx) {
              return (
                <ShoeItem 신발={data} 인덱스={idx + 1} key={idx}></ShoeItem>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;

function ShoeItem(props) {
  return (
    <Col md={4}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.인덱스}.jpg`} width="100%" alt=""/>
      <h4>{props.신발.title} & {props.신발.price}</h4>
      <p>{props.신발.content}</p>
    </Col>
  )
}
