import React from 'react';

import comingsoon from '../../assets/ComingSoonPage/comingsoon.png';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';

import './ComingSoon.styles.css';

const ComingSoon = () => (
    <>

        <div className="main-div">
            <div className="first-div">
                <a href="https://csivit.com" rel="noreferrer" target="_blank">
                    <img src={csilogo} alt="CSIVIT" className="csi-logo" />
                </a>
            </div>
            <div className="second-div">
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
                </div>
            </div>
            <div className="third-div">Coming Soon</div>
        </div>
    </>
);

export default ComingSoon;
