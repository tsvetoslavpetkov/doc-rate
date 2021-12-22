import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import useCommentsCount from "../../hooks/useCommentsCount";
import useLikesCount from "../../hooks/useLikesCount";
import './DoctorCard.css'


export default function DoctorCard({ doctor }) {
    const likesCount = useLikesCount(doctor._id);
    const commentsCount = useCommentsCount(doctor._id)

    return (
        <Card border="light" className="home-card" style={{ width: '15rem' }}>
            <div className="home-card-img" variant="top" style={{ backgroundImage: `url(${doctor.imageUrl})` }}> </div>
            <Card.Body>
                <h6 className="">{doctor.title} {doctor.firstName} {doctor.secondName}</h6>
                <p className="text-secondary font-weight-light">{doctor.specialityName}</p>
                <Link to={'doc/' + doctor._id}><Button className="btn-sm" variant="primary">Детайли</Button></Link>
            </Card.Body>
            <Card.Footer className="text-secondary">
                <img src='/comment.png' width="16" style={{opacity: 0.6}} alt="comments" /> {commentsCount}
                <span className="mx-3">|</span>
                <img src='/like.png' width="16" style={{opacity: 0.6}} alt="likes" /> {likesCount}
            </Card.Footer>
        </Card>
    )
}