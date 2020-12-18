import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function Logout() {
    const logout = () => {
        localStorage.removeItem('token');
    };

    useEffect(() => {
        logout();
    }, []);

    if (localStorage.getItem('token')) {
        return <></>;
    }

    return <Redirect to="/" />;
}
