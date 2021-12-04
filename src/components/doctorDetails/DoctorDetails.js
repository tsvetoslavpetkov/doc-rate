import { useState, useEffect } from 'react';
// import validator from 'validator';
import {Card, } from 'react-bootstrap'
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
        
            <Card >
                <Card.Body className="login-card">
                    <h2>{firstName}</h2>
                </Card.Body>
            </Card>
    )
}