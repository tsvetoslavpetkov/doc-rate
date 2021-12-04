import { useState } from 'react';
// import validator from 'validator';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'
import { create } from '../../services/doctorService'
import './CreateDoctor.css'

export default function CreateDoctor(props) {
    const [validated, setValidated] = useState(false);

    async function submitHandler(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        let formData = new FormData(e.currentTarget);
        let { firstName, secondName, price, speciality } = Object.fromEntries(formData);
        e.preventDefault();

        let doctorData = {
            firstName,
            secondName,
            price,
            speciality
        }     
        
        setValidated(true);
        create(doctorData)
        props.history.push('/')
    }

    return (
        <Container fluid className="d-flex align-items-center justify-content-center container" style={{ minHeight: "100vh", width: "100%" }}>
            <Card >
                <Card.Body className="login-card">
                    <Row>
                        <h3 className="text-center mb-2">Добавяне на лекар</h3>
                        <Col className="py-4">
                            <Form onSubmit={submitHandler} noValidate validated={validated}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label className="label">Име</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="firstName"
                                        placeholder="Ани"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Моля впишете име.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label className="label">Фамилия</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="secondName"
                                        placeholder="Дашева" />
                                    <Form.Control.Feedback type="invalid">
                                        Моля изберете фамилия.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label className="label">Специалност</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="speciality"
                                        placeholder="детски кардиолог" />
                                    <Form.Control.Feedback type="invalid">
                                        Моля изберете специалност.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label className="label">Цена на преглед</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="price"
                                        placeholder="50 (лв.)" />
                                    <Form.Control.Feedback type="invalid">
                                        Моля изберете специалност.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Добави
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Container>
    )
}