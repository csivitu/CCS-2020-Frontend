import React from 'react';
import { IconContext } from 'react-icons';
import {
    FaInstagram, FaFacebook, FaLinkedin, FaTwitter,
} from 'react-icons/fa';

import comingsoon from '../../assets/ComingSoonPage/comingsoon.png';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';

import './ComingSoon.styles.css';

const ComingSoon = () => (
    <>
        <div className="navbar-div" />
        <div className="main-div">
            <div className="first-div">
                <a href="https://csivit.com"><img src={csilogo} alt="CSIVIT" className="csi-logo" /></a>
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
        <div className="bottom-div">
            <div className="icons-div">
                <a href="https://www.instagram.com/csivitu/" aria-label="Instagram">
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            className: 'csi-instagram',
                            size: '3rem',
                        }}
                    >
                        <div>
                            <FaInstagram />
                        </div>
                    </IconContext.Provider>
                </a>
                <a href="https://www.facebook.com/csivitu/" aria-label="Facebook">
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            className: 'csi-facebook',
                            size: '3rem',
                        }}
                    >
                        <div>
                            <FaFacebook />
                        </div>
                    </IconContext.Provider>
                </a>
                <a href="https://twitter.com/csivitu" aria-label="Twitter">
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            className: 'csi-twitter',
                            size: '3rem',
                        }}
                    >
                        <div>
                            <FaTwitter />
                        </div>
                    </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/company/computer-society-of-india-vit-student-chapter/" aria-label="LinkedIn">
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            className: 'csi-linkedin',
                            size: '3rem',
                        }}
                    >
                        <div>
                            <FaLinkedin />
                        </div>
                    </IconContext.Provider>
                </a>
            </div>
        </div>
    </>
);

export default ComingSoon;
