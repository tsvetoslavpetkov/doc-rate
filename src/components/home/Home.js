import './Home.css';
import { getAll } from '../../services/doctorService';
import { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import {Row, Col} from 'react-bootstrap'

export default function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAll(response => {
      console.log(response);
    })
      .then(doctors => {
        if (doctors) {
          setDoctors(doctors)
        }
      })
  }, [])
  return (
    <div>
      {/* <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            {doctors.map(doctor => <DoctorCard doctor={doctor} key={doctor._id} />})}
          </Col>
        ))}
      </Row> */}
      <Row xs={1} md={5} className="g-4">
        {doctors.map((doctor) => (
          <Col key={doctor._id}>
            <DoctorCard doctor={doctor} key={doctor._id} />
          </Col>
        ))}
      </Row>
      
    </div>
  );
}

