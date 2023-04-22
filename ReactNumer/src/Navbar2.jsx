import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/bisection">Bisection</Nav.Link>
            <Nav.Link href="/FalsePosition">FalsPosition</Nav.Link>
            <Nav.Link href="/One-Point">One-Point</Nav.Link>
            <Nav.Link href="/Regression">Regression</Nav.Link>
            <Nav.Link href='/Regression2'>Regression2</Nav.Link>
            <Nav.Link href='/Regression3'>Regression3</Nav.Link>
            <Nav.Link href='/Regression4'>Regression4</Nav.Link>
            {/* <Nav.Link href='/TC1'>TChart1</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="/Rey">ReY</NavDropdown.Item>
              <NavDropdown.Item href="/Rey2">ReY2</NavDropdown.Item>
              

              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;