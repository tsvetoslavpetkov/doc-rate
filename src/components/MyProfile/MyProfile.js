import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getAllMine } from '../../services/doctorService';
import DoctorCard from '../Home/DoctorCard';

export default function Home() {
    const { user } = useAuth();
    const [doctors, setDoctors] = useState([]);

    document.title = `DocRate | @${user.email.split('@')[0]}`

    useEffect(() => {
        getAllMine(user._id)
            .then(doctors => {
                if (doctors) {
                    setDoctors(doctors)
                }
            })
    }, [user._id])

    return (<>
        {!doctors.length
            ? <h3>Няма добавени лекари!</h3>
            : <div>
                <h5 className="my-3" >Лекари създадени от @{user.email.split('@')[0]}</h5>
                <Row xs={2} md={5} className="g-4">
                    {doctors.map((doctor) => (
                        <Col style={{ minWidth: '300px' }} key={doctor._id}>
                            <DoctorCard doctor={doctor} key={doctor._id}/>
                        </Col>
                    ))}
                </Row>
            </div>
        }</>
    )
}

