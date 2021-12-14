import { Redirect, useParams } from 'react-router';
import { useAuth } from '../contexts/AuthContext'

export function isAuth(Component) {
    return function WrapperComponent(props) {
        const { isAuthenticated } = useAuth();

        return !isAuthenticated
            ? <Redirect to="/login"></Redirect>
            : <Component {...props} />
    }
}

export function isGuest(Component) {
    return function WrapperComponent(props) {
        const { isAuthenticated } = useAuth();

        return isAuthenticated
            ? <Redirect to="/"></Redirect>
            : <Component {...props} />
    }
}

export function isOwner(Component) {
    return function WrapperComponent(props) {
        const { user } = useAuth();
        const { id } = useParams();



        const isOwner = Boolean(user._id === id)

        return !isOwner
            ? <Redirect to="/"></Redirect>
            : <Component {...props} />
    }
}


