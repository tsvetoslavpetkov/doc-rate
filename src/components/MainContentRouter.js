import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About'
import Doctors from './doctors/Doctors';
import Login from './login/Login'
import Register from './registration/Register';
import CreateDoctor from './createDoctor/CreateDoctor';
import DoctorDetails from './doctorDetails/DoctorDetails';

export default function MainContentRouter() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Doctors} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Doctors} />
            <Route path="/doc/create" exact component={CreateDoctor} />
            <Route path="/doc/:id" exact component={DoctorDetails} />
        </Switch>
    )
}