import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { create } from '../../services/doctorService'
import SelectSpeciality from './SelectSpeciality';
import ErrorNotification from '../ErrorNotification';

export default function CreateDoctor(props) {
    document.title = 'DocRate | Създаване'
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState();
    const { user } = useAuth;

    async function submitHandler(e) {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            let { ...data } = Object.fromEntries(new FormData(form));
            data.nzok ? data.nzok = true : data.nzok = false;
            data.specialityCode = data.speciality.split(' ')[0]
            data.specialityName = data.speciality.split(' ').slice(1).join(' ')

            create(data, user.accessToken)
                .then(res => {
                    if (res.errorMessage) {
                        setError(res.errorMessage)
                    } else {
                        props.history.push('/')
                    }
                })
        }
        setValidated(true);
    }

    return (

        <Card className="main-card">
            <Card.Header><h4 className="text-center">Добавяне на лекар</h4></Card.Header>
            <Card.Body>
                {error ? <ErrorNotification message={error} /> : null}
                <Form onSubmit={submitHandler} noValidate validated={validated} className="align-top">

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

                    <Form.Group className="mb-2 d-inline-block align-top" controlId="formBasicEmail">
                        <Form.Label className="label">Титла</Form.Label>
                        <Form.Select aria-label="Default select example" name="title">
                            <option value="д-р">д-р</option>
                            <option value="доц.">доц.</option>
                            <option value="Проф.">Проф.</option>
                            <option value=""> - </option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-2 d-inline-block align-top" style={{ marginLeft: '10px' }} controlId="formBasicEmail">
                        <Form.Label className="label">Име</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="firstName"
                            placeholder="Име..."
                        />
                        <Form.Control.Feedback type="invalid">
                            Моля впишете име.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2 d-inline-block align-top" style={{ marginLeft: '10px' }} controlId="formBasicEmail">
                        <Form.Label className="label">Фамилия</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="secondName"
                            placeholder="Фамилия..."
                        />
                        <Form.Control.Feedback type="invalid">
                            Моля впишете фамилия.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <SelectSpeciality />


                    <Form.Group className="mb-2 d-inline-block w-75" controlId="formBasicPassword">
                        <Form.Label className="label">Цена на преглед</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name="price"
                            placeholder="(лв.)" />
                        <Form.Control.Feedback type="invalid">
                            Моля въведете цена на преглед
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2 d-inline-block w-25 px-5 align-top" controlId="formBasicPassword">
                        <Form.Label className="label d-block"> Здр. каса </Form.Label>
                        <br className="mb-2" />
                        <Form.Check name="NZOK" className="mt-3" type="checkbox" id="NZOK" label="НЗОК" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="label">Адрес</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="address"
                            placeholder="гр. .... ул. ...." />
                        <Form.Control.Feedback type="invalid">
                            Моля въведете адрес.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Добави
                    </Button>
                </Form>
            </Card.Body>
            <Card.Footer>
                <Link className="no-line text-secondary" to="/">Затвори</Link>
            </Card.Footer>
        </Card>
    )
}