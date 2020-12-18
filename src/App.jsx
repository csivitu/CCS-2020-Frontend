import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import api, { setAuthToken } from './api/api';
import { updateLogin } from './redux/user/userSlice';
import Token from './components/token';
import Login from './components/login';
import LandingPage from './pages/LandingPage/LandingPage';
import DomainPage from './pages/DomainPage';
import QuizPage from './pages/QuizPage/QuizPage';
import SlotPage from './pages/SlotPage/SlotPage';
// import Loading from './components/loading';

import './App.css';
import SelectedPage from './pages/SelectedPage/SelectedPage';
import ThankYouPage from './pages/ThankYouPage/ThankYouPage';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [notAllowed, setNotAllowed] = useState(false);
    const [verified, setVerified] = useState(true);

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const logout = () => {
        localStorage.removeItem('token');
    };

    const onLogin = async () => {
        const token = localStorage.getItem('token');
        setAuthToken(token);
        const response = await api.get(
            `${process.env.REACT_APP_ACCOUNTS_URL}/user`,
        );
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
            dispatch(updateLogin(true));
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
            {isLoggedIn && (
                <>
                    <Route exact path="/domains">
                        <DomainPage />
                    </Route>
                    <Route exact path="/quiz/:domain">
                        <QuizPage />
                    </Route>
                    <Route exact path="/selections">
                        <SelectedPage />
                    </Route>
                    <Route exact path="/thankyou">
                        <ThankYouPage />
                    </Route>
                    <Route exact path="/slot">
                        <SlotPage />
                    </Route>
                </>
            )}
        </>
    );
}

export default App;
