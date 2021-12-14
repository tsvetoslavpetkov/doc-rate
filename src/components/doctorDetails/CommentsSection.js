import * as commentService from '../../services/commentService.js'
import { Alert, Form, FloatingLabel, Button } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function CommentsSection() {
    const [comments, setComments] = useState([]);
    const { user } = useAuth();
    const { id } = useParams();

    useEffect(() => {
        if (user._id) {
            commentService.getAll(id, user.accessToken).then(comments => {
                setComments(comments)
            })
        }
    }, [id, user._id, user.accessToken])

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
        <>
            {user._id
                ? <>
                    <div>
                        {comments.map((comment) => {
                            return (
                                <Alert key={comment._id} variant="secondary" className="p-2 pb-0 mb-2" style={{ textAlign: "left" }} role="alert">
                                    <Alert.Heading className="px-2" style={{ fontSize: '16px' }}>
                                        {'@' + comment.user.split('@')[0]}
                                    </Alert.Heading>
                                    <p className="px-2 py-0 mb-1">
                                        {comment.comment}
                                    </p>
                                </Alert>
                            )
                        })}
                    </div>
                    <Form onSubmit={commentHandler}>
                        <FloatingLabel controlId="floatingTextarea" label="Коментар..." className="mb-3">
                            <Form.Control as="textarea" name="comment" placeholder="Коментирай" />
                        </FloatingLabel>
                        <Button className="btn-sm mb-2" type="submit">Добави коментар</Button>
                    </Form>
                </>
                : <p>
                    <Link className="nav-link d-inline p-1" to="/login">Влез</Link>или се<Link className="nav-link d-inline p-1" to="/register">регистрирай</Link>, за да можеш четеш и пишеш коментари.
                </p>
            }
        </>
    )
}