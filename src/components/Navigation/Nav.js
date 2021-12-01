import './Nav.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar className="top-elements" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand> DocRate </Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/"> Начало </Link>
                    <Link className="nav-link" to="/about"> За Нас </Link>
                    <Link className="nav-link" to="/contacts"> Контакти </Link>
                    <Link className="nav-link" to="/login"> Влез </Link>
                    <Link className="nav-link" to="/register"> Регистрация </Link>
                    <Link className="nav-link" to="/logout"> Излез </Link>
                    <Link className="nav-link" to="/doc/create"> Добави Лекар </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}