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
import EditDoctor from './EditDoctor/EditDoctor';

import { isAuth, isGuest } from '../hoc/isAuth';

export default function MainContentRouter() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center container" style={{ minHeight: "100vh", width: "100%" }}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Doctors} />
                <Route path="/login" component={isGuest(Login)} />
                <Route path="/register" component={isGuest(Register)} />
                <Route path="/logout" component={isGuest(Logout)} />
                <Route path="/doc/create" exact component={isAuth(CreateDoctor)} />
                <Route path="/doc/:id" exact component={DoctorDetails} />
                <Route path="/doc/:id/edit" exact component={isAuth(EditDoctor)} />
            </Switch>
        </Container>
    )
}