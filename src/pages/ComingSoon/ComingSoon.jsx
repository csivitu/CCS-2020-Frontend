import React from 'react';

import comingsoon from '../../assets/comingsoon.png';

import './ComingSoon.styles.css';

const ComingSoon = () => (
    <>
        <div className="navbar-div" />
        <div className="main-div">
            <div className="text-div">
                <div className="core">CORE</div>
                <div className="committee">COMMITTEE</div>
                <div className="selections">SELECTIONS</div>
            </div>
            <div className="illustration-div">
                <img
                    src={comingsoon}
                    alt="Get ready!!"
                    className="illustration"
                />
                <div className="coming-soon">Coming Soon</div>
            </div>
        </div>
        <div className="bottom-div" />
    </>
);

export default ComingSoon;
