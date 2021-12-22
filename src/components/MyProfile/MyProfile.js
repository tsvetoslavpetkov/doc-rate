import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getAllMine } from '../../services/doctorService';
import DoctorCard from '../Home/DoctorCard';
import './MyProfile.css'
import { setUserImage } from '../../services/authService';
import ErrorNotification from '../ErrorNotification';

export default function MyProfile(props) {
    const { user, userImage, setImage } = useAuth();
    const [doctors, setDoctors] = useState([]);
    const [error, setError] = useState();

    document.title = `DocRate | @${user.email.split('@')[0]}`

    useEffect(() => {
        getAllMine(user._id)
            .then(doctors => {
                if (doctors) {
                    setDoctors(doctors)
                }
            })
    }, [user._id])

    const goBack = () => {
        props.history.push('/')
    }

    function handleAvatarSubmit(e) {
        e.preventDefault();
        let { imageUrl } = Object.fromEntries(new FormData(e.currentTarget));

        setUserImage(imageUrl, user._id, user.accessToken)
            .then(res => {
                if (res.errorMessage) {
                    setError(res.errorMessage)
                } else {
                    console.log(res.imageUrl);
                    setImage(imageUrl)
                }
            }
            )
    }

    return (
        <div>
            <Card className="main-card-user" >
                <Card.Header className="d-flex justify-content-between">
                    <Button variant="outline-secondary" className="d-inline" size="sm" onClick={goBack}>Назад</Button>
                    <h5 className="d-inline" style={{ marginRight: '200px' }}>@{user.email.split('@')[0]}</h5>
                </Card.Header>
                <Card.Body className="details-card-body blur-card-background p-0" style={{ backgroundImage: `url(${userImage ? userImage : '/user.png'})`, backdropFilter: 'blur(10px)', }}>
                    {error ? <ErrorNotification message={error} /> : null}
                    <div className="whiten p-3">
                        <Row>
                            <Col sm={3}>
                                <div className="user-details-card-img" style={{ backgroundImage: `url(${userImage ? userImage : '/user.png'})` }}></div>
                            </Col>
                            <Col className="text-sm-left">
                                <Form onSubmit={handleAvatarSubmit}>
                                    <Form.Group controlId="formBasicEmail" >
                                        <Form.Label>Път към изображение</Form.Label>
                                        <Form.Control type="text" size="sm" placeholder="https://" name="imageUrl" required />
                                        <Form.Text className="text-muted">
                                            Сменете аватара си, като посочите път към изображение.
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" size="sm" type="submit">
                                        Промени
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
            </Card >
            <>
                {!doctors.length
                    ? <h3>Няма добавени лекари!</h3>
                    : <div>
                        <h5 className="my-3" >Лекари създадени от @{user.email.split('@')[0]}</h5>
                        <Row xs={2} md={5} className="g-4">
                            {doctors.map((doctor) => (
                                <Col style={{ minWidth: '300px' }} key={doctor._id}>
                                    <DoctorCard doctor={doctor} key={doctor._id} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                }</>
        </div >
    )
}

