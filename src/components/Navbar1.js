import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Bableshaazad from './Bableshaazad';
import './Bableshaz.css';


function Navbar1() {

    return (
        <Navbar sticky="top" expand="lg" className='navbar'>
            <Container fluid>
                <div className="logog">
                    <Link as={Link} to={"https://www.bableshaazad.com"} rel="noopener noreferrer"><img src="logog_circle.png" alt="logog" /></Link>
                </div>
                <Navbar.Brand as={Link} to={"https://www.bableshaazad.com"}><Bableshaazad /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/contactDetails"}>Contact Details</Nav.Link>
                        <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                        <NavDropdown title="Projects" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to={"/textEditor"}>Text Editor</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/"}>News App</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to={"/loginForm"}>Form Validation</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;