import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Nav.js';
import Footer from './components/Footer/Footer.js'
import Home from './components/home/Home.js';
import About from './components/about/About.js'
import Doctors from './components/doctors/Doctors.js';
import Login from './components/login/Login.js'

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