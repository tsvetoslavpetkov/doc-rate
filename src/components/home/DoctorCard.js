import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './DoctorCard.css'

export default function DoctorCard({
    doctor
}) {
    return (
        <Card  border="light" className="home-card main-card" style={{ width: '15rem' }}>
            <div className="home-card-img" variant="top" style={{ backgroundImage: `url(${doctor.imageUrl})` }}> </div>
            <Card.Body>

                <h5 className="">{doctor.title} {doctor.firstName} {doctor.secondName}</h5>
                <h6 className="text-secondary font-weight-light">{doctor.specialityName}</h6>
                <Link to={'doc/' + doctor._id}><Button className="btn-sm" variant="primary">Детайли</Button></Link>
            </Card.Body>
            <Card.Footer></Card.Footer>
        </Card>
    )
}