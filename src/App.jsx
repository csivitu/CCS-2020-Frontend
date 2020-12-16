import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import api, { setAuthToken } from './api/api';
import Token from './components/token';
import Login from './components/login';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage/QuizPage';
import DiscordPage from './pages/DiscordPage/DiscordPage';

import './App.css';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [notAllowed, setNotAllowed] = useState(false);
    const [verified, setVerified] = useState(true);

    const logout = () => {
        localStorage.removeItem('token');
    };

    const onLogin = async () => {
        const token = localStorage.getItem('token');
        setAuthToken(token);
        const response = await api.get(`${process.env.REACT_APP_ACCOUNTS_URL}/user`);
        const { user, success } = response.data;

        if (!success) {
            logout();
            return;
        }

        if (!user.verificationStatus) {
            setVerified(false);
            return;
        }
        if (user.regNo.startsWith('20') || user.scope.indexOf('csi') > -1) {
            // store in redux
            setLoggedIn(true);
            return;
        }

        setNotAllowed(true);
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            onLogin();
        }
    }, []);

    return (
        <>
            <div className="bg-div" />
            <Route path="/oauth/token">
                <Token onLogin={onLogin} />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            {/* <ComingSoon /> */}
            <Route exact path="/">
                <LandingPage
                    verified={verified}
                    loggedIn={loggedIn}
                    notAllowed={notAllowed}
                />
            </Route>
            <Route exact path="/domains">
                <HomePage />
            </Route>
            <Route exact path="/quiz">
                <QuizPage />
            </Route>
            <Route exact path="/discord">
                <DiscordPage />
            </Route>
        </>

    );
}

export default App;
