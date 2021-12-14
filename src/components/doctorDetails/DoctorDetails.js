import { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import CommentsSection from './CommentsSection';
import * as doctorService from '../../services/doctorService'
import * as likeService from '../../services/likesService'
import './DoctorDetails.css'

export default function DoctorDetails(props) {
    const { user } = useAuth()
    const [doctor, setDoctor] = useState({});
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        doctorService.getOne(id).then(data => {
            setDoctor(data);
        })

        likeService.getLikes(id, user.accessToken).then(res => {
            if (res.errorMessage) {
                console.log(res.errorMessage);
            } else {
                setLikes(res)
            }
        })

        likeService.hasLiked(id, user._id).then(liked => {
            if (liked) {
                setLiked(true)
            }
        })

    }, [id, user._id, user.accessToken])

    const goBack = () => {
        props.history.push('/')
    }

    const deleteHandler = () => {
        doctorService.del(id, user.accessToken).then(
            props.history.push('/')
        )
    }

    const likeHandler = () => {
        likeService.like(id, user.accessToken).then(res => {
            let newLikes = likes + 1;
            setLikes(newLikes)
            setLiked(true);
        })
    }
    document.title = `DocRate | ${doctor.title} ${doctor.firstName} ${doctor.secondName}`
    return (
        <Card className="main-card">
            <Card.Header style={{ textAlign: "left" }}>
                <Button variant="outline-secondary" size="sm" onClick={goBack}>Назад</Button>
            </Card.Header>
            <Card.Body className="details-card-body">
                <Row>
                    <Col>
                        <div className="doctor-details-card-img" style={{ backgroundImage: `url(${doctor.imageUrl})`, }}></div>
                    </Col>
                    <Col className="text-sm-left">
                        <h4>{doctor?.title} {doctor?.firstName} {doctor?.secondName}</h4>
                        <h5>{doctor?.address}</h5>
                        <h5>Адрес: {doctor?.address}</h5>
                        <h5>Цена: {doctor?.price} лв.</h5>
                        <h5>Харесвания: {likes}</h5>
                        {user._id && (user._id !== doctor._ownerId)
                            ? <Button disabled={liked} onClick={likeHandler}>{liked ? 'Харесано' : 'Харесай!'}</Button>
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
                <CommentsSection />
            </Card.Footer>
        </Card >
    )
}