import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Register.css'
import { register } from '../../services/authService'

export default function Register(props) {

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);
        let response = await register(email, password);

        if (!response.message) {
            //TODO: NOTIFICATION
            props.history.push("/")
        }
    }

    return (
        <Container fluid className="d-flex align-items-center justify-content-center container" style={{ minHeight: "100vh", width: "100%" }}>
            <Card style={{ width: "700px", minHeight: "450px", top: "-100px" }}>
                <Card.Body className="register-card">
                    <Row>
                        <h3 className="text-center mb-2">Регистрация</h3>
                        <Col className="py-2">
                            <Form onSubmit={submitHandler}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label className="label">Имейл</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="email@mail.bg" />
                                    <Form.Text className="text-muted">

                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label className="label">Парола</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="******" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicRepeatPassword">
                                    <Form.Label className="label">Повторeте паролата</Form.Label>
                                    <Form.Control type="password" name="repeatPassword" placeholder="******" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Регистрация
                                </Button>
                            </Form>
                            <div className="mt-3">
                                Вече имате профил? <Link to="/login" className="no-line"  >Влезте!</Link>
                            </div>
                        </Col>
                        <Col xs={7}>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Container>
    )
}