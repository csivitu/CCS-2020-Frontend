import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomPage';

function App() {
    return (
        <div>
            <Header />
            <Route exact path="/">
                <ComingSoon />
            </Route>
            <Route exact path="/home">
                <LandingPage />
            </Route>
            <Route exact path="/domains">
                <HomePage />
            </Route>
            <Footer />
        </div>

    );
}

export default App;
