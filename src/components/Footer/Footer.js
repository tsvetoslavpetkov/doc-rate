import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

export default function Footer() {
    return (
    <>
        <div className="margin-footer-fix"></div>
        <Container fluid className="main-footer footer-container bg-dark p-3 text-secondary bottom">
            <Row >
                <Col sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>
        </Container>
    </>
    )
}