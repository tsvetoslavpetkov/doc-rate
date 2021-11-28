import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.css'
import { login } from '../../services/loginService'
 
export default function Login() {
    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let {email, password} = Object.fromEntries(formData);

        login(email, password);
    }

    return (
        <Container fluid className="d-flex align-items-center justify-content-center container " style={{ minHeight: "100vh", width: "100%" }}>
            <Card style={{ width: "700px", minHeight: "450px", top: "-100px" }}>
                <Card.Body className="login-card">
                    <Row>
                        <h3 className="text-center mb-2">Вписване</h3>
                        <Col className="py-4">
                            <Form onSubmit = {submitHandler}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label className="label">Имейл</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="email@mail.bg" />
                                    <Form.Text className="text-muted">

                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-5" controlId="formBasicPassword">
                                    <Form.Label className="label">Парола</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="******" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Вписване
                                </Button>
                            </Form>
                            <div className="mt-4">
                                Нямате профил? <Link to="/register" className="no-line"  >Регистрация!</Link>
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