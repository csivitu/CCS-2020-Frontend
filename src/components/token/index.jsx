import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Token(props) {
    const { onLogin } = props;
    const query = useQuery();

    const token = query.get('token');
    const state = query.get('state');

    // Only accept token if state matches
    if (state === localStorage.getItem('state')) {
        localStorage.setItem('token', token);
        localStorage.removeItem('state');
    }

    onLogin();
    return <Redirect to="/" />;
}

Token.propTypes = {
    onLogin: propTypes.func.isRequired,
};
