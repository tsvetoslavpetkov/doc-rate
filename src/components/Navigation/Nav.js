import './Nav.css';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Navigation() {

    const { user } = useContext(AuthContext);

    return (
        <Navbar className="main-nav top-elements" bg="dark" variant="dark">
            <Container className="w-100">
                <Row className="w-100">
                    <Col className="d-flex justify-content-start">
                        <Navbar.Brand> DocRate </Navbar.Brand>
                        <Nav>
                            <Link className="nav-link" to="/"> Начало </Link>
                            <Link className="nav-link" to="/about"> За Нас </Link>
                            <Link className="nav-link" to="/contacts"> Контакти </Link>
                        </Nav>
                    </Col>
                    <Col className="d-flex justify-content-end" >
                        <Nav>
                            {user?._id
                                ?
                                <>
                                    <Link className="nav-link" to="/doc/create"> Добави лекар </Link>
                                    <span className="text-secondary m-2">|</span>
                                    <Link className="nav-link" to="/">@{user?.email.split('@')[0]} </Link>
                                    <Link className="nav-link " to="/logout"> Излез </Link>
                                </>
                                :
                                <>
                                    <Link className="nav-link" to="/login"> Вход </Link>
                                    <Link className="nav-link" to="/register"> Регистрация </Link>
                                </>
                            }
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar >
    )
}