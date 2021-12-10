import './Home.css';
import { getAll } from '../../services/doctorService';
import { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import { Row, Col } from 'react-bootstrap'

export default function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAll()
      .then(doctors => {
        if (doctors) {
          setDoctors(doctors)
        }
      })
  }, [])
  return (<>
    {!doctors.length
      ? <h3>Няма добавени лекари!</h3>
      : <Row xs={2} md={5} className="g-4">
        {doctors.map((doctor) => (
          <Col style={{ minWidth: '300px' }} key={doctor._id}>
            <DoctorCard doctor={doctor} key={doctor._id} />
          </Col>
        ))}
      </Row>
    }</>
  )
}

