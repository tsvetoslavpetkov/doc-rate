import './Nav.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">DocRate</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to="/home">Начало</Link></Nav.Link>
                    <Nav.Link><Link to="/about">За Нас</Link></Nav.Link>
                    <Nav.Link><Link to="/contacts">Контакти</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}