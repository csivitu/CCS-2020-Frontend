/* eslint-disable react/prop-types */
import React from 'react';

const Header = ({ username }) => (
    <div className="navbar-div d-flex align-items-center justify-content-between">
        <div className="right mx-5 my-auto">
            <a href="https://ccs.csivit.com/domains"><h5 className="white link">HOME</h5></a>
        </div>
        <div className="left d-flex justify-content-between align-items-center mx-5">
            <a href="https://css.csivit.com/logout"><h5 className="white link">LOGOUT</h5></a>
            <h4>{ username }</h4>
        </div>
    </div>
);

export default Header;
