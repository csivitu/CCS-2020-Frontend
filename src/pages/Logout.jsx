import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function Logout() {
    const logout = () => {
        localStorage.removeItem('token');
    };

    useEffect(() => {
        logout();
    }, []);

    return <Redirect to="/" />;
}
