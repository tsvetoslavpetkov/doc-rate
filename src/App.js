import './App.css';
import Navigation from './components/Navigation/Nav';
import Footer from './components/Footer/Footer'
import MainContentRouter from './components/MainContentRouter';

export default function App() {
    return (
        <div className="App">
            <header>
                <Navigation />
            </header>
            <main id="main-content">
                <MainContentRouter />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}