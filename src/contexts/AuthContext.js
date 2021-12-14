import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useLocalStorage('user', {
        accessToken: '',
        email: '',
        _id: '',
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

    return (
        <AuthContext.Provider value={{ user, onLogin, onLogout, isAuthenticated: Boolean(user._id) }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}