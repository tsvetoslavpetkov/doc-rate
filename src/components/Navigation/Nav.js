import './Nav.css';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Navigation() {
    
    const { user } = useAuth();

    return (
        <Navbar className="main-nav top-elements" bg="dark" variant="dark">
            <Container className="w-100">
                <Row className="w-100">
                    <Col className="d-flex justify-content-start">
                        <img alt="logo" src="/logo512.png" width="35px" height="35px" className="mx-3 mt-1" style={{opacity: '0.7'}} /> 
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
                                <>  <div className="avatar-nav"></div>
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