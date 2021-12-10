import { Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ErrorNotification from '../ErrorNotification'
import './Register.css'
import { register } from '../../services/authService'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';


export default function Register(props) {
    const [validated, setValidated] = useState(false);
    const { onLogin } = useContext(AuthContext);
    const [error, setError] = useState();

    async function submitHandler(e) {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            e.preventDefault();
            let { email, password, repeatPassword } = Object.fromEntries(new FormData(form));
            register(email, password)
                .then(res => {
                    if (password !== repeatPassword) {
                        setError("Паролите не съвпадат")
                    } else {
                        if (res.errorMessage) {
                            setError(res.errorMessage)
                        } else {
                            onLogin(res)
                            props.history.push('/')
                        }
                    }
                })
        }
        setValidated(true);
    }

    return (

        <Card className="main-card" style={{ width: "700px", minHeight: "450px" }}>
            <Card.Header><h4 className="text-center">Регистрация</h4></Card.Header>
            <Card.Body className="register-card">
                {error ? <ErrorNotification message={error} /> : null}
                <Form className="w-50 h-100" onSubmit={submitHandler} noValidate validated={validated}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className="label">Имейл</Form.Label>
                        <Form.Control type="email" name="email" placeholder="email@mail.bg" required />
                        <Form.Control.Feedback type="invalid">
                            Моля въведете имейл.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
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

                    <Form.Group className="mb-4" controlId="formBasicRepeatPassword">
                        <Form.Label className="label">Повторeте паролата</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="repeatPassword"
                            placeholder="******" />
                        <Form.Control.Feedback type="invalid">
                            Моля изберете парола.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Регистрация
                    </Button>
                </Form>

            </Card.Body>
            <Card.Footer>
                <div>
                    Вече имате профил? <Link to="/login" className="no-line"  >Влезте!</Link>
                </div>
            </Card.Footer>
        </Card>
    )
}