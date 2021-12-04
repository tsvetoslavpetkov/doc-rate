import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About'
import Doctors from './doctors/Doctors';
import Login from './login/Login'
import Register from './registration/Register';
import CreateDoctor from './createDoctor/CreateDoctor';
import DoctorDetails from './doctorDetails/DoctorDetails';
import { Container } from 'react-bootstrap';
import Logout from './logout/Logout';

export default function MainContentRouter() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center container" style={{ minHeight: "100vh", width: "100%" }}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Doctors} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
                <Route path="/doc/create" exact component={CreateDoctor} />
                <Route path="/doc/:id" exact component={DoctorDetails} />
            </Switch>
        </Container>
    )
}