import { useState, useEffect, useContext } from 'react';
import { Card, Button, Row, Col, Form, FloatingLabel } from 'react-bootstrap'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import CommentsSection from './CommentsSection';
import * as doctorService from '../../services/doctorService'
import * as likeService from '../../services/likesService'
import * as commentService from '../../services/commentService.js'
import './DoctorDetails.css'

export default function DoctorDetails(props) {
    const { user } = useContext(AuthContext)
    const [doctor, setDoctor] = useState({});
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        doctorService.getOne(id).then(data => {
            setDoctor(data);
        })

        likeService.getLikes(id, user.accessToken).then(likes => {
            setLikes(likes)
        })

        likeService.hasLiked(id, user._id).then(liked => {
            if (liked) {
                setLiked(true)
            }
        })

        commentService.getAll(id, user.accessToken).then(comments => {
            setComments(comments)
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
        likeService.like(id, user.accessToken).then(likes => {
            console.log(likes);
        })
    }

    const commentHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { comment } = Object.fromEntries(formData);

        commentService.addComment(id, user.email, comment, user.accessToken).then(res => {
            let newComments = [...comments];
            newComments.push(res);
            setComments(newComments);
        })
    }


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
                        <h5>{doctor?.speciality}</h5>
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
                <CommentsSection comments={comments} />
                <br />
                <Form onSubmit={commentHandler}>
                    <FloatingLabel controlId="floatingTextarea" label="Comment" className="mb-3">
                        <Form.Control as="textarea" name="comment" placeholder="Leave a comment here" />
                    </FloatingLabel>
                    <Button type="submit">Добави коментар</Button>
                </Form>
            </Card.Footer>
        </Card >
    )
}