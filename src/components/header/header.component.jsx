/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const username = useSelector((state) => state.user.username);
    return (
        <div className="navbar-div d-flex align-items-center justify-content-between">
            <div className="right mx-5 my-auto d-flex justify-content-between align-items-center mx-5">
                <a href={username.length > 0 ? '/domains' : '/'}>
                    <h5 className="white link">HOME</h5>
                </a>
                <a href="/rules">
                    <h5 className="white link">RULES</h5>
                </a>
            </div>
            <div className="left d-flex justify-content-between align-items-center mx-5">
                {username.length > 0 ? (
                    <>
                        <a href="/logout">
                            <h5 className="white link mr-4">LOGOUT</h5>
                        </a>
                        <h4>{username}</h4>
                    </>
                ) : (
                    <a href="/login">
                        <h5 className="white link mr-3">LOGIN</h5>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Header;
