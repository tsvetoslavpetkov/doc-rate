import { Col, Row } from "react-bootstrap";
import './DoctorItemFooter.css'

export default function DoctorItemFooter({ doctor }) {
    return (
        <Row className="footer-doctor-item m-1 p-1 border border-dark align-middle">
            <Col sm={2}>
            <div className="footer-doctor-item-image" style={{backgroundImage: `url(${doctor.imageUrl})`}}>
            </div>
            </Col>
            <Col>
                <div className="footer-doctor-item-name">
                    <p>{doctor.title} {doctor.firstName} {doctor.secondName}</p>
                </div>
            </Col>
        </Row>
    )
}