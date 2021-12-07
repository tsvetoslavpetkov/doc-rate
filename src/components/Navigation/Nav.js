import './Nav.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Navigation() {

    const { user } = useContext(AuthContext);

    return (
        <Navbar className="top-elements" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand> DocRate </Navbar.Brand>
                <Nav className="me-auto">

                    {user?._id
                        ?
                        <>
                            <Link className="nav-link" to="/"> Начало </Link>
                            <Link className="nav-link" to="/about"> За Нас </Link>
                            <Link className="nav-link" to="/contacts"> Контакти </Link>
                            <Link className="nav-link" to="/doc/create"> Добави Лекар </Link>
                            <Link className="nav-link" to="/"> {user?.email} </Link>
                            <Link className="nav-link" to="/logout"> Излез </Link>
                        </>
                        :
                        <>
                            <Link className="nav-link" to="/login"> Вход </Link>
                            <Link className="nav-link" to="/register"> Регистрация </Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}