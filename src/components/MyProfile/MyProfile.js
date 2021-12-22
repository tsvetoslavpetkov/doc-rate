import { Row, Col, Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getAllMine } from '../../services/doctorService';
import DoctorCard from '../Home/DoctorCard';
import './MyProfile.css'

export default function MyProfile(props) {
    const { user } = useAuth();
    const [doctors, setDoctors] = useState([]);

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

    let url = user.avatarUrl ? user.avatarUrl : '/user.png';

    return (
        <div>
            <Card className="main-card-user" >
                <Card.Header className="d-flex justify-content-between">
                    <Button variant="outline-secondary" className="d-inline" size="sm" onClick={goBack}>Назад</Button>
                    <h4 className="d-inline" style={{ marginRight: '200px' }}>@{user.email.split('@')[0]}</h4>
                </Card.Header>
                <Card.Body className="details-card-body blur-card-background p-0" style={{ backgroundImage: `url(${url})`, backdropFilter: 'blur(10px)', }}>
                    <div className="whiten p-3">
                        <Row>
                            <Col sm={3}>
                                <div className="user-details-card-img" style={{ backgroundImage: `url(${url})` }}></div>
                            </Col>
                            <Col className="text-sm-left">
                                
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
        </div>
    )
}

