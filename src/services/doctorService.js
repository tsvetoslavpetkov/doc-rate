import { collection, getDocs } from 'firebase/firestore/lite';

export async function getAllDoctors(db) {
    const doctorsCol = collection(db, 'doctors');
    const doctorsSnapshot = await getDocs(doctorsCol);
    const doctorsList = doctorsSnapshot.docs.map(doc => doc.data());
    console.log(doctorsList);
    return doctorsList;
  }