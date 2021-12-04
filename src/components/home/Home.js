import './Home.css';
import { getAll } from '../../services/doctorService';
import { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

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
      {doctors.map(doctor => <DoctorCard doctor={doctor} key={doctor._id} />)}
    </div>
  );
}

