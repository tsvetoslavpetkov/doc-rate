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
            <Card.Header className="d-flex justify-content-between">
                <Button
                    variant="outline-secondary"
                    className="d-inline"
                    size="sm"
                    onClick={goBack}>
                    Назад
                </Button>
                <h5 className="d-inline" style={{ marginRight: '200px' }}>
                    {doctor?.title} {doctor?.firstName} {doctor?.secondName}
                </h5>
            </Card.Header>
            <Card.Body
                className="details-card-body blur-card-background p-0"
                style={{ backgroundImage: `url(${doctor.imageUrl})`, backdropFilter: 'blur(10px)', }}>
                <div className="whiten p-3">
                    <Row>
                        <Col>
                            <div className="doctor-details-card-img" style={{ backgroundImage: `url(${doctor.imageUrl})` }}></div>
                        </Col>
                        <Col className="text-sm-left">
                            <span>Специалност:</span>
                            <h6>{doctor?.specialityName}</h6>
                            <span>Работи по здравна каса:</span>
                            <h6>{doctor?.nzok ? "Да" : 'Не'}</h6>
                            <span>Код на специлаността:</span>
                            <h6>{doctor?.specialityCode}</h6>
                            <span>Цена първичен преглед:</span>
                            <h6>{doctor?.price} лв.</h6>
                            <span>Адрес:</span>
                            <h6>{doctor?.address} </h6>
                            <hr />
                            <h5>Харесвания: {likes}</h5>
                            <hr />
                            {user._id && (user._id !== doctor._ownerId)
                                ? <Button className="btn-sm" disabled={liked} onClick={likeHandler}>{liked ? 'Харесано' : 'Харесай!'}</Button>
                                : null}
                            {user._id === doctor._ownerId
                                ? <>
                                    <Link to={doctor._id + '/edit'}><Button className="btn-sm">Редактирай</Button></Link>
                                    <Button className="btn-sm" onClick={deleteHandler}>Изтрий</Button>
                                </>
                                : null}
                        </Col>
                    </Row>
                </div>
            </Card.Body>
            <Card.Footer>
                <CommentsSection />
            </Card.Footer>
        </Card >
    )
}