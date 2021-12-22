import './App.css';
import Navigation from './components/Navigation/Nav';
import Footer from './components/Footer/Footer'
import MainContentRouter from './components/MainContentRouter';
import { AuthProvider } from './contexts/AuthContext';
import { NotifProvider } from './contexts/NotifContext';
import Notification from './components/common/Notification';

export default function App() {

    return (
        <AuthProvider>
            <NotifProvider>
                <div className="App">
                    <Navigation />
                    <main id="main-content">
                        <Notification />
                        <MainContentRouter />
                    </main>
                    <Footer />
                </div>
            </NotifProvider>
        </AuthProvider>
    );
}