import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Nav';
import Footer from './components/Footer/Footer'
import Home from './components/home/Home';
import About from './components/about/About'
import Doctors from './components/doctors/Doctors';
import Login from './components/login/Login'
import Register from './components/registration/Register';
import CreateDoctor from './components/createDoctor/CreateDoctor';

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
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Doctors} />
        <Route path="/doc/create" component={CreateDoctor} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}