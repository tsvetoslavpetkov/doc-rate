import { useState, useEffect, useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { getOne, del, edit } from '../../services/doctorService'
import './DoctorDetails.css'

export default function DoctorDetails(props) {
    const { user } = useContext(AuthContext)
    const [doctor, setDoctor] = useState({});
    const [likesCount, setLikesCount] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        getOne(id).then(data => {
            setDoctor(data);;
            setLikesCount(data.likes.length);
            if (data.likes.includes(user._id)) {
            }

        })
    }, [id, user._id])

    const goBack = () => {
        props.history.push('/')
    }

    const deleteHandler = () => {
        del(id, user.accessToken).then(
            props.history.push('/')
        )
    }

    const likeHandler = () => {
        let likes = doctor.likes;
        if (!likes.includes(user._id) && user._id) {
            likes.push(user._id);
            setLikesCount(likes.length)
            let data = doctor;
            data.likes = likes;
            edit(id, data, user.accessToken);
        }
    }

    return (
        <Card className="main-card">
            <Card.Header className="text-left">
               <Button variant="outline-secondary" size="sm" onClick={goBack}>Назад</Button>
            </Card.Header>
            <Card.Body className="details-card-body">
                <Row>
                    <Col>
                        <div className="doctor-details-card-img" style={{ backgroundImage: `url(${doctor.imageUrl})`, }}></div>
                    </Col>
                    <Col className="text-sm-left">
                        <h4>{doctor?.title} {doctor?.firstName} {doctor?.secondName}</h4>
                        <h5>{doctor?.speciality}</h5>
                        <h5>Адрес: {doctor?.address}</h5>
                        <h5>Цена: {doctor?.price} лв.</h5>
                        <h5>Харесвания: {likesCount}</h5>
                        {user._id && (user._id !== doctor._ownerId)
                            ? <Button onClick={likeHandler}>Харесай!</Button>
                            : null}
                        {user._id === doctor._ownerId
                            ? <>
                                <Link to={doctor._id + '/edit'}><Button>Редактирай</Button></Link>
                                <Button onClick={deleteHandler}>Изтрий</Button>
                            </>
                            : null}
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card >
    )
}