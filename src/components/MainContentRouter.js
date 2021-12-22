import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './Home/Home';
import MyProfile from './MyProfile/MyProfile';
import About from './About/About'
import Contacts from './Contacts/Contacts';
import Login from './Login/Login'
import Register from './Registration/Register';
import CreateDoctor from './CreateDoctor/CreateDoctor';
import DoctorDetails from './DoctorDetails/DoctorDetails';
import Logout from './Logout/Logout';
import EditDoctor from './EditDoctor/EditDoctor';

//HOCs for route guarding
import { isAuth, isGuest, isOwner } from '../hoc/Auth';

export default function MainContentRouter() {
    return (
        <Container fluid className="d-flex justify-content-center container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/myprofile" component={MyProfile} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/login" component={isGuest(Login)} />
                <Route path="/register" component={isGuest(Register)} />
                <Route path="/logout" component={isAuth(Logout)} />
                <Route path="/doc/create" exact component={isAuth(CreateDoctor)} />
                <Route path="/doc/:id" exact component={DoctorDetails} />
                <Route path="/doc/:id/edit" exact component={isAuth(isOwner(EditDoctor))} />
            </Switch>
        </Container>
    )
}