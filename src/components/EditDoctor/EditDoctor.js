import { useEffect, useState } from 'react';
// import validator from 'validator';
import { Form, Button, Card, } from 'react-bootstrap'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { edit, getOne } from '../../services/doctorService'
import AddressAutocomplete from '../createDoctor/AddressAutocomplete';
import SelectSpeciality from '../createDoctor/SelectSpeciality';
import ErrorNotification from '../ErrorNotification';
import './EditDoctor.css'

export default function EditDoctor(props) {

    document.title = 'DocRate | Редактиране'

    const { id } = useParams();

    const [error, setError] = useState();
    const [doctor, setDoctor] = useState({})
    const [validated, setValidated] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        getOne(id)
            .then(res => {
                if (res.errorMessage) {
                    setError(res.errorMessage)
                } else {
                    setDoctor(res);
                }
            })
    }, [id])    

    async function submitHandler(e) {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        let { ...data } = Object.fromEntries(new FormData(form));
        data.nzok ? data.nzok = true : data.nzok = false;
        data.specialityCode = data.speciality.split(' ')[0]
        data.specialityName = data.speciality.split(' ').slice(1).join(' ')

        edit(id, data, user.accessToken)
            .then(res => {
                if (res.errorMessage) {
                    setError(res.errorMessage)
                } else {
                    props.history.push(`/doc/${id}`)
                }
            })
        setValidated(true);
    }

    return (
        <Card className="main-card">
            <Card.Header><h4 className="text-center">Редактиране на лекар</h4></Card.Header>
            <Card.Body>
                {error ? <ErrorNotification message={error} /> : null}
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

                    <Form.Group className="mb-2 d-inline-block align-top" controlId="formBasicEmail">
                        <Form.Label className="label">Титла</Form.Label>
                        <Form.Select aria-label="Default select example" value={doctor.title} name="title">
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
                            placeholder="Име"
                            defaultValue={doctor.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            Моля впишете име.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2 d-inline-block align-top" style={{ marginLeft: '10px' }} controlId="formBasicPassword">
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

                    <SelectSpeciality default={doctor.speciality} />

                    <Form.Group className="mb-2 d-inline-block w-75" controlId="formBasicPassword">
                        <Form.Label className="label">Цена на преглед</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name="price"
                            placeholder="50 (лв.)"
                            defaultValue={doctor.price} />
                        <Form.Control.Feedback type="invalid">
                            Моля изберете цена на преглед.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2 d-inline-block w-25 px-5 align-top" controlId="formBasicPassword">
                        <Form.Label className="label d-block"> Здр. каса </Form.Label>
                        <br className="mb-2" />
                        <Form.Check name="nzok" className="mt-3" type="checkbox" id="NZOK" defaultChecked={doctor.nzok} label="НЗОК" />
                    </Form.Group>

                    <AddressAutocomplete defaultValue={doctor.address} />

                    <Button variant="primary" type="submit">
                        Редактирай
                    </Button>
                </Form>
            </Card.Body>
            <Card.Footer>
                <Link className="no-line text-secondary" to={`/doc/${id}`}>Затвори</Link>
            </Card.Footer>
        </Card>
    )
}