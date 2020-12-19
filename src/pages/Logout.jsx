import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    updateLogin, setUsername, setRound2, setRegNo,
} from '../redux/user/userSlice';

export default function Logout() {
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem('token');
        dispatch(updateLogin(false));
        dispatch(setUsername(''));
        dispatch(setRegNo(''));
        dispatch(setRound2(false));
        window.location.href = '/';
    };

    useEffect(() => {
        logout();
    }, []);

    return <Redirect to="/" />;
}
