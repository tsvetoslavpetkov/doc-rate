import { useContext, useState } from 'react';
// import validator from 'validator';
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.css'
import { login } from '../../services/authService'
import { AuthContext } from '../../contexts/AuthContext';


export default function Login(props) {
    const [validated, setValidated] = useState(false);
    const { onLogin } = useContext(AuthContext)

    async function submitHandler(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);
        e.preventDefault();

        login(email, password)
            .then(authData => {
                onLogin(authData);
                props.history.push('/')
            })

        setValidated(true);

        //TODO: validation from server?!!?!?
        //TODO: validation from validator 
    }

    return (

        <Card style={{ width: "700px", minHeight: "450px", top: "-100px" }}>
            <Card.Body className="login-card">
                <Row>
                    <h3 className="text-center mb-2">Вписване</h3>
                    <Col className="py-4">
                        <Form onSubmit={submitHandler} noValidate validated={validated}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="label">Имейл</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="email@mail.bg"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Моля впишете имейл.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPassword">
                                <Form.Label className="label">Парола</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    name="password"
                                    placeholder="******" />
                                <Form.Control.Feedback type="invalid">
                                    Моля изберете парола.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Вписване
                            </Button>
                        </Form>
                        <div className="mt-4">
                            Нямате профил? <Link to="/register" className="no-line" > Регистрация! </Link>
                        </div>
                    </Col>
                    <Col xs={7}>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}