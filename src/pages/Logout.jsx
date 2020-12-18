import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateLogin, setUsername } from '../redux/user/userSlice';

export default function Logout() {
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem('token');
        dispatch(updateLogin(false));
        dispatch(setUsername(''));
        window.location = '/';
    };

    useEffect(() => {
        logout();
    }, []);

    return <Redirect to="/" />;
}
