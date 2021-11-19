import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Home from './views/home/Home.js';
import About from './views/about/About.js';
import Doctors from './views/doctors/Doctors.js';

export default function App() {
  return (
    <div className="App">
    <Nav />

    <main id="main-content">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Doctors} />
        <Route path="/" component={Home} />
    </main>

    </div>
  );
}