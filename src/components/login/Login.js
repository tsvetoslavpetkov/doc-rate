import { Form, Button, Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
export default function Login() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <Card className="py-3" style={{minWidth: "400px", top: "-100px"}}>
                <Card.Body>
                    <h2 className="text-center mb-4">Вписване</h2>
                    <Form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label className="label">Имейл</Form.Label>
                            <Form.Control type="email" placeholder="email@mail.bg" />
                            <Form.Text className="text-muted">
                
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label className="label">Парола</Form.Label>
                            <Form.Control type="password" placeholder="******" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Вписване
                        </Button>
                    </Form>
                    <div className="mt-4">
                        Нямате профил? <Link to="/register" className="no-line"> Регистрация!</Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}