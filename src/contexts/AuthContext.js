import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'
import { getUserImage } from '../services/authService';

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useLocalStorage('user', {
        accessToken: '',
        email: '',
        _id: '',
    })
    const [userImage, setUserImage] = useState('/user.png');

    getUserImage(user._id).then(res => {
        if (res?.imageUrl) {
            let newImage = userImage;
            newImage = res.imageUrl
            setUserImage(newImage)
        }
    })

    function onLogin(authData) {
        setUser(authData);
    }

    function onLogout() {
        setUser({
            accessToken: '',
            email: '',
            _id: '',
        });
    }

    function setImage(url) {
        setUserImage(url)
    }



    return (
        <AuthContext.Provider value={{ user, userImage, setImage, onLogin, onLogout, isAuthenticated: Boolean(user._id) }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}