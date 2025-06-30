import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="shadow-lg">
    <Container>
      <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
  
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
      </Nav>
  
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart size={25} />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  
  );
};

export default CustomNavbar;

