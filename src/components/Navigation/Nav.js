import './Nav.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand> DocRate </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link className="nav-link" to="/"> Начало </Link></Nav.Link>
                    <Nav.Link><Link className="nav-link" to="/about"> За Нас </Link></Nav.Link>
                    <Nav.Link><Link className="nav-link" to="/contacts"> Контакти </Link></Nav.Link>
                    <Nav.Link><Link className="nav-link" to="/login"> Влез </Link></Nav.Link>
                    <Nav.Link><Link className="nav-link" to="/register"> Регистрация </Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}