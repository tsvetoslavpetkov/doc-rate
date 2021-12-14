import { Container, Row, Col } from 'react-bootstrap';
import { getTopThree } from '../../services/doctorService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import DoctorItemFooter from './DoctorItemFooter';
import './Footer.css'



export default function Footer() {

    const [error, setError] = useState();
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        getTopThree()
            .then(res => {
                if (res.errorMessage) {
                    setError(res.errorMessage)
                } else {
                    setDoctors(res);
                }
            })
    }, [])

    return (
        <>
            <div className="margin-footer-fix"></div>
            <Container fluid className="main-footer footer-container bg-dark p-3 text-secondary bottom">
                <Container>
                    <Row >
                        <Col sm={4}>
                            <div>
                                <p>Последно добавени:</p>
                                {doctors?.map((doctor) => (
                                    <Link key={doctor._id} to={`/doc/${doctor._id}`} className="text-secondary" style={{ textDecoration: 'none' }}><DoctorItemFooter key={doctor._id} doctor={doctor} /></Link>
                                ))}
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div>
                                <p>Навигация:</p>
                                <div>
                                    <Link to={`/`} className="nav-link text-secondary" style={{ textDecoration: 'none' }}>Начало</Link>
                                    <Link to={`/contacts`} className="nav-link text-secondary" style={{ textDecoration: 'none' }}>Контакти</Link>
                                    <Link to={`/about`} className="nav-link text-secondary" style={{ textDecoration: 'none' }}>За нас</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}