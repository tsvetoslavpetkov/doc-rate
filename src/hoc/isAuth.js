import { Redirect } from 'react-router';
import {useAuth} from '../contexts/AuthContext'

export function isAuth(Component) {
    return function WrapperComponent (props) {
        const {isAuthenticated} = useAuth();

        return !isAuthenticated
        ? <Redirect to="/login"></Redirect>
        : <Component {...props} />
    }
}

export function isGuest(Component) {
    return function WrapperComponent (props) {
        const {isAuthenticated} = useAuth();

        return isAuthenticated
        ? <Redirect to="/"></Redirect>
        : <Component {...props} />
    }
}
