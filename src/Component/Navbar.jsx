import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
        <div>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">DAR</Navbar.Brand>
          <div className="me-auto">
            <Link to="/home" className="me-2">Home</Link>
            <Link to="/about" className="me-2">About</Link>
            <Link to="/contact" className="me-2">Contact Us</Link>
          </div>
        </Container>
      </Navbar>
        </div>
    )
}

export default Nav ;