import './App.css';
import Navigation from './components/Navigation/Nav';
import Footer from './components/Footer/Footer'
import MainContentRouter from './components/MainContentRouter';
import { AuthContext } from './contexts/AuthContext';
import { useState } from 'react';

export default function App() {
    const [user, setUser] = useState({
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
        <AuthContext.Provider value={{ user, onLogin, onLogout }}>
            <div className="App">
                <header user={user?.email}>
                    <Navigation />
                </header>
                <main id="main-content">
                    <MainContentRouter />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </AuthContext.Provider>
    );
}