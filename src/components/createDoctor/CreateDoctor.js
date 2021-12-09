import { useContext, useState } from 'react';
// import validator from 'validator';
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import { AuthContext } from '../../contexts/AuthContext';
import { create } from '../../services/doctorService'
import './CreateDoctor.css'

export default function CreateDoctor(props) {
    const [validated, setValidated] = useState(false);
    const { user } = useContext(AuthContext);

    async function submitHandler(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        let formData = new FormData(e.currentTarget);
        let { ...data } = Object.fromEntries(formData);
        data.likes = [];
        e.preventDefault();
        //TODO: VALIDATION 
        setValidated(true);
        create(data, user.accessToken)
        props.history.push('/')
    }

    return (

        <Card >
            <Card.Body>
                <Row>
                    <h3 className="text-center mb-2">Добавяне на лекар</h3>
                    <Col className="py-4">
                        <Form onSubmit={submitHandler} noValidate validated={validated}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="label">Адрес на изображение</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="imageUrl"
                                    placeholder="https://..."
                                />
                                <Form.Control.Feedback type="invalid">
                                    Моля попълнете адрес на изображение.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="label">Титла</Form.Label>
                                <Form.Select aria-label="Default select example" name="title">
                                    <option value="д-р">д-р</option>
                                    <option value="доц.">доц.</option>
                                    <option value="Проф.">Проф.</option>
                                    <option value=""> - </option>
                                </Form.Select>
                            </Form.Group>
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
                                <Form.Label className="label">Адрес</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="address"
                                    placeholder="София, бул. България 51" />
                                <Form.Control.Feedback type="invalid">
                                    Моля изберете адрес.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">

                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            name="NZOK"
                                            type={type}
                                            id={`NZOK`}
                                            label={`НЗОК`}
                                        />
                                    </div>
                                ))}
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
    )
}