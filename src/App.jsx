import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import api, { setAuthToken } from './api/api';
import {
    updateLogin, setUsername, setRegNo, setRound2,
} from './redux/user/userSlice';
import Token from './components/token';
import Login from './components/login';
import LandingPage from './pages/LandingPage/LandingPage';
// import DomainPage from './pages/DomainPage';
// import QuizPage from './pages/QuizPage/QuizPage';
import SlotPage from './pages/SlotPage/SlotPage';
// import RulesPage from './pages/RulesPage';
// import Loading from './components/loading';

import './App.css';
import SelectedPage from './pages/SelectedPage/SelectedPage';
import ThankYouPage from './pages/ThankYouPage/ThankYouPage';
import Logout from './pages/Logout';
// import SubmittedPage from './pages/SubmittedPage';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [notAllowed, setNotAllowed] = useState(false);
    const [verified, setVerified] = useState(true);
    const [isCSI, setIsCSI] = useState(false);
    const history = useHistory();

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const logout = () => {
        localStorage.removeItem('token');
        dispatch(updateLogin(false));
        dispatch(setUsername(''));
        dispatch(setRegNo(''));
        dispatch(setRound2(false));
        history.push('/');
    };

    const onLogin = async () => {
        const token = localStorage.getItem('token');
        setAuthToken(token);
        const response = await api.get(
            `${process.env.REACT_APP_ACCOUNTS_URL}/user`,
        );
        const { user, success } = response.data;

        dispatch(setUsername(user.username));

        if (!success) {
            logout();
            return;
        }

        if (!user.verificationStatus) {
            setVerified(false);
            return;
        }
        if (user.regNo.startsWith('20') || user.scope.indexOf('csi') > -1) {
            setLoggedIn(true);
            dispatch(updateLogin(true));
            dispatch(setRegNo(user.regNo));

            if (user.scope.indexOf('csi') > -1) {
                setIsCSI(true);
            }

            if (user.scope.indexOf('r2') > -1) {
                dispatch(setRound2(true));
                return;
            }

            dispatch(setRound2(false));
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
                    isCSI={isCSI}
                />
            </Route>
            {isLoggedIn && (
                <>
                    {/* <Route exact path="/domains">
                        <DomainPage />
                    </Route>
                    <Route exact path="/submitted">
                        <SubmittedPage />
                    </Route>
                    <Route exact path="/rules">
                        <RulesPage />
                    </Route>
                    <Route exact path="/quiz/:domain">
                        <QuizPage />
                    </Route> */}
                    <Route exact path="/slot">
                        <SlotPage />
                    </Route>
                    <Route exact path="/selections">
                        <SelectedPage />
                    </Route>
                    <Route exact path="/thankyou">
                        <ThankYouPage />
                    </Route>
                    <Route exact path="/logout">
                        <Logout />
                    </Route>
                </>
            )}
        </>
    );
}

export default App;
