import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './DoctorCard.css'

export default function DoctorCard({
    doctor
}) {
    return (
        <Card className="home-card" style={{ width: '15rem' }}>
            <div className="home-card-img" variant="top" style={{ backgroundImage: `url(${doctor.imageUrl})` }}> </div>
            <Card.Body>
                <Card.Title>{doctor.title} {doctor.firstName} {doctor.secondName}</Card.Title>
                <Card.Title>{doctor.speciality}</Card.Title>
                <Link to={'doc/' + doctor._id}><Button variant="primary">Детайли</Button></Link>
            </Card.Body>
        </Card>
    )
}