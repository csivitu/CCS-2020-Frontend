import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage/QuizPage';

import './App.css';

function App() {
    return (
        <>
            <div className="bg-div" />
            <Header />
            {/* <ComingSoon /> */}
            <Route exact path="/">
                <ComingSoon />
            </Route>
            <Route exact path="/home">
                <LandingPage />
            </Route>
            <Route exact path="/domains">
                <HomePage />
            </Route>
            <Route exact path="/quiz">
                <QuizPage />
            </Route>
            <Footer />
        </>

    );
}

export default App;
