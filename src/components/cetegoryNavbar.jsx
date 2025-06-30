import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Smartphone from '../pages/SmartPhone';

const CategoryNav = () => {
  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="/cart">
           <Nav.Item>
          <Nav.Link as={Link} to="/smartphone">📱 Smartphones</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/watch">Watches</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/laptop">💻 Laptops</Nav.Link>
        </Nav.Item>
         <Nav.Item>
          <Nav.Link as={Link} to="/accessories">🎧 Accessories</Nav.Link>
        </Nav.Item>
             <Nav.Item>
          <Nav.Link as={Link} to="/camera">📸 Cameras</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default CategoryNav;
