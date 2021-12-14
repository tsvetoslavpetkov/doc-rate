import { useContext, useState } from 'react';
// import validator from 'validator';
import { Form, Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.css'
import { login } from '../../services/authService'
import { AuthContext } from '../../contexts/AuthContext';
import ErrorNotification from '../ErrorNotification';

export default function Login(props) {
    const [validated, setValidated] = useState(false);
    const { onLogin } = useContext(AuthContext);
    const [error, setError] = useState();

    document.title = 'DocRate | Вписване'

    async function submitHandler(e) {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            let { email, password } = Object.fromEntries(new FormData(form));
            login(email, password)
                .then(res => {
                    if (res.errorMessage) {
                        setError(res.errorMessage)
                    } else {
                        onLogin(res)
                        props.history.push('/')
                    }
                })
        }
        setValidated(true);
    }

    return (
        <Card className="main-card" style={{ width: "700px", minHeight: "450px",}}>
            <Card.Header>  <h4 className="text-center">Вписване</h4></Card.Header>
            <Card.Body className="login-card align-middle">
                    {error ? <ErrorNotification message={error} /> : null}
                        <Form className="w-50 h-100" onSubmit={submitHandler} noValidate validated={validated}>
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

                            <Form.Group className="mb-3" controlId="formBasicPassword">
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
            </Card.Body>
            <Card.Footer>
                <div>
                    Нямате профил? <Link to="/register" className="no-line" > Регистрация! </Link>
                </div>
            </Card.Footer>
        </Card>
    )
}