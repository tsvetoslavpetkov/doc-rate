import './App.css';
import Navigation from './components/Navigation/Nav';
import Footer from './components/Footer/Footer'
import MainContentRouter from './components/MainContentRouter';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {

    return (
        <AuthProvider>
            <div className="App">
                <Navigation />
                <main id="main-content">
                    <MainContentRouter />
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}