import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function DoctorCard({
    doctor
}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{doctor.firstName} {doctor.secondName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Link to={'doc/' + doctor._id}><Button variant="primary">Детайли</Button></Link>
            </Card.Body>
        </Card>
    )
}