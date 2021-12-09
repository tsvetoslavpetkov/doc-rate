import { useContext, useEffect, useState } from 'react';
// import validator from 'validator';
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { edit, getOne } from '../../services/doctorService'
import './EditDoctor.css'

export default function EditDoctor(props) {
    const { id } = useParams();

    const [doctor, setDoctor] = useState({})
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        getOne(id).then(data => {
            setDoctor(data);
        })
    }, [id])
    
    const { user } = useContext(AuthContext);

    async function submitHandler(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        let formData = new FormData(e.currentTarget);
        let { ...data } = Object.fromEntries(formData);
        e.preventDefault();

        setValidated(true);
        edit(id, data, user.accessToken)
        props.history.push('/')
    }

    return (
        <Card >
            <Card.Body>
                <Row>
                    <h3 className="text-center mb-2">Редактиране на лекар</h3>
                    <Col className="py-4">
                        <Form onSubmit={submitHandler} noValidate validated={validated}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="label">Адрес на изображение</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="imageUrl"
                                    placeholder="https://..."
                                    defaultValue={doctor.imageUrl}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Моля попълнете адрес на изображение.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="label">Титла</Form.Label>
                                <Form.Select aria-label="Default select example" value={doctor.title} name="title">
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
                                    placeholder="Име"
                                    defaultValue={doctor.firstName}
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
                                    placeholder="Фамилия"
                                    defaultValue={doctor.secondName} />
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
                                    placeholder="специалност"
                                    defaultValue = {doctor.speciality} />
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
                                    placeholder="Въведете адрес..."
                                    defaultValue = {doctor.address}  />
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
                                    type="number"
                                    name="price"
                                    placeholder="50 (лв.)"
                                    defaultValue={doctor.price} />
                                <Form.Control.Feedback type="invalid">
                                    Моля изберете специалност.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Редактирай
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}