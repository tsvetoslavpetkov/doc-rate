import { useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { getOne } from '../services/doctorService';

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
        const [isOwner, setIsOwner] = useState(true)

        getOne(id).then(data => {
            const owner = data._ownerId;
            if (owner !== user._id) {
                setIsOwner(false)
            }
        })

        return !isOwner
            ? <Redirect to={`/doc/${id}`}></Redirect>
            : <Component {...props} />
    }
}


