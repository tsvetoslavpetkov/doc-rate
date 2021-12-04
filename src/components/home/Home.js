import './Home.css';
import { getAll } from '../../services/doctorService';
import { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

export default function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAll()
      .then(data => {
        setDoctors(Object.values(data));
      });
  }, [])
  return (
    <div>
    {doctors.map(doctor => <DoctorCard doctor={doctor} key={doctor._id} />)}
    </div>
  );
}

