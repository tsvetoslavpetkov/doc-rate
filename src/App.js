import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Nav.js';
import Footer from './components/Footer/Footer.js'
import Home from './components/home/Home.js';
import About from './components/about/About.js'
import Doctors from './components/doctors/Doctors.js';
import Login from './components/login/Login.js'

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from './config/firebaseConfig';

import { collection, getDocs } from 'firebase/firestore/lite';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getAllDoctors(db) {
    const doctorsCol = collection(db, 'doctors');
    const doctorsSnapshot = await getDocs(doctorsCol);
    const doctorsList = doctorsSnapshot.docs.map(doc => doc.data());
    console.log(doctorsList);
    return doctorsList;
  }

export default function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main id="main-content">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Doctors} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Doctors} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}