import { useState, useEffect } from 'react';
// import validator from 'validator';
import { Card, Button} from 'react-bootstrap'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getOne } from '../../services/doctorService'
import './DoctorDetails.css'

export default function DoctorDetails() {
    const [doctor, setDoctor] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getOne(id).then(data => {
            setDoctor(data)
            console.log(data);
        })
    }, [id])

    return (
        <Card >
            <Card.Body>
                <h2>{doctor?.title} {doctor?.firstName} {doctor?.secondName}</h2>
                <div style={{ backgroundImage: `url(${doctor.imageUrl})`, height: '300px', width: '300px' }}></div>
                <h3>{doctor?.speciality}</h3>
                <h3>{doctor?.address}</h3>
                <Link to={doctor._id + '/edit'}><Button>Редактирай</Button></Link>
                <Button>Изтрий</Button>
            </Card.Body>
        </Card>
    )
}