import { useState, useEffect } from 'react';
// import validator from 'validator';
import {Container, Card, } from 'react-bootstrap'
import { useParams } from 'react-router';
import { getOne } from '../../services/doctorService'
import './DoctorDetails.css'

export default function DoctorDetails() {
    const [firstName, setFirstName] = useState();
    const { id } = useParams();

    useEffect(() => {

        getOne(id)
            .then(data => 
                setFirstName(data.firstName)
            )

    }, [id])


    return (
        <Container fluid className="d-flex align-items-center justify-content-center container" style={{ minHeight: "100vh", width: "100%" }}>
            <Card >
                <Card.Body className="login-card">
                    <h2>{firstName}</h2>
                </Card.Body>
            </Card>
        </Container>
    )
}